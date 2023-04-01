<script setup>
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container">
    <span class="p-2 bg-primary text-light">About NAPS</span>
    <h3 class="mt-3">Good Health For All</h3>
    <p class="text-justify">
      NAPS was founded in 1981 as the student arm of Nigeria Society of Physiotherapy (NSP), duly
      incorporated with the Corporate Affairs Commission and serves as the voice of all
      Physiotherapy Students studying in Nigeria. It has a functional constitution which governs
      it's affairs and it is presided over by a President who is at the helm of an Executive
      Committee, whose members are democratically elected at the annual NAPS Convention. Presently,
      the NAPS has taken up the challenge of the growth ofthe level of awareness and visibility of
      the profession in Nigeria. We hereby invite you to be part of a very noble and worthy course.
    </p>
  </div>
  <div
    class="frame-banner mb-5"
    :style="'background: url(\' /src/assets/images/about banner.png\')'"
  >
    <p style="min-height: 250px" class="p-5 mb-5 mt-5 m-auto font-20 text-light"></p>
  </div>
  <main class="container content mt-4">
    <h4 class="font-20 mt-2">The Physiotherapy Profession</h4>
    <div class="row">
      <div class="col">
        <p class="text-justify mt-md-2 mt-sm-1">
          Physiotherapy is a health care profession, which involves patient evaluation through the
          administration of physical and/or extent of injury prior to the use of physical modalities
          for preventive and therapeutic purposes. Physiotherapists perform tests to assess
          patients; joint motion (goniometry), strength and endurance of muscles (dynamometry),
          joint stability (arthrokinematics), walking (gait) pattern, functional ability (physical
          work capacity); function of the heart and lungs (cardiorespiratory fitness), integrity of
          sensation and perception (sensorimotor status), need and use of braces (orthosis and
          prosthesis), and performance of activities required in daily living.
        </p>
      </div>
      <div class="col"><img height="352" src="/src/assets/images/robot.png" alt="robot" /></div>
    </div>
    <p class="mt-4 text-justify">
      The treatment commonly administered by Physiotherapists include the use of therapeutic
      exercise (to increase strength, endurance, co-ordination and range of joint motion), heat
      (infra-red radiation, short-wave and microwave diathermies), ultra-violet radiation, ice
      (cryotherapy), electricity (transcutaneous electrical stimulation), sound (ultrasound), water
      (hydrotherapy), direct current to introduce medicinal ions into the skin and mucous membranes
      (iontophoresis), manual therapy, electro-acupuncture and cold laser.
    </p>
    <p class="text-justify">
      Physiotherapists also provide educational services to prevent the incidence of physical
      disability and movement dysfunction. During treatment, the Physiotherapist monitors the
      patient’s performance and modifies the treatment plan in the light of patient’s responses and
      goals. Apart from these services, Physiotherapists engage in research to develop more
      effective treatment or methods of evaluation in order to improve patient care. Cognitive
      scientific knowledge is the flesh of physiotherapy; while psychomotor skills and affective
      traits constitutes the soul of our profession. Researchers from several parts of the world
      including Nigeria are contributing immensely to our body of knowledge. The major areas of
      focus in current physiotherapy Research studies include:-
    </p>
    <ul style="list-style-type: disc">
      <li>Neuromuscular re-education</li>
      <li>Cardiovascular and cardiorespiratory research</li>
      <li>Management of acute and chronic pains</li>
      <li>
        Kinesiological and Biomechanical studies of Human motion in normal and pathological
        conditions
      </li>
      <li>Energy costs in ambulation</li>
      <li>Wound healing, both in chronic and acute stages, and much more.</li>
    </ul>

    <div class = "row">
        <div class="col p-2"><img height = "352" src="/src/assets/images/robothand.png" alt="robot"></div>
  
      <div class="col p-3">
        <h3>Study Physiotherapy in Nigeria</h3>
        <p class="text-justify mt-md-2 mt-sm-1">
          Physiotherapy is a health care profession, which involves patient evaluation through the administration of physical and/or extent of injury prior to the use of physical modalities for preventive and therapeutic purposes. Physiotherapists perform tests to assess patients; joint motion (goniometry), strength and endurance of muscles (dynamometry), joint stability (arthrokinematics), walking (gait) pattern, functional ability (physical work capacity); function of the heart and lungs (cardiorespiratory fitness), integrity of sensation and perception (sensorimotor status), need and use of braces (orthosis and prosthesis), and performance of activities required in daily living.
        </p>
        <p class = "text-justify">
          More than ten Universities in Nigeria currently offer Physiotherapy as an undegraduate course in Nigeria. Physiotherapy study takes an avaerage duration of 5 years (ten semesters). A graduate of Physiotherapy is awarded a B.PT Degree (Bachelor of PHysiotherapy) and is expected under the laws of the Medical Rehabilitation Therapists (Registration) Board of NIgeria to undergo a 1-year intership program in any of the MRTB accredited Clinical institutions post induction/graduation.
Please check the Joint Admissions and Matriculation Board (JAMB) website on www.jamb.org.ng for entry-level requirement details.

        </p>
      </div>
      </div>

    <div class="row m-auto">
      <h3 class="font-20 mt-2">Meet our Past Presidents</h3>

      <div class="col p-2">
        <div>
          <img style="width: 100%" src="/src/assets/images/profile1.png" />
          <div class="p-2">
            <span>PT. Micheal Okunade</span>
            <p>University of Ibadan</p>
          </div>
        </div>
      </div>
      <div class="col p-2">
        <div>
          <img style="width: 100%" src="/src/assets/images/profile2.png" />
          <div class="p-2">
            <span>PT. Micheal Okunade</span>
            <p>University of Ibadan</p>
          </div>
        </div>
      </div>
      <div class="col p-2">
        <div>
          <img style="width: 100%" src="/src/assets/images/profile3.png" />
          <div class="p-2">
            <span>PT. Micheal Okunade</span>
            <p>University of Ibadan</p>
          </div>
        </div>
      </div>

  
    </div>

    <div class="row m-auto">
      <h3 class="font-20 mt-3">Our Sponsors</h3>

      <div class="col p-2">
        <div>
          <img style="width: 100%" src="/src/assets/images/mouka.png" />
         
        </div>
      </div>
       <div class="col p-2">
        <div>
          <img style="width: 100%" src="/src/assets/images/asuu.png" />
         
        </div>
        
      </div>
       <div class="col p-2">
        <div>
          <img style="width: 100%" src="/src/assets/images/mouka.png" />
         
        </div>
      </div>
       <div class="col p-2">
        <div>
          <img style="width: 100%" src="/src/assets/images/asuu.png" />
         
        </div>
        
      </div>
       <div class="col p-2">
        <div>
          <img style="width: 100%" src="/src/assets/images/mouka.png" />
         
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
