<template>
    
    <section>
        <section class="forms">
            <form class="register" v-on:click.prevent="register">
                <h2>Register</h2>
                <div>
                    <label for="email">Email</label> <br><input type="email" id="email" v-model="register_form.email" class="char">
                    <br>
                    <label for="password">Password</label> <input type="password" id="password" v-model="register_form.password" class="char">
                    <input type="submit" value="Register" id="button"/>
                </div>
            </form>

            <form class="login" v-on:click.prevent="login">
                <h2>Login</h2>
                <div>
                    <label for="email">Email</label> <br><input type="email" id="email" v-model="login_form.email" class="char">
                    <br>
                    <label for="password">Password</label> <input type="password" id="password" v-model="login_form.password" class="char">
                    <input type="submit" value="Login" id="button" />
                </div>
            </form>

            
        </section>
    </section>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
    name:`Login`,
    setup(){
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

        const login = () =>{
            store.dispatch('login', login_form.value);
        }

        const register = () =>{
            let ans = store.dispatch('register', register_form.value);
            console.log(ans)
        }
    
    return{
        login_form,
        register_form,
        login,
        register
    }
 }
}
</script>

<style scoped>

h2{

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

/* black/solid/600 */

color: #232A29;

}

.forms {
width: 1396px;
height: 493px;
/* border: 2px solid ; */

/* white/solid/500 */

background-color: #FFFFFF;
border-radius: 24px;
display: flex;
}

.char{
width: 340px;
height: 64px;

/* black/transparent/25 */

background: rgba(54, 65, 64, 0.04);
/* /* black/transparent/100 */

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

.register{
    /* display: flex; */
text-align: center;
width: 396px;
height: 493px;
border: 2px solid ;
margin-left: 200px;
margin-right: 200px;
padding-top: 60px;
border-radius: 24px;
background-color: #FFFFFF;
}


.login{
text-align: center;
width: 396px;
height: 493px;
border: 2px solid ;
padding-top: 60px;
border-radius: 24px;
background-color: #FFFFFF;

}


label{


font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
/* identical to box height */


/* black/transparent/300 */

color: rgba(54, 65, 64, 0.64);
}



</style>