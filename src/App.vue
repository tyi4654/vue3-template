<script setup>
import { h, reactive, ref, provide, defineComponent } from 'vue'
import { useMouse } from './hooks/mouse'
import SearchBar from './components/search-bar.vue'
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

import Header from './components/header.js'

const fromValue = ref('')
const select = ref('')
const initObj = reactive({ n: 2 })
const { x, y } = useMouse()

provide('somethingKey', initObj)

function changeOption(val) {
    ElMessage.success(`你选择了${val}`)
}

function clickSearch(e) {
    if (!fromValue.value) ElMessage.warning(`请输入关键词`)
    return
}

function aaaaaa() {
    console.log('123123123123123')
}
</script>

<template>
    <Header title="this is title" content="该方法接受和" @custom-event="aaaaaa">阿斯蒂芬阿斯蒂芬阿斯蒂芬</Header>
    <h3>{{ x }},{{ y }}</h3>
    <SearchBar v-model="fromValue" placeholder="关键词搜索" size="large">
        <template #prepend>
            <el-select v-model="select" size="large" placeholder="Select" style="width: 120px" @change="changeOption">
                <el-option label="Restaurant" value="Restaurant" />
                <el-option label="Order No." value="Order No." />
                <el-option label="Tel" value="Tel" />
            </el-select>
        </template>
        <template #append>
            <el-button :icon="Search" @click="clickSearch" />
        </template>
    </SearchBar>
</template>

<style lang="scss" scoped>
$bgColor: '#f00';
$link-color: blue;
$link-color: red;
a {
    color: $link-color;
}
h3 {
    color: var(--el-color-success-light-5);
}
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    background: $bgColor;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
