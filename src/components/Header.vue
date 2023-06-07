<template>
    <div class="header">
        <div class="header-main">
            <nav>
            <div class="logo">
                <img src="../assets/Logo.png" alt="">
            </div>
        <div class="list">
            <ul>
                <li >EXCHANGE</li>
                <li >BNPL</li>
                <li >CARDS</li>
            </ul>
        </div>
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" dats-bs-toggle="dropdown" aria-expanded="false" id="en">
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
                
                    <img src="../assets/mdi_user-circle.png" alt="">
                    Name Surname
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
width: 1440px;
height: 80px;


}

.header-main nav{
    display: flex;
    justify-content: space-around;
    height: 96px;
    /* background-color: blanchedalmond; */
    align-content: center;
    align-items: center;

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


li{

width: 84px;
height: 17px;


font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* black/transparent/300 */

color: rgba(54, 65, 64, 0.64);
margin-right: 40px;
}

#en{

width: 18px;
/* height: 15px; */

font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 12px;
line-height: 15px;
/* identical to box height */

text-align: center;

/* black/transparent/200 */

color: rgba(54, 65, 64, 0.32);
}

.myExchange{

font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* black/transparent/300 */

color: rgba(54, 65, 64, 0.64);
margin-top: 8px;
}


.name{

font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* black/solid/500 */

color: #364140;

}

</style>