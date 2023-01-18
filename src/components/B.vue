<template>
    <div>
    <div class="box">1</div>

    <div id="b">
        <h1>这是B组件</h1>
        {{ infomate }}
    </div>
    <!-- <Teleport to="#about">
        <div>传送回到大本营</div>
    </Teleport> -->
</div>
</template>
<script setup>
import { onBeforeMount } from '@vue/runtime-core';
import mitter from '../plugins/bus';
let infomate = ref("");
onBeforeMount(() =>{
    mitter.on('fn',e =>{
        infomate.value = e.value;
        console.log(e.value)
    })
})
</script>