<template>
    <section id="mainContent">

        <div id="content">
        <div class="information">
            <p>Personal Information</p>
        </div>
        <section>
        <div class="heading">Name*</div>
        <p class="Pheading">Name</p>
        </section>
        
        <section>
        <div class="heading">Last Name*</div>
        <p class="Pheading">Surname</p>
        </section>
      
        <section>
        <div class="heading">Date of Birth*</div>
        <p class="Pheading">01.01.1990</p>
        </section>
        
        <section>
        <div class="heading">Country*</div>
        <p class="Pheading">Georgia</p>
        </section>
        
        <section>
        <div class="heading">Postal Address*</div>
        <p class="Pheading">000089</p>
        </section>

        <div id="note">
            <p>* Can be changed only through communication with the Administration.</p>
            <p> Contact <a href="" id="support">support@avank.ge</a></p>
        </div>
        
        <div class="change">
            <div>
                <a href="" class="Pchange">Change Password</a>
            </div>
            <div>
                <a href="" class="Pchange">Change Phone</a>
            </div>
            <div>
                <a href="" class="Pchange">Change Email</a>
            </div>
        </div>
    </div>
        

    <!-- limits structure start from here -->
        <div class="limits">
            <div>
                <div id="name">Limits</div>
            </div>
            <div class="form">
                <div>Daily Limit </div>
                <div>15,000.00/15,000.00</div>
                <!-- leaved here -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:`Content`
}
</script>

<style scoped>

#mainContent{
    border: 2px solid;
    width: 1249px;
    margin-left: 142px;
}

#content{
    width: 340px;
    /* black/transparent/25 */
 padding: 40px;

background: rgba(54, 65, 64, 0.04);
border-radius: 24px;
}

.information{

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;

/* black/solid/500 */

color: #364140;
}


#note{

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

/* black/transparent/300 */

color: rgba(54, 65, 64, 0.64);
}

#support{
    color:  rgba(54, 65, 64, 0.64);
    font-weight: 600;
}

.heading{

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* black/transparent/300 */

color: rgba(54, 65, 64, 0.64);
}


.Pheading{
width: 50px;
height: 20px;
left: 222px;
top: 466px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
/* identical to box height */


/* black/solid/500 */

color: #364140;
}


.Pchange{

font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-decoration-line: underline;

/* brand/solid/500 */

color: #00AC99;
}
</style>