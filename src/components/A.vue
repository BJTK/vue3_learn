<template>
    <div id="a">
        <h1>这是A组件</h1>
        <button @click="btn">发射</button>
        <header><h5>这是头部</h5><slot name="xxx"></slot></header>
        <article><h5>这是主体</h5><slot name="yyy"></slot></article>
        <footer><h5>{{ aNum }}</h5></footer>

        <mark>{{name}}</mark>
        <button @click="changeName">修改</button>
    </div>
</template>
<script setup>
import {getSlider} from "../api/slider";
import { useStore } from '../store'
import {storeToRefs} from 'pinia';
import { inject, ref } from 'vue';
// import  {useStore} from 'vuex';
import mitter from '../plugins/bus';
let str = ref("这是来自A组件的数据！");
let btn = () =>{
    mitter.emit('fn',str)
}
const aNum = inject('changgeNum')
let store = useStore();
let {counter,name,age} = storeToRefs(store)
const changeName = () =>{
    name.value = '张柳'
}
//也就是说pinnia利用storeToRefs可以直接修改store里面的值；而vuex是不可以修改的；
console.log(store)
console.log(name,age,counter)
onBeforeMount( () =>{
    getSlider().then(res =>{
     console.log(res)
    })
})
</script>