<template>
    <div class="footer-body">
        <div class="container-fluid">
        <div id="logo">
            <a class="navbar-brand" id="logo" href="#" style="font-size:50px; color:#fff;font-family: 'Rubik Bubbles', cursive;">AgroMart<span style="color:#FF9430; font-size:50px;">.</span></a>
            <div>
                <p style="color:#fff;">Buying,Selling Agro Products one day at a time!</p>
            </div>
            <transition name="fade" appear>
                  <div class="icons">
           <a href="https://www.facebook.com/achu.agbama.9/"><i class="bi bi-facebook"></i></a> 
           <a href="https://www.whatsapp.com/"><i class="bi bi-whatsapp"></i></a> 
           <a href="https://twitter.com/agbama_achu"><i class="bi bi-twitter"></i></a>   
           <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
            </div>
            </transition>
        </div>
    </div>
    <div class="container-fluid">
        <h3>Links</h3>
        <div class="links">
            <router-link to="/Marketplace">Marketplace</router-link>
            <router-link to="/About">About</router-link>
            <router-link to="/Dashboard">Dashboard</router-link>
            <router-link to="/Register">Register</router-link>
        </div>
    </div>
    <!--Legal column-->
    <div class="container-fluid" >
        <h3>Legal</h3>
        <div class="legal">
            <router-link to="/Terms">Terms and conditions</router-link>
            <router-link to="/Terms">Privacy Notice</router-link>
            <router-link to="/Terms">Corporate</router-link>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   .footer-body{
       background: green;
       width: 100%;
       height: 300px;
       display: flex;
       justify-content: space-evenly;
       color: #fff;
   }
   .container-fluid{
    padding-top: 3rem;
}
.icons a{
    width: 4rem;
}
i{
    color: #fff;
    font-size: 2rem;
    border: none;
    margin: 5px 8px 5px 0px;
    padding: 5px;
}
.links,.legal{
    display: flex;
    flex-direction: column;
}
.container-fluid a{
    text-decoration: none;
    color: #fff;
}
@media only screen and (max-width: 700px){
    .footer-body{
        flex-direction: column !important;
        height: auto;
        margin-top: 5rem !important;
    }
    #logo a{
        font-size: 2rem !important;
    }
}

</style>

