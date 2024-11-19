

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { JAPANESE_BRANDS, KOREAN_BRANDS} from '../constants'

const router = useRouter();
const isDrawerOpen = ref(false);
const showJapaneseDropdown = ref(false);
const showKoreanDropdown = ref(false);

const openDrawer = () => { isDrawerOpen.value = true; };
const closeDrawer = () => { isDrawerOpen.value = false; };

const navigateToService = (region) => {
  const paths = {
    japan: '/servis-japanskih-vozila',
    korea: '/servis-korejskih-vozila',
    'about-us': '/o-nama',
  };
  router.push(paths[region] || '/o-nama');
};

const navigateToBrandService = (link) => {
  router.push(link);
};

// Funkcija za dodavanje aktivne klase
const getButtonClass = (path) => {
  return router.currentRoute.value.path.startsWith(path)
    ? 'drop-shadow-lg bg-amber-400 text-black font-medium rounded-md px-4 py-2'
    : 'drop-shadow-lg hover:bg-amber-400 hover:text-black font-medium bg-black text-white rounded-md px-4 py-2';
};

const getButtonMobClass = (path) => {
  return router.currentRoute.value.path.startsWith(path)
    ? 'text-amber-400'
    : 'text-black hover:text-amber-400';
};
</script>
<template>
  <div class="section flex items-center justify-between z-20 relative">
    <router-link to="/"><img class="w-[180px] sm:w-60" src="/images/nacional-auto-logo.png"
                          alt="Nacional auto logo"></router-link>

    <button @click="openDrawer"
            class="block lg:hidden drop-shadow-lg hover:bg-amber-400 hover:text-black font-medium bg-black text-white rounded-md px-4 py-2">
      <span>&#9776;</span>
    </button>

    <!-- Desktop navigacija -->
    <div class="hidden lg:flex items-center justify-between space-x-4">
      <button :class="getButtonClass('/o-nama')" @click="navigateToService('about-us')">
        O nama
      </button>

      <div class="relative" @mouseover="showJapaneseDropdown = true" @mouseleave="showJapaneseDropdown = false">
        <button :class="getButtonClass('/servis-japanskih-vozila')" @click="navigateToService('japan')">
          Servis za japanska vozila
        </button>
        <div v-if="showJapaneseDropdown" class="absolute bg-white shadow-lg w-full z-30">
          <ul>
            <li v-for="brand in JAPANESE_BRANDS" :key="brand.id" class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="navigateToBrandService(brand.link)">
              {{ brand.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="relative" @mouseover="showKoreanDropdown = true" @mouseleave="showKoreanDropdown = false">
        <button :class="getButtonClass('/servis-korejskih-vozila')" @click="navigateToService('korea')">
          Servis za korejska vozila
        </button>
        <div v-if="showKoreanDropdown" class="absolute bg-white shadow-lg w-full z-30">
          <ul>
            <li v-for="brand in KOREAN_BRANDS" :key="brand.id" class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="navigateToBrandService(brand.link)">
              {{ brand.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Mobilna navigacija sa Drawer-om -->
    <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 flex" @click="closeDrawer">
      <div @click.stop class="w-2/3 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out"
           :class="{ 'translate-x-0': isDrawerOpen, 'translate-x-full': !isDrawerOpen }">
        <!-- Zatvori dugme -->
        <button @click="closeDrawer" class="absolute top-4 right-4 text-black">
          <span>&#10005;</span>
        </button>

        <div class="px-6 py-12 space-y-4">
          <button :class="getButtonMobClass('/o-nama')"  @click="navigateToService('aboutUs')" class="w-full flex justify-between items-cente">
            O nama
          </button>

          <div>
            <button @click="navigateToService('japan')" :class="getButtonMobClass('/servis-japanskih-vozila')" class="w-full flex justify-between items-cente">
              Servis za japanska vozila
            </button>
            <ul class="pl-4">
              <li v-for="brand in JAPANESE_BRANDS" :key="brand.id" class="py-2 hover:text-amber-400 cursor-pointer"
                  @click="navigateToBrandService(brand.link)">
                {{ brand.name }}
              </li>
            </ul>
          </div>

          <div>
            <button @click="navigateToService('korea')" :class="getButtonMobClass('/servis-korejskih-vozila')"
                    class="w-full flex justify-between items-cente">
              Servis za korejska vozila
            </button>
            <ul class="pl-4">
              <li v-for="brand in KOREAN_BRANDS" :key="brand.id" class="py-2 hover:text-amber-400 cursor-pointer"
                  @click="navigateToBrandService(brand.link)">
                {{ brand.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.translate-x-0 {
  transform: translateX(0);
}

.translate-x-full {
  transform: translateX(100%);
}
</style>
