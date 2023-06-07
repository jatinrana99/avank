<template>
    <div class="contentHeader">
        <div id="account">My Account</div>   
        <nav class="navBar">
        <div class="contact" id="support">
            <img src="../assets/Vector.png" alt="" id="supportImg">
            Contact Support
        </div>
        <div class="contact" id="lockAccount">
            <img src="../assets/Lock.png" alt="" id="lockAccountImg">
            Lock the Account
        </div>
        <div class="contact" id="logOut">
            Log Out
        </div>
    </nav>

</div>
</template>

<script>
export default {
    name:`ContentHeader`
}
</script>

<style scoped>

.navBar{
    margin-top:45px ;
}

.contentHeader {
    background-color: rgb(140, 157, 157);
    /* border: 2px solid ; */
    display: flex;
    /* justify-content: space-around; */
    width: 1357px;
    height: 128px;
    background: #DEE6E6;
    box-shadow: inset 0px -90px 150px rgba(255, 255, 255, 0.24);
    border-radius: 24px;
    margin: 0px 89px;
    gap: 312px;
    justify-content: end;
}

.contact{
    background-color: rgba(0, 172, 153, 0.08);
font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 20px;
color: #00AC99;
border-radius: 12px;
display: initial;
}

#logOut{
    margin-left: 24px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-right: 40px;
    padding-top:14px ;
    padding-left: 64px;
    padding-right: 63px;
    padding-bottom:14px ;

background: linear-gradient(88.84deg, #00AC99 0%, #00E0B0 100%);
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
border-radius: 12px;
margin-top: 24px;
margin-bottom: 24px;
margin-left: 40px;
padding-top: 14px;
padding-bottom: 14px;
padding-right: 71px;
padding-left: 71px;


font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 20px;
/* identical to box height */

text-align: center;

/* white/solid/500 */

color: #FFFFFF;



}

#lockAccount{
    padding-bottom:14px ;
    margin-left: 16px;
    margin-top: 40px;
    margin-bottom: 40px;
    padding-top:14px ;
    padding-right: 18px;

}

#lockAccountImg{
    margin-right: 12px;
    padding-left: 23px;
    margin-bottom: 4px;

}

#support{
    margin-top: 40px;
    margin-bottom: 40px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-right: 23px;
    

}

#supportImg{
    padding-left:23px ;
    margin-right: 12px;

}

#account{
    margin-right: 191px;
    margin-top: 50px;
    margin-bottom: 49px;
    margin-right: 64px;
    width: 153px;
    height: 29px;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
color: rgba(54, 65, 64, 0.8);
}


</style>