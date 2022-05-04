<template>
<div>
<router-view/>
</div>
</template>

<script>


export default {
 
};
</script>


<style >
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1500px;
  max-height: 1700px;
} 

 nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  margin: 0;
  background: #ddd;
}
.form1{
    width: 100%;
    height: 100% ;
    background: #fff;
    border-radius: 8px;
    color: #010010;
}
.form1 img{
 width: 200px;
 height: 100px;
 margin-top: 2rem;
}
.form1 input{
    width: 80%;
    height: 40px;
    margin-top: 15px;
    border: 2px solid goldenrod;
    border-radius: 6px;
    padding-left: 10px;
}
.form1 button{
    margin-top: 18px;
    width: 80%;
    height: 40px;
    background: green;
    outline: none;
    border: none;
    border-radius: 6px;
    color: #fff;
}

</style>
