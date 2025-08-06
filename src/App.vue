<template>
  <div id="app">
    <HeroSection />
    <WhatIsHocattSection />
    <BenefitsSection />
    <IsHocattRightSection />
    <PackagesSection />
    <ReadyToSweatSection />

    <CookieConsest />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import WhatIsHocattSection from './components/WhatIsHocattSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import IsHocattRightSection from './components/HocattSection.vue'
import PackagesSection from './components/PackagesSection.vue'
import ReadyToSweatSection from './components/ReadyToSweatSection.vue'

import CookieConsest from "./components/CookieConsest/CookieConsest.vue";

export default {
  name: 'App',
  components: {
    HeroSection,
    WhatIsHocattSection,
    BenefitsSection,
    IsHocattRightSection,
    PackagesSection,
    ReadyToSweatSection,
    CookieConsest
  }
}
</script>