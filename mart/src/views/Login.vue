<template>
     <div class="row" style="padding-bottom:0;" >
        <div class="column" id="column1">
             <transition name="fade" appear>
                <h1>Please Login to Trade Today</h1>
            </transition>
               <transition name="des" appear>
                 <div>
                   <p>Sell or Buy with AgroMart!</p>
                   <router-link to="/Register">Regsiter</router-link>
                 </div>
               </transition>
                </div>
                  <div class="column" id="column2">
                    <form class="form1" @submit.prevent="LoginForm">
                        <img src="@/assets/sign.svg" alt="" style="width:200px; height:100px;">
                        <h1>Login Here!</h1>
                        <input type="email" v-model="email" placeholder="mail"><br>
                        <input type="password" v-model="password" placeholder="password"><br>
                        <button type="submit" >Login</button>
                        <div v-if="error">{{ error }}</div>
                        <div id="redirect-link">
                          <div>
                            <p> Don't have an account? <router-link to="/Register"> Register</router-link></p> 
                          </div>
                         <router-link to="/">Homepage</router-link>
                </div>
            </form>
         </div>
        </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const error = ref(null)
    const store = useStore()
    const router = useRouter()

    const LoginForm = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { LoginForm, email, password, error }
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
  .des-enter-from{
					opacity: 0;
					transform: translateY(-200px)
			}
			.des-enter-to{
					opacity: 1;
					transform: translateY(0px)
			}
			.des-enter-active{
			transition: all 4s ease;
			}
			.des-leave-from{
			opacity: 1;
			transform: translateY(0)
			}
			.des-leave-to{
			opacity: 0;
			transform: translateY(50px)
			}
			.des-leave-active{
			transition: all 6s ease;
			}
			.fade-enter-from{
			opacity: 0;
			transform: translateY(-200px)
			}
			.fade-enter-to{
			opacity: 1;
			transform: translateY(-0px)
			}
			.fade-enter-active{
			transition: all 9s ease;
			}
		@keyframes wobble {
		0% {transform: translateY(-100px); opacity: 0}
		50% {transform: translateY(0px); opacity: 1;}
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
