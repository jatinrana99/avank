<template>
    <div class="mainNav">
        <section>
            <div  id="status">
            <div id="Astatus">Account Status: </div>
            <div id="NActive">Not Activated</div>
            </div>
           

            <div id="content">To get the full functionality of the service please pass verification</div>
        </section>
        <button>VERIFY</button>
    </div>
</template>

<script>
export default {
    name:`NavInfo`
    
}
</script>

<style scoped>
.mainNav {
width: 1247px;
height: 96px;
background: rgba(214, 43, 43, 0.04);
border-radius: 16px;
display: flex;
justify-content: space-around;
gap: 249px;
margin: 24px 144px;
}

#status{
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: rgba(54, 65, 64, 0.8);
display: flex;
margin-top: 26px;
/* padding-left: 40px; */
}

#NActive{
    color:#D62B2B;
    font-weight: 600;
    margin-left: 5px;
}

#content{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 8px;
    /* padding-left: 40px; */
/* identical to box height */


/* black/transparent/300 */

color: rgba(54, 65, 64, 0.64);


}

button{
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

</style>