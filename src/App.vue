<script setup lang="ts">
import { computed, ref, watch, type DefineComponent } from "vue";

import { useDebouncedRef } from "@/composables";
import { Node, RedBlackTree } from "@/structures/red-black-tree";
import { EN_RBT, ID_RBT } from "@/helpers/dictionary";
import { debounce } from "@/helpers/debounce";
import { darkMode } from "@/helpers/theme";
import { Language } from "@/types/dictionary";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import SelectButton from "primevue/selectbutton";

// Data Pilihan Bahasa
const languageOptions: { label: string; value: Language }[] = [
    { label: "Indonesian", value: Language.BAHASA_INDONESIA },
    { label: "English", value: Language.ENGLISH },
];

// Inisiasi Input Awal (Default)
const selectedLanguage = ref<Language>(Language.BAHASA_INDONESIA);
const searchQuery = useDebouncedRef<string>("", 200);

// RBT Aktif Yang Digunakan
const activeRBT = computed<RedBlackTree>(() => (selectedLanguage.value === Language.BAHASA_INDONESIA ? ID_RBT : EN_RBT));

// Hasil Pencarian
const result = computed<Node[]>(() => activeRBT.value.getNodesBySimiliarity(searchQuery.value));

// Menyimpan Gimmick (Opsional) Hasil Pencarian Paling Atas
const lastResultGimmick = computed<(() => any) | null>(() => result.value[0]?.gimmick);

// Komponen Gimmick Aktif Yang Digunakan
// Tergantung Pada Gimmick Yang Terdapat Pada Node, Default "div" = Tidak Ada
const activeGimmickComponent = ref<string | DefineComponent>("div");

// Menjalankan Gimmick
watch(lastResultGimmick, async (gimmick: (() => any) | null) => {
    activeGimmickComponent.value = "div";

    // Jika Tidak Ada Gimmick, Tidak Melakukan Apapun Hingga Pencaharian Berikutnya
    if (!gimmick) {
        return;
    }

    // Menjalankan Gimmick Dengan Debounce
    // Debounce Untuk Menghindari Pemanggilan Gimmick Secara Berulang
    const debouncedGimmick = debounce(gimmick, 1000);
    activeGimmickComponent.value = await debouncedGimmick();
});
</script>

<template>
    <!-- Tema Warna -->
    <nav class="container mx-auto px-2 py-2 md:px-4">
        <div class="w-100 text-end">
            <Button @click="darkMode = !darkMode" :icon="`iconify ${darkMode ? 'fluent--weather-moon-24-filled' : 'fluent--weather-sunny-24-filled'}`" variant="text" rounded></Button>
        </div>
    </nav>

    <main class="container mx-auto pt-24 pb-12 px-2 md:px-4">
        <section class="text-center">
            <h1 class="text-4xl">Lexionary</h1>
            <p class="mt-3">Find your lexical needs (tentative).</p>

            <div class="mt-8">
                <div class="mt-8">
                    <!-- Ganti Bahasa -->
                    <div class="flex gap-x-4 justify-center">
                        <SelectButton v-model="selectedLanguage" :options="languageOptions" optionValue="value" optionLabel="label"></SelectButton>
                    </div>

                    <!-- Input Pencaharian -->
                    <InputText v-model="searchQuery" placeholder="Search your word" class="mt-4"></InputText>
                </div>
            </div>
        </section>

        <!-- Wadah Gimmick Jenis Komponen -->
        <component :is="activeGimmickComponent"></component>

        <!-- Hasil Pencaharian -->
        <section v-if="searchQuery" class="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <div v-for="item in result" :key="item.key" class="px-4 py-2 border shadow rounded-xl" :class="darkMode ? 'bg-neutral-900' : 'bg-white'">
                <h5 class="text-2xl font-bold">{{ item.key }}</h5>
                <h6>{{ item.keyTranslated }}</h6>
                <p class="text-sm mt-2">{{ item.description }}</p>
                <p class="text-sm mt-2">{{ item.descriptionTranslated }}</p>
            </div>
        </section>
    </main>
</template>

<style>
@import url("@/assets/style.css");
@import url("@/assets/gimmick.css");
</style>
