<script setup>
import { reactive, ref, provide, nextTick } from 'vue'
import { useMouse } from './hooks/mouse'
import SearchBar from './components/search-bar.vue'
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const fromValue = ref('')
const select = ref('')
const initObj = reactive({ n: 2 })
const { x, y } = useMouse()

provide('somethingKey', initObj)

class Personew {
    #width = 200
    #height = 100
    name = 500
    constructor(...args) {
        console.log(this.#width, this.#height, this.name, ...args)
    }
}

let ps = new Personew(1, 2, 3, 4, 5)
console.log(ps.name)

function Persion(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

function myNew(constructor, ...args) {
    let obj = Object.create(constructor.prototype)
    let result = constructor.call(obj, ...args)
    return typeof result === 'object' ? result : obj
}

let Persion1 = myNew(Persion, 'lucy', '18', '男')
let Persion2 = new Persion('bob', '20', '女')

console.log(Persion1)
console.log(Persion2 instanceof Persion)

LeapYear(120)

function LeapYear(year) {
    if (year < 1000) {
        ElMessage.warning('请输入正确的年份')
        return
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

const elOptions = {
    name: 'div',
    attr: { class: 'link', title: 'this is a link', href: 'https://www.baidu.com/' },
    text: 'this is a link'
}

createElement(elOptions)

function createElement(elOptions) {
    let el = document.createElement(elOptions.name)
    let props = Object.entries(elOptions.attr)
    for (let i = 0; i < props.length; i++) {
        el.setAttribute(props[i][0], props[i][1])
    }
    el.innerHTML = elOptions.text
    document.body.appendChild(el)
}

function deepClone(obj) {
    let temp = Array.isArray(obj) ? [] : {}
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                temp[key] = deepClone(obj[key])
            } else {
                temp[key] = obj[key]
            }
        }
    }

    return temp
}

function changeOption(val) {
    ElMessage.success(`你选择了${val}`)
}

var o = {
    a: 1,
    b: { c: 3, d: 4 },
    e: function () {
        return 5
    }
}

var arr = [1, 2, 3, 4, 5]

var o1 = deepClone(o)
console.log(o1)
var arr1 = deepClone(arr)
console.log(arr == arr1)
</script>

<template>
    <h3>{{ x }},{{ y }}</h3>
    <SearchBar v-model="fromValue" placeholder="关键词搜索" size="large">
        <template #prepend>
            <el-select v-model="select" size="large" placeholder="Select" style="width: 115px" @change="changeOption">
                <el-option label="Restaurant" value="Restaurant" />
                <el-option label="Order No." value="Order No." />
                <el-option label="Tel" value="Tel" />
            </el-select>
        </template>
        <template #append>
            <el-button :icon="Search" />
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
