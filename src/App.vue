<template>
  <div id="app">
    
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import SkillsComp from './components/SkillsComp.vue'

export default {
  /* eslint-disable vue/no-unused-components */
  name: 'app',
  components: {    
    SkillsComp
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Monsterrat:400,700');
body{
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
 #app{
  width: 50%;
 }
 
body, html{
  margin: 0;
  height: 100%
}
nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color:rgb(0, 110, 255);
  font-weight: bold;
  margin-right:  15px;
}


</style>
