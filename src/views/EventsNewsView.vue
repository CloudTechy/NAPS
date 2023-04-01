<script setup>
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
</script>

<template>
  <TheHeader></TheHeader>
  <div class="frame-banner mb-5" :style="'background: url(\' /src/assets/images/frame3.png\')'">
    <p class="p-5 mb-5 mt-5 m-auto font-20 text-light">Events & News</p>
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

    
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark ">
        <div>
          <img style = "width:100%" src="/src/assets/images/Mask group (5).png" />
          <div class="p-2">
            <span>Association of Physiotherapy students University of Ibadan presents to you:</span>
        <p>World Autism Awareness Day</p></div>
          
          <div class="p-2">
            <a class="my-primary-active-link " href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark ">
        <div>
          <img style = "width:100%" src="/src/assets/images/Mask group (1).png" />
          <div class="p-2">
            <span>National Medical Webinar presents to you:</span>
        <p>Patient-Centered Care</p>
        The multi-disciplinary Approach of health care practitioners
    
    </div>
          
          <div class="p-2">
            <a class="my-primary-active-link " href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark ">
        <div>
          <img style = "width:100%" src="/src/assets/images/Mask group (4).png" />
          <div class="p-2">
            <span>World Physiotherapy Network presents to you:</span>
        <p>Osteoarthritis</p>Physiotherapy in Osteoarthritis</div>
          
          <div class="p-2">
            <a class="my-primary-active-link " href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>

        <div class="col-12 col-sm-3 p-0 m-5 border border-dark ">
        <div>
          <img style = "width:100%" src="/src/assets/images/Mask group (5).png" />
          <div class="p-2">
            <span>Association of Physiotherapy students University of Ibadan presents to you:</span>
        <p>World Autism Awareness Day</p></div>
          
          <div class="p-2">
            <a class="my-primary-active-link " href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark ">
        <div>
          <img style = "width:100%" src="/src/assets/images/Mask group (1).png" />
          <div class="p-2">
            <span>National Medical Webinar presents to you:</span>
        <p>Patient-Centered Care</p>
        The multi-disciplinary Approach of health care practitioners
    
    </div>
          
          <div class="p-2">
            <a class="my-primary-active-link " href="#"
              >Read More <font-awesome-icon icon="angles-right"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3 p-0 m-5 border border-dark ">
        <div>
          <img style = "width:100%" src="/src/assets/images/Mask group (4).png" />
          <div class="p-2">
            <span>World Physiotherapy Network presents to you:</span>
        <p>Osteoarthritis</p>Physiotherapy in Osteoarthritis</div>
          
          <div class="p-2">
            <a class="my-primary-active-link " href="#"
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
