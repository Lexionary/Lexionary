<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useDebouncedRef } from "@/composables";
import { Node, RedBlackTree } from "@/structures/red-black-tree";
import { EN_RBT, ID_RBT } from "@/helpers/dictionary";
import { debounce } from "@/helpers/debounce";
import { darkMode } from "@/helpers/theme";
import { Language } from "@/types/dictionary";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import SelectButton from "primevue/selectbutton";

const languageOptions: { label: string; value: Language }[] = [
    { label: "Indonesian", value: Language.BAHASA_INDONESIA },
    { label: "English", value: Language.ENGLISH },
];

const selectedLanguage = ref<Language>(Language.BAHASA_INDONESIA);
const searchQuery = useDebouncedRef<string>("", 200);

const activeRBT = computed<RedBlackTree>(() => (selectedLanguage.value === Language.BAHASA_INDONESIA ? ID_RBT : EN_RBT));
const result = computed<Node[]>(() => activeRBT.value.getNodesBySimiliarity(searchQuery.value));

const lastResultGimmick = computed<(() => void) | null>(() => result.value[0]?.gimmick);
watch(lastResultGimmick, (gimmick: (() => void) | null) => {
    if (!gimmick) {
        return;
    }

    const debouncedGimmick = debounce(gimmick, 1000);
    debouncedGimmick();
});
</script>

<template>
    <nav class="container mx-auto px-2 py-2 md:px-4">
        <div class="w-100 text-end">
            <Button @click="darkMode = !darkMode" :icon="`iconify ${darkMode ? 'fluent--weather-moon-24-filled' : 'fluent--weather-sunny-24-filled'}`" variant="text" rounded></Button>
        </div>
    </nav>

    <main class="container mx-auto pt-24 pb-12 px-2 md:px-4">
        <section class="text-center">
            <h1 class="text-4xl">Lexionary</h1>
            <!-- Ganti taglinenya nanti -->
            <p class="mt-3">Find your lexical needs (tentative).</p>

            <div class="mt-8">
                <div class="mt-8">
                    <div class="flex gap-x-4 justify-center">
                        <SelectButton v-model="selectedLanguage" :options="languageOptions" optionValue="value" optionLabel="label"></SelectButton>
                    </div>

                    <InputText v-model="searchQuery" placeholder="Search your word" class="mt-4"></InputText>
                </div>
            </div>
        </section>

        <section v-if="searchQuery" class="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <div v-for="item in result" :key="item.key" class="px-4 py-2 bg-white border shadow rounded-xl">
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
