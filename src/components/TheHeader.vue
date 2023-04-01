<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
 <div class="leading_box"></div>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="/images/logo.png" alt="" width="63" height="63" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/events-and-news">Events & News</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/resources">Resources</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<style scoped>

</style>
