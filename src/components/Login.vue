<template>
    
    <section>
        <div class="container">
            <form action="">
                <div>
                    <label for="email">Email</label> <input type="email" id="email" v-model="email" class="char">
                    <label for="password">Password</label> <input type="password" id="password" v-model="password" class="char">
                    <button id="button" v-on:click.prevent="submit">Login</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name:`Form`
}
</script>

<style scoped>

.container {
width: 396px;
height: 493px;
border: 2px solid ;

/* white/solid/500 */

background: #FFFFFF;
border-radius: 24px;
display: flex;
}

.char{
width: 340px;
height: 64px;

/* black/transparent/25 */

background: rgba(54, 65, 64, 0.04);
/* black/transparent/100 */

border: 2px solid rgba(54, 65, 64, 0.16);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
border-radius: 12px;
margin-top: 6px;
margin-bottom: 8px;
}

#button{
width: 340px;
height: 64px;

background: linear-gradient(88.84deg, #00AC99 0%, #00E0B0 100%);
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
border-radius: 12px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 20px;
/* identical to box height */

text-align: center;

/* white/solid/500 */

color: #FFFFFF;

margin-top: 12px;

}

</style>