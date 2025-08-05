<template>
  <section class="packages">
    <div class="container">
      <h2 class="packages__title">PACKAGES & PRICING</h2>

      <div class="packages__table">
        <div class="packages__col">
          <div class="packages__col-title">Includes</div>
          <div class="packages__col-item">Single Session</div>
          <div class="packages__col-item">5‑Pack</div>
          <div class="packages__col-item">10‑Pack</div>
        </div>
        <div class="packages__col">
          <div class="packages__col-title">Package</div>
          <div class="packages__col-item">30‑minute treatment</div>
          <div class="packages__col-item">Save 10%</div>
          <div class="packages__col-item">Save 15%</div>
        </div>
        <div class="packages__col">
          <div class="packages__col-title">Pricing</div>
          <div class="packages__col-item">$75</div>
          <div class="packages__col-item">$335</div>
          <div class="packages__col-item">$630</div>
        </div>
      </div>

      <p class="packages__note">
        Add‑on: IV Therapy, Red Light, Hyperbaric Oxygen for deeper synergy.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PackagesPricingSection'
}
</script>

<style scoped>

.container {
  max-width: 1420px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.packages {
  margin-bottom: 200px;
}
.packages__title {
  font-family: Roboto Flex, sans-serif;
  font-style: normal;
  font-weight: 1000;
  text-transform: uppercase;
  line-height: 140%;
  letter-spacing: 1px;
  font-size: 36px;
  color: #34B4F4;
  text-align: center;
  margin-bottom: 64px;
}

.packages__table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 24px;
  background: #0D0F15;
  overflow: hidden;
}

.packages__col {
  position: relative;
}

.packages__col:first-child::before {
  content: "";
  position: absolute;
  bottom: 0;
  //height: 140px;
  top: 66px;
  left: 0;
  right: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(52, 180, 244, 0.20) 0%, #0D0F15 100%);
}

.packages__col:first-child .packages__col-item:not(:last-child) {
  //border-right: 1px solid #2B2D33;
  border-bottom: 1px solid rgba(79, 80, 88, 0.30);
  backdrop-filter: blur(18.72358512878418px)
}

.packages__col:first-child .packages__col-title {
  background: linear-gradient(0deg, rgba(52, 180, 244, 0.40) 0%, rgba(52, 180, 244, 0.40) 100%), #373741;
  backdrop-filter: blur(18.72358512878418px);
}

.packages__col-item {
  padding: 40px 20px;
  color: #FFF;
  font-family: "Roboto Flex", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 1000;
  line-height: 130%; /* 23.4px */
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
}
.packages__col-item:not(:last-child) {
  border-bottom: 1px solid rgba(79, 80, 88, 0.30);
  backdrop-filter: blur(18.72358512878418px)
}

.packages__col-title {
  color: #34B4F4;
  font-size: 20px;
  font-style: normal;
  font-weight: 1000;
  line-height: 130%; /* 26px */
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 20px;

  background: #373741;
  backdrop-filter: blur(18.72358512878418px);
}
.packages__note {
  text-align: center;
  color: #FFF;
  font-size: 20px;
  line-height: 150%; /* 30px */
  margin-top: 24px;
}

@media (max-width: 991px) {
  .packages {
    margin-bottom: 100px;
  }
  .packages__title {
    margin-bottom: 24px;
    font-size: 28px;
    text-align: left;
  }
  .packages__col-title {
    font-size: 16px;
    padding: 10px 5px;
  }
  .packages__col-item{
    font-size: 16px;
    padding: 10px 5px;
    min-height: 62px;
    display: flex;
    align-items: center;
  }
  .packages__note {
    display: none;
  }
}
</style>