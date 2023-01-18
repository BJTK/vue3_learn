<template>
    <div id="about">
        <!-- <children :msgs="msgs" @fn="change" v-model:message = 'message'></children> -->
        <children  v-model:message = 'message'></children>
        <A>
            <template>
                
            </template>
            这是你大爷,
            也是你二大爷
        </A>
        <B></B>
    </div>
</template>
<script setup>
import mitt from "../plugins/bus.js"
import A from "../components/A.vue"
import B from "../components/B.vue"
import Children from "../components/children.vue"
let hh = ref(100000);
provide('changgeNum',hh);
let message = ref(100)
 let msgs = ref("我是父组件数据");
 let nn = ref(6)
   const change = (n) =>{
      nn = n.value
      console.log(n.value)
   }

</script>