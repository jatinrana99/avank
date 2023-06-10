<template>
    <div class="page">
    <div class="page1">
    <Header ></Header>
    <ContentHeader ></ContentHeader>
    <NavInfo ></NavInfo>
    <Content ></Content>
    <Footer ></Footer>
    <!-- <Form></Form> -->
</div>
</div>
   

</template>

<script>
import Header from  './Header.vue'
import ContentHeader from './ContentHeader.vue'
import NavInfo from './NavInfo.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
// import Form from './Form.vue'
export default {
    name:`Page`,
    components:{
        Header,
        ContentHeader,
        NavInfo,
        Content,
        Footer,
        // Form
    },
    data(){

    }
    
}
</script>

<style scoped>
.page{
    display: flex;
    justify-content: center;
}
.page1{
    width:1400px;
}
</style>