<script setup>
import { inject } from 'vue'

defineProps({
    msg: String
})

const somethingValue = inject('somethingKey')

console.log(somethingValue)
</script>

<template>
    <el-button v-bind="$attrs">
        <slot>透传</slot>
    </el-button>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
