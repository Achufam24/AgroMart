<template>
  <div class="home" >
    <nav  id="navbar_top" class="navbar navbar-expand-lg navbar-dark">
 <div class="container">
 	 <a class="navbar-brand" href="#" style=" color:green; font-family: 'Rubik Bubbles', cursive;">AgroMart<span style="color: #FF9430; font-size:20px;">.</span></a>
  <button @click="toggleNav" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div v-show="showNav" class="collapse navbar-collapse" id="main_nav">
	<div class="navbar-nav ms-auto" style="margin-right:3rem;">
       <div class="Home-row" style="margin-left:4rem; margin-top:0.05rem; text-transform:uppercase;">
           <router-link to="/">Home</router-link>  |
        <router-link to="/about" style="margin-right:1rem;">About</router-link>  
       </div>
     <div v-if="user" class="User">
       <router-link to="/Dashboard">
         <span style="margin-left:1rem; text-transform:uppercase;">{{ user.email }}</span>
       </router-link>
       <button @click="LogOut" style="margin-left:1rem;">Logout</button>
     </div>
     <div v-if="!user" class="Auth" style="text-transform:uppercase;">
          <router-link to="/Register">Register</router-link> |
        <router-link to="/Login" style="margin-left:1rem;">Login</router-link> 
        </div>
       </div>
  </div> 
 </div>
</nav>
   <HelloWorld/>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      showNav: true,
    }
  },
  methods: {
    toggleNav(){
      this.showNav = !showNav
    }
  },
 
  setup() {
    const store = useStore()

    // console.log(store.state.user)
    // store.commit('setUser', 'yoshi')

    //logout 
    const LogOut = () => {
      store.dispatch('logout')
    }
    return { 
      LogOut,
      user:computed(() => store.state.user)
       }
  }
}
</script>

<style scoped>
*{
  max-width: 1500px;
  max-height: 1700px;
}
#navbar_top{
  background: #fff !important;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100% !important;
  color: #fff !important;
  position: fixed;
}
nav{
  display: flex;
  justify-content: space-between;
  width: 55%;
}
nav a{
  text-decoration: none;
  color: green;
}
.logo img{
  width: 60px;
  height: 30px;
}
nav button{
  border: none;
  outline: none;
  background: green;
  color: #fff;
  padding: 5px;
  border-radius: 8px;
}
@media only screen and (max-width: 700px){
    #profile{
        display: flex;
        flex-direction: column;
        height: auto;
        margin-left: 2rem;
        margin-right: 1.5rem;
    }
    #profile button{
        display: none;
    }
    #navbar_top{
      /* background: transparent !important; */
        height: auto;
        margin-bottom: 0;
}
.Home-row{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.user{
  display: flex;
  flex-direction: column;
  margin-left: 0;
  align-items: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
}
.Auth{
  display: flex;
  flex-direction: column;
  margin-left: 0;
  align-items: flex-start;
  justify-content: flex-start;
}
.user button{
  margin-left: 0 !important;
}
.navbar-brand{
  font-size: 0.6rem !important;
}
}
</style>

