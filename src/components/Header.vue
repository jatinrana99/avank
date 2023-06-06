<template>
    <div class="header">
        <div class="header-main">
            <nav>
            <div class="logo">
                <img src="../assets/Logo.png" alt="">
            </div>
        <div class="list">
            <ul>
                <li>EXCHANGE</li>
                <li>BNPL</li>
                <li>CARDS</li>
            </ul>
        </div>
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" dats-bs-toggle="dropdown" aria-expanded="false">
                EN
            </button>
            <!-- <ul>
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">English</a></li>
            </ul> -->
            <div class="myExchange">
                MY EXCHANGE
            </div>
            <div class="name">
                <div class="nameLogo">
                    <img src="../assets/mdi_user-circle.png" alt="">
                    Name Surname
                </div>
            </div>
        </div>
       </nav>
     </div>
    </div>
</template>

<script>
export default {
    name:`Header`
    
}
</script>

<style scoped>
.header{
    height: 96px;
    /* background-color: aqua; */
}

.header-main nav{
    display: flex;
    justify-content: space-around;
    height: 96px;
    /* background-color: blanchedalmond; */
    align-content: center;

}


.header-main nav .list ul {
    display: flex;
    list-style-type: none;
    color: rgb(54,65,64,0.64);
    margin-top: 34px;
    margin-bottom: 42px;
    gap: 40px;
}

.header-main nav .dropdown{
    display: flex;
    color:rgb(54,65,64,0.64);
    gap: 40px;
    font-size: 20px;
    margin-top: 34px;
    margin-bottom: 42px;
}
</style>