<template>
    <div>
        
    <div>
         <video width="500" height="280" controls autoplay :src="video"></video>
  <div>
    <button @click="changeVideo">Watch Part II</button>
  </div>
    </div>
    </div>
</template>

<script>

export default {
  data() {
      return {
          video: "https://www.w3schools.com/tags/movie.mp4"
      }
  },
  methods:{
    changeVideo(){
      this.video = "http://techslides.com/demos/sample-videos/small.mp4"
    }
  }
}
</script>

<style>

</style>