<template>

    <div class="popup">
        <div class="innerPop"> </div>
            <slot>  </slot>
    <button class="close" v-on:click="TogglePopup()">X</button>
    </div>
    </template>
    
    <script>
    export default {
        name:`Pop`,
        props:['TogglePopup']
    }
    </script>
    
    <style scoped>
    
    .popup{
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 99;
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
        height: 500px;
        width: 400px;
        margin: auto;
    }
    
    .innerPop{
        padding:10px ;
    }
    
    .close{
        background-color: red;
    position: absolute;
    right: -59px;
    top: 20px;
    height: 30px;
    border-bottom-left-radius: 48%;
    padding: 6px;
    }
    </style>