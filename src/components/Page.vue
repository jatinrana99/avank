<template>
    <Header></Header>
    <ContentHeader></ContentHeader>
    <NavInfo></NavInfo>
    <Content></Content>

</template>

<script>
import Header from  './Header.vue'
import ContentHeader from './ContentHeader.vue'
import NavInfo from './NavInfo.vue'
import Content from './Content.vue'
export default {
    name:`Page`,
    components:{
        Header,
        ContentHeader,
        NavInfo,
        Content
    },
    data(){

    }
    
}
</script>

<style scoped>

</style>