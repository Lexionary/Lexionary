<script setup lang="ts">
import { computed, ref } from "vue"

import { Node } from "./structures/red-black-tree"
import { EN_RBT, ID_RBT } from "@/helpers/dictionary"

const searchQuery = ref<string>("");
const result = computed<Node[]>(() => EN_RBT.getNodesBySimiliarity(searchQuery.value));
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
