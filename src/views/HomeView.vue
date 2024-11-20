<script setup>
import { SERVICE_TEXT, JAPANESE_BRANDS, KOREAN_BRANDS } from '../constants'
import Brands from '../components/Brands.vue'
import FlipCard from '../components/FlipCard.vue'
import CarTop from '../components/icons/CarTop.vue'
import CarAll from '../components/icons/CarAll.vue'
import CarQuality from '../components/icons/CarQuality.vue'

const scrollToTarget = (item) => {
  const targetElement = document.getElementById(item);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div class="relative">
    <img src="/images/engine2.jpg" alt="Nacional Auto" class="absolute inset-0 w-full h-full object-cover z-0" />
    <div class="relative center justify-center xl:pb-16 xl:px-0 pb-6 px-4 z-10">
      <h1 class="h1-text md:w-2/3">
        AUTO CENTAR ZA JAPANSKA I KOREJSKA VOZILA test
      </h1>
      <h4 class="h4-hero-text md:w-2/3">
        Servis, veleprodaja i maloprodaja delova.
        Pouzdana usluga i originalni delovi po povoljnim cenama,sve na jednom mestu.
      </h4>
      <button @click="scrollToTarget('contact-us')" class="hero-btn">
        KONTAKTIRAJTE NAS
      </button>
    </div>
  </div>

  <div class="section">
    <div class="center">
      <h2 class="h2-text xl:mb-12 mb-4">
        Zašto odabrati Nacional Auto d.o.o.
      </h2>
      <div class="main-grid grid-cols-3 mb-4">
        <div class="center">
          <CarQuality class="w-1/3" />
          <h4 class="h4-text">
            Pouzdanost i kvalitet
          </h4>
        </div>
        <div class="center">
          <CarAll class="w-1/3" />
          <h4 class="h4-text">
            Sve na jednom mestu
          </h4>
        </div>
        <div class="center">
          <CarTop class="w-1/3" />
          <h4 class="h4-text">
            Povoljne cene
          </h4>
        </div>
      </div>
      <h6 class="h6-text mb-4 xl:mb-0">
        Nacional auto d.o.o. već više od 20 godina pruža vrhunsku uslugu u prodaji auto delova, kao i u
        servisiranju vozila <strong>
        <router-link :to="`/servis-japanskih-vozila`">japanske</router-link>
      </strong> i <strong>
        <router-link :to="`/servis-korejskih-vozila`">korejske</router-link>
      </strong> proizvodnje. Naša misija je da svakom klijentu pružimo <strong>preciznu</strong>,
        <strong>brzu</strong> i <strong>kvalitetnu</strong> uslugu, čineći održavanje automobila jednostavnim i
        bezbrižnim.
      </h6>
    </div>
  </div>

  <div class="section bg-slate-100">
    <div class="center">
      <h2 class="h2-text xl:mb-12 mb-4">
        Servisi za Vaše vozilo
      </h2>
      <h6 class="h6-text mb-4 xl:mb-0">
        Naš servis pruža visokokvalitetne usluge održavanja i popravke za najpoznatije <strong>
        <router-link :to="`/servis-japanskih-vozila`">japanske</router-link>
      </strong> i <strong>
        <router-link :to="`/servis-korejskih-vozila`">korejske</router-link>
      </strong> marke vozila.
        Koristimo originalne i zamenske delove kako bismo osigurali pouzdanost, sigurnost i dugotrajan rad vašeg vozila.
      </h6>
    </div>
    <div class="grid gird-cols-1 md:grid-cols-2">
      <div class="items-center flex flex-col mb-4 md:mb-0">
        <h4 class="h4-text mb-4">
          <router-view :to="`/servis-japanskih-vozila`">Servis za japanska vozila</router-view>
        </h4>
        <div class="second-grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          <router-link v-for="brand in JAPANESE_BRANDS" :to="`/servis-japanskih-vozila/${brand.altName}`"
                    class="shadow-lg font-medium bg-black text-white py-2 px-4 flex items-center justify-center w-full uppercase">
            <img :src="brand.imgSrc" :alt="brand.alt" class="invert sm:h-[20px] h-[15px] sm:mr-4 mr-1" />
            {{ brand.name }}
          </router-link>
        </div>
      </div>
      <div class="items-center flex flex-col mb-4">
        <h4 class="h4-text mb-4">
          <router-link :to="`/servis-korejskih-vozila`">Servis za korejska vozila</router-link>
        </h4>
        <div class="second-grid grid-cols-1">
          <router-link v-for="brand in KOREAN_BRANDS" :to="`/servis-korejskih-vozila/${brand.altName}`"
                    class="shadow-lg font-medium bg-black text-white py-2 px-4 flex items-center justify-center w-full uppercase">
            <img :src="brand.imgSrc" :alt="brand.alt" class="invert sm:h-[20px] h-[15px] sm:mr-4 mr-1" />
            {{ brand.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="center">
      <button @click="scrollToTarget('contact-us')" class="hero-btn">
        Zakažite termin
      </button>
    </div>
  </div>

  <div class="section">
    <h2 class="h2-text xl:mb-12 mb-4">
      Usluge koje pružamo
    </h2>
    <div class="second-grid xl:grid-cols-3 grid-cols-2">
      <FlipCard v-for="service in SERVICE_TEXT" :icon="service.icon" :title="service.title"
                :description="service.description" />
    </div>
  </div>

  <Brands />
</template>
