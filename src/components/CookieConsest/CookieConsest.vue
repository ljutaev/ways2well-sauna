<template>
  <CookieToggle @openPreferences="openPreferences = true" />
  <CookieBaner
      v-if="showBanner"
      @acceptAll="handleAcceptAll"
      @rejectAll="handleRejectAll"
      @customize="openPreferences = true"
  />
  <CookiePreferences
      v-if="openPreferences"
      :settings="cookieSettings"
      @close="openPreferences = false"
      @save="handleSavePreferences"
      @acceptAll="handleAcceptAll"
      @rejectAll="handleRejectAll"
  />
</template>

<script setup>
  import { ref, onMounted, watch} from 'vue'

  import CookieToggle from './CookieToggle.vue'
  import CookieBaner from './CookieBaner.vue'
  import CookiePreferences from './CookiePreferences.vue'

  const COOKIE_KEY = 'cookieConsent'
  const COOKIE_EXP_KEY = 'cookieConsentExpiry'
  const EXPIRY_DAYS = 180

  const defaultSettings = [
    {
      key: 'necessary',
      title: 'Strictly Necessary',
      description:
          'These cookies are essential for the site to function correctly — they allow secure login, load balancing, and saving your preferences. They do not store personal data.',
      alwaysOn: true,
      selected: true,
    },
    {
      key: 'functionality',
      title: 'Functionality',
      description:
          'Enable enhanced features like chat widgets, personalization, and social sharing tools. These help improve user interaction with the site.',
      alwaysOn: false,
      selected: false,
    },
    {
      key: 'performance',
      title: 'Performance & Analytics',
      description:
          'Help us understand how you use the site — e.g., which pages are visited most, bounce rate, and overall traffic. This data helps us improve your experience.',
      alwaysOn: false,
      selected: false,
    },
    {
      key: 'marketing',
      title: 'Marketing & Retargeting',
      description:
          'Used to deliver personalized ads and measure the effectiveness of marketing campaigns (e.g., Google Ads, Meta Pixel). Only activated with your permission.',
      alwaysOn: false,
      selected: false,
    },
    {
      key: 'uncategorized',
      title: 'Uncategorized',
      description:
          'Cookies that are still being evaluated and not yet assigned to a category. These are inactive by default until reviewed.',
      alwaysOn: false,
      selected: false,
    },
  ]

  const cookieSettings = ref([...defaultSettings])

  const showBanner = ref(false)
  const openPreferences = ref(false)

  watch(openPreferences, (isOpen) => {
    document.body.classList.toggle('no-scroll', isOpen)
  })

  onMounted(() => {
    const saved = localStorage.getItem(COOKIE_KEY)
    const expiry = localStorage.getItem(COOKIE_EXP_KEY)

    if (!saved || !expiry || new Date() > new Date(expiry)) {
      showBanner.value = true
      localStorage.removeItem(COOKIE_KEY)
      localStorage.removeItem(COOKIE_EXP_KEY)
      return
    }

    try {
      const parsed = JSON.parse(saved)
      cookieSettings.value = defaultSettings.map(setting => {
        const savedSetting = parsed.find(s => s.key === setting.key)
        return {
          ...setting,
          selected: setting.alwaysOn ? true : savedSetting?.selected ?? false
        }
      })
      loadTrackingScripts() // якщо згода ще дійсна — завантажити трекери
    } catch (e) {
      console.error('Invalid cookie data')
    }
  })

  function handleAcceptAll() {
    cookieSettings.value = cookieSettings.value.map(setting => ({
      ...setting,
      selected: true
    }))
    saveConsent()
  }

  function handleRejectAll() {
    cookieSettings.value = cookieSettings.value.map(setting => ({
      ...setting,
      selected: setting.alwaysOn ? true : false
    }))
    saveConsent()
  }

  function handleSavePreferences(settings) {
    cookieSettings.value = settings
    saveConsent()
  }

  function saveConsent() {
    const payload = cookieSettings.value.map(({ key, selected }) => ({ key, selected }))
    localStorage.setItem(COOKIE_KEY, JSON.stringify(payload))

    const expiry = new Date()
    expiry.setDate(expiry.getDate() + EXPIRY_DAYS)
    localStorage.setItem(COOKIE_EXP_KEY, expiry.toISOString())

    showBanner.value = false
    openPreferences.value = false

    loadTrackingScripts()
  }

  function loadTrackingScripts() {
    const perfConsent = cookieSettings.value.find(s => s.key === 'performance')?.selected
    const marketingConsent = cookieSettings.value.find(s => s.key === 'marketing')?.selected

    // Google Analytics
    if (perfConsent) {
      const gaScript = document.createElement('script')
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
      gaScript.async = true
      document.head.appendChild(gaScript)

      window.dataLayer = window.dataLayer || []
      function gtag(){ dataLayer.push(arguments) }
      gtag('js', new Date())
      gtag('config', 'GA_MEASUREMENT_ID')
    }

    // Facebook Pixel
    if (marketingConsent) {
      const fbScript = document.createElement('script')
      fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'FB_PIXEL_ID');
      fbq('track', 'PageView');
    `
      document.head.appendChild(fbScript)
    }
  }

</script>

<style scoped>

</style>
