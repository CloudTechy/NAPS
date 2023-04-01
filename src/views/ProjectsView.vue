<script setup>
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
</script>

<template>
  <TheHeader></TheHeader>
  <div class="frame-banner mb-5" :style="'background: url(\' /src/assets/images/frame3.png\')'">
    <p class="p-5 mb-5 mt-5 m-auto font-20 text-light">Our Projects in Review</p>
  </div>
  <main class="container content p-4">

 
      <h3 class="font-20 mt-2">Coming up soon.</h3>

    
   
  </main>
  <TheFooter></TheFooter>
</template>

<style>
.content {
  margin-top: 103px;
  margin-bottom: 58px;
}
</style>
