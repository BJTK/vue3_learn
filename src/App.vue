<template>
  <div>
    <h1>Vue3 + Vite框架项目练习</h1>
    <div>{{ msg }} ===> {{ msgChange }}</div>
    <div>{{ arr }}</div>
    <h3>{{ obj }}</h3>
    <input type="text" v-model="info" />
    <input type="text" v-model="obj.hobby[0].a" />
    <button @click="btn">I am Button</button>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <div style="color: red">组件显示区域:</div>
    <router-view />
    <h2>父组件显示区域</h2>
  </div>
</template>
<script setup>
import { reactive, ref, toRefs } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";

let msg = ref("这一条测试数据");
let info = ref("这是watch监听的数据");
let arr = reactive([
  {
    id: "001",
    name: "tian1",
  },
  {
    id: "002",
    name: "tian2",
  },
  {
    id: "003",
    name: "tian3",
  },
  {
    id: "004",
    name: "tian4",
  },
  {
    id: "5",
    name: "tian5",
  },
]);
let obj = reactive({
  name: "tt",
  age: "123",
  hobby: [
    {
      a: 1,
      b: 2,
    },
  ],
});
watch(
  [info, () => obj.hobby],
  (n, o) => {
    console.log(n, o);
  },
  {
    immediate: true,
    deep: true,
  }
);

let { name, age } = toRefs(obj);
let btn = () => {
  msg.value = "这是被修改后的数据！";
  arr[0].id = "1111111";
  name.value = "9999";
};

let msgChange = computed({
  get() {
    return msg.value.slice(1, 2);
  },
  set() {
    console.log("改变了");
  },
});
onMounted(() => {
  console.log("onMounted1");
});
</script>
<style scoped>
</style>  
