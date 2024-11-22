<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { RedBlackTree } from './structures/red-black-tree'

const tree1 = new RedBlackTree()

tree1.add('S')
tree1.add('E')
tree1.add('K')
tree1.add('O')
tree1.add('L')
tree1.add('A')
tree1.add('H')

tree1.remove('E')
tree1.remove('O')
tree1.remove('K')
tree1.remove('A')

console.log(tree1.getPreOrder())
console.log(tree1.getInOrder())
console.log(tree1.getPostOrder())
</script>

<template>Test</template>
