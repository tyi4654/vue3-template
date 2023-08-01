<template>
    <div class="search-bar">
        <el-input type="text" v-bind="attrs">
            <template v-for="(value, name) in slots" #[name]>
                <slot :name="name"></slot>
            </template>
        </el-input>
    </div>
</template>

<script setup lang="ts">
import { useSlots, useAttrs, inject } from 'vue'
const slots = useSlots()
const attrs = useAttrs()
console.log(inject('somethingKey'))
console.log(slots)
</script>

<style lang="scss" scoped>
.search-bar {
    padding: 15px;
}
</style>
