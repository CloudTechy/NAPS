<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <footer class="container footer">
    <ul>
      <li>
        <a class="navbar-brand" href="/">
          <img src="/images/logo.png" alt="" width="63" height="63" />
        </a>
      </li>
    </ul>
    <ul>
      <li class="font-20">Address</li>
      <li>Department of Physiotherapy</li>
      <li>Faculty of Clinical Sciences</li>
      <li>College of Medicine</li>
      <li>University of Ibadan.</li>
      <li>Tel: +2347033481030</li>
    </ul>
    <ul>
      <li class="font-20">Contact Us</li>
      <li><font-awesome-icon icon="phone"/> +2347033481030</li>
       <li><font-awesome-icon icon="envelope"/> naps@gmail.com</li>

    </ul>
    <ul >
      <li class="font-20">Follow us on</li>
      <ul class = "p-0" style="display: flex; flex-direction: row; list-style-type: none;">
        <li class = "p-2" style="display: flex; flex-grow: 1;"> <a class = "text-dark" href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /> </a> </li>
        <li class = "p-2" style="display: flex; flex-grow: 1;"> <a class = "text-dark" href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a> </li>
         <li class = "p-2" style="display: flex; flex-grow: 1;"> <a class = "text-dark" href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a> </li>
          <li class = "p-2" style="display: flex; flex-grow: 1;"> <a class = "text-dark" href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a> </li>
      </ul>
       
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 100px;
  margin-top: 120px;
  font-size: 18px
}
.footer > * {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  list-style-type: none;
  flex-direction: column;
  font-size: 18px
}
</style>
