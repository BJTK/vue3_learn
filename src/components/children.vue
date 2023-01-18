<template>
    <div>
    <!-- <div>我是父组件传过来的 ==> {{ msg }}</div>
    <button @click="sendData">add</button> -->
    <!-- <hr/>
    子:{{ message }}
    <button @click="btn">改变父组件的值</button> -->
    </div>
</template>
<script setup>
import { onBeforeMount, reactive, ref, watch } from "@vue/runtime-core";
// defineProps({
//     msg:{
//         type:String,
//         default:'哈哈哈' 
//     }
// })

// let num = ref(100);
// const emit = defineEmits<{
//     (e:'fn',id:number):void
// }>()
// const sendData = () =>{
//     emit('fn',num)
// }
// const props = defineProps({
//     message:{
//         type:Number,
//         default:100
//     }
// })
// const emits = defineEmits(['update:message'])
// const btn = () =>{
//     emits('update:message',200)
// }
</script>