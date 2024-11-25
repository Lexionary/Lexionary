<script setup lang="ts">
import { computed, ref, watch } from "vue"

import { Node } from "@/structures/red-black-tree"
import { EN_RBT, ID_RBT } from "@/helpers/dictionary"
import { debounce } from "@/helpers/debounce"

const searchQuery = ref<string>("");
const result = computed<Node[]>(() => EN_RBT.getNodesBySimiliarity(searchQuery.value));

const lastResultGimmick = computed<(() => void) | null>(() => result.value[0]?.gimmick);

watch(lastResultGimmick, (gimmick: (() => void) | null) => {
  if (!gimmick) {
    return;
  }

  const debouncedGimmick = debounce(gimmick);
  debouncedGimmick();
})
</script>

<template>
    <div>
        <h1>Search By Relevance</h1>

        <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar" />

        <ul>
            <template v-for="item in result" :key="item.key">
                <li style="white-space: pre">{{ item.toString() }}</li>
                <br />
            </template>
        </ul>
    </div>
</template>

<style>
@import url("@/assets/gimmick.css");
</style>
