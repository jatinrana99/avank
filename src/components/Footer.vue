<template>


<!-- Scroll Up  -->



<div id="scroll">
    <div id="line">
        <img src="../assets/Scroll.png" alt="">
    </div>

</div>


<!-- Code Of Footer -->
    <section id="Footer">

        <section id="innerSection">

            
            <section id="logo">
                <div id="company">
                    <img src="../assets/Logo.png" alt="">
                </div>

                <div id="social">
                    <div class="icon">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div class="icon">
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                    <div class="icon">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div class="icon">
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>

                <div>
                    <p id="copyRight">Copyright 2023 ® Avank. All Rights Reserved.</p>
                    <p id="LLC">Avank LLC is a registered money service business (Reg# 16013890)</p>
                </div>
            </section>

<!--------------------------------------------------------------------------- menu code --------------------------------------------------------------------------------->
            <section id="menu">

                <div id="one">
                    <p class="title">MENU</p>
                    <ol>
                        <li>Exchange</li>
                        <li>BNPL</li>
                        <li>Gift Cards</li>
                    </ol>
                </div>
                <div id="two">
                    <p class="title">COMPANY</p>
                    <ol>
                        <li>About Us</li>
                        <li>Contacts</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ol>
                </div>
                <div id="three">
                    <p class="title">LEGAL</p>
                    <ol>
                        <li>AML/KYC Policy</li>
                        <li>Cookie Policy</li>
                        <li>Security Policy</li>
                        <li>Refund Policy</li>
                    </ol>
                </div>
            </section>


            <!---------------------------- APPS------------------------------->
            <section id="App">
                <p>DOWNLOAD THE APP</p>
                <div id="apps">
                    <div><img src="../assets/iOS.png" alt=""></div>
                    <div><img src="../assets/Android.png" alt=""></div>
                </div>
            </section>


        </section>


    </section>
</template>

<script>
export default {
    name:`Footer`
}
</script>


<style scoped>

/* #scroll{
    position: absolute;
} */

#line{
    border-bottom: 1px solid rgba(54, 65, 64, 0.16);
    width: 1200px;
    margin-left: 146px;
    margin-bottom: 64px;
    text-align: center;
    
    /* black/transparent/100 */
    
}

#line img{

        position: relative;
top: 21px;
}

#Footer{
    background-image: url('../assets/hot\ cold\ 3\ 1.png');
    background-repeat: no-repeat;
    /* background-position: -100px -45px; */
    background-size: initial;
    /* margin-left:15px ; */
    /* border: 2px solid black; */

/* width: 1440px; */
height: 330px;
width: 1537px;


}

#LLC{

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;

/* black/transparent/300 */

color: rgba(54, 65, 64, 0.64);
}

#copyRight{

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
/* identical to box height */


/* black/solid/500 */

color: #364140;
}

.icon{
width: 32px;
height: 32px;
/* black/transparent/50 */

background: rgba(54, 65, 64, 0.08);
border-radius: 8px;
text-align: center;
margin-right: 8px;
}

#social{
    display: flex;
    margin-top: 52px;
    margin-bottom: 75px;
}

#innerSection{
    display: flex;
    padding-left: 160px;
    padding-top: 81px;
}

#menu{
display: flex;
/* width: 482px; */
/* height: 155px; */
}

#one{
    margin-right: 112px;

}

#two{
    margin-right: 65px;
}

#three{
    margin-right: 90px;
}

.title{
/* width: 39px; */
/* height: 15px; */

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
/* identical to box height */


/* black/solid/400 */

color: #5E6766;
}

li {
/* height: 17px; */

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* black/solid/500 */

color: #364140;
list-style-type: none;
margin-bottom: 16px;


}

ol{
    padding-left: 0px;
}


#App{
    margin-left: 90px;
}

#App p{
width: 135px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
/* identical to box height */

text-align: right;

/* black/solid/400 */

color: #5E6766;
margin-bottom: 24px;
}

#apps div{
    margin-bottom: 8px;
}

#logo{
    margin-right: 58px;
}

/* #Footer{
    margin-top: 96px;
} */
</style>