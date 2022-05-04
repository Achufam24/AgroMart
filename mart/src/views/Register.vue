<template>
     <div class="row" >
         <div class="column" id="column1">
             <transition name="fade" appear>
               <h1>Join AgroMart Today</h1>
             </transition>
             <transition name="des" appear>
               <p>And trade your Products with millions!</p>
             </transition>
             <router-link to="/about">Read about AgroMart</router-link>
         </div>
         <div class="column" id="column2">
           <form class="form1" @submit.prevent="RegisterForm">
                <img src="@/assets/sign.svg" alt="" style="width:200px; height:100px;">
                <h1 style="color:green;">Register Here!</h1>
               <input type="text" v-model="name" placeholder="name">
                <input type="email" v-model="email" placeholder="mail"><br>
                <input type="password" v-model="password" placeholder="password"><br>
                <button type="submit" >Register</button>
                <div v-if="error">{{error}}</div>
                <div id="redirect-link">
                    <p>Have an account already? <router-link to="/Login">Login &#8594;</router-link></p>
                    </div>
                    <router-link to="/"> Homepage</router-link> 
                <div>
                </div>
            </form>
         </div>
        </div>
</template>

<script>
import { ref } from'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
   name:'Register',
    setup() {
        const email = ref('')
        const password = ref('')
        const name = ref('')
        const error = ref(null)

        const store = useStore()
        const router = useRouter()

        const RegisterForm = async () => {
        try{
           await store.dispatch('signup', {
               email:email.value, 
               password:password.value,
               name: name.value
               })
               router.push('/')
        }catch(err){
            error.value = err.message
        }
        }
        return {RegisterForm,email,password,name,error}
    }
}
</script>

<style >
.row {
  display: flex;
  margin: 0;
  padding: 0;
}

.column {
  width: 50%;
  height: 100vh;
}
#column1{
    background: green;
     height: 100vh; 
    color: aliceblue;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#column1 a{
    text-decoration: none;
    background: #fff;
    color: green;
    padding: 5px;
    border-radius: 8px;
}
form a{
   text-decoration: none;
   color: green;
}
 @media only screen and (max-width: 600px) {
            #column1{
                display: none !important;
            }
			#column2{
			width: 100% !important;
		}
        }
</style>