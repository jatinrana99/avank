<template>
    <Header></Header>
    <ContentHeader></ContentHeader>
    <NavInfo></NavInfo>

</template>

<script>
import Header from  './Header.vue'
import ContentHeader from './ContentHeader.vue'
import NavInfo from './NavInfo.vue'
export default {
    name:`Page`,
    components:{
        Header,
        ContentHeader,
        NavInfo
    },
    data(){

    }
    
}
</script>

<style scoped>

</style>