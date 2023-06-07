<template>
    <Header></Header>
    <ContentHeader></ContentHeader>
    <NavInfo></NavInfo>
    <Content></Content>
    <Footer></Footer>

</template>

<script>
import Header from  './Header.vue'
import ContentHeader from './ContentHeader.vue'
import NavInfo from './NavInfo.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
export default {
    name:`Page`,
    components:{
        Header,
        ContentHeader,
        NavInfo,
        Content,
        Footer
    },
    data(){

    }
    
}
</script>

<style scoped>

</style>