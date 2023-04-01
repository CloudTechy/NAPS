<script setup>
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
</script>

<template>
  <TheHeader></TheHeader>
  <div
    class="frame-banner mb-5"
    :style="'background: url(\' /src/assets/images/about banner.png\')'"
  >
    <div style="" class="m-auto mt-3 mb-3">
      <h1 class="text-center p-3 mt-5 m-2 m-auto text-light">
        Nigeria Association of Physiotherapy Student
      </h1>
      <p class="m-auto p-4 mb-5 text-center font-20 text-light">
        Welcome to the official website of the Nigerian Association of Physiotherapy students where
        you can get updates, <br />
        connect with physiotherapy students from other institutions and know more about
        physiotherapy/medical <br />
        rehabilitation study in Nigeria.
      </p>
    </div>
  </div>

  <div style="margin-top: -90px" class="row mb-5">
    <div class="col-sm-3  bg-light m-auto border border-dark" style = "width:130px">
      <p class="text-dark p-3 pt-4 pb-2">Who we are</p>
      <p class = "my-text-primary float-end"><a class = "my-text-primary" href = "#"><font-awesome-icon icon="angles-right" /></a></p>
    </div>
    <div class="col-sm-3  bg-light m-auto border border-dark" style = "width:130px">
      <p class="text-dark p-3 pt-4 pb-2">Events 
&
News</p>
      <p class = "my-text-primary float-end"><a class = "my-text-primary" href = "#"><font-awesome-icon icon="angles-right" /></a></p>
    </div>
    <div class="col-sm-3  bg-light m-auto border border-dark" style = "width:130px">
      <p class="text-dark p-3 pt-4 pb-2">Library 
& 
Resources</p>
      <p class = "my-text-primary float-end"><a class = "my-text-primary" href = "#"><font-awesome-icon icon="angles-right" /></a></p>
    </div>
  </div>

<div class="container mt-3">
    <div class="row">
    <div class="col p-4" style=" background: url('/src/assets/images/presido.png'); background-size: contain;">

    </div>
    <div class="col p-4">
      <p class="p-2">Learn about us</p>
      <p class="font-20 mt-2">Who we are</p>
      <p class="mt-4 mb-4">
        NAPS was founded in 1981 as the student arm of Nigeria Society of Physiotherapy (NSP), duly
        incorporated with the Corporate Affairs Commission and serves as the voice of all
        Physiotherapy Students studying in Nigeria. It has a functional constitution which governs
        it's affairs and it is presided over by a President ...
      </p>
      <button class="btn btn-outline-dark">Learn More</button>
    </div>
  </div>
</div>
  <main class="container content p-4">
    <h5 class="font-20 mt-2">Upcoming Events</h5>

    <div class="row">
      <div class="col m-2">
        <div class="p-5 text-light" style="background: url('/src/assets/images/Mask group 0.png')">
          <div class="m-auto">
            <h2>NAPS Convention 2023</h2>
            <h2>41st Anniversary</h2>
          </div>
        </div>
        <div class="border border-primary text-primary p-2 mt-4 mb-4">
          <div class="float-end"><font-awesome-icon icon="angles-right" /></div>
          <div class="text-primary">Get your early tickets here</div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="col m-2">
        <div class="p-5 text-light" style="background: url('/src/assets/images/Mask group 1.png')">
          <div class="m-auto">
            <h2>NAPS Convention 2023</h2>
            <h2>41st Anniversary</h2>
          </div>
        </div>
        <div class="border border-danger text-danger p-2 mt-4 mb-4">
          <div class="float-end"><font-awesome-icon icon="angles-right" /></div>
          <div class="text-danger">Get your early tickets here</div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="row m-auto">
      <h5 class="font-20 mt-2">Upcoming Events</h5>

      <div class="col-12 col-sm-3 p-0 m-5 border border-dark">
        <div>
          <img style="width: 100%" src="/src/assets/images/Mask group (5).png" />
          <div class="p-2">
            <span>Association of Physiotherapy students University of Ibadan presents to you:</span>
            <p>World Autism Awareness Day</p>
          </div>

          <div class="p-2">
            <a class="my-primary-active-link" href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark">
        <div>
          <img style="width: 100%" src="/src/assets/images/Mask group (1).png" />
          <div class="p-2">
            <span>National Medical Webinar presents to you:</span>
            <p>Patient-Centered Care</p>
            The multi-disciplinary Approach of health care practitioners
          </div>

          <div class="p-2">
            <a class="my-primary-active-link" href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark">
        <div>
          <img style="width: 100%" src="/src/assets/images/Mask group (4).png" />
          <div class="p-2">
            <span>World Physiotherapy Network presents to you:</span>
            <p>Osteoarthritis</p>
            Physiotherapy in Osteoarthritis
          </div>

          <div class="p-2">
            <a class="my-primary-active-link" href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-3 p-0 m-5 border border-dark">
        <div>
          <img style="width: 100%" src="/src/assets/images/Mask group (5).png" />
          <div class="p-2">
            <span>Association of Physiotherapy students University of Ibadan presents to you:</span>
            <p>World Autism Awareness Day</p>
          </div>

          <div class="p-2">
            <a class="my-primary-active-link" href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark">
        <div>
          <img style="width: 100%" src="/src/assets/images/Mask group (1).png" />
          <div class="p-2">
            <span>National Medical Webinar presents to you:</span>
            <p>Patient-Centered Care</p>
            The multi-disciplinary Approach of health care practitioners
          </div>

          <div class="p-2">
            <a class="my-primary-active-link" href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark">
        <div>
          <img style="width: 100%" src="/src/assets/images/Mask group (4).png" />
          <div class="p-2">
            <span>World Physiotherapy Network presents to you:</span>
            <p>Osteoarthritis</p>
            Physiotherapy in Osteoarthritis
          </div>

          <div class="p-2">
            <a class="my-primary-active-link" href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <TheFooter></TheFooter>
</template>

<style>
.content {
  margin-top: 103px;
  margin-bottom: 58px;
}
</style>
