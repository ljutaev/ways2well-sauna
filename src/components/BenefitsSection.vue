<template>
  <section class="benefits">
    <div class="container">
      <h2 class="benefits__title">BENEFITS</h2>

      <div class="benefits__list">
        <div class="benefits__item">
          <h3 class="benefits__item-title">DETOXIFICATION</h3>
          <p class="benefits__item-description">
            Ozone & carbonic therapy stimulates anti-oxidant
            toxins and heavy metals
          </p>
        </div>

        <div class="benefits__item">
          <h3 class="benefits__item-title">IMMUNE STRENGTH</h3>
          <p class="benefits__item-description">
            O-3200 B-Therapy activates and stimulates pain
            inflammation
          </p>
        </div>

        <div class="benefits__item">
          <h3 class="benefits__item-title">CIRCULATION & OXYGENATION</h3>
          <p class="benefits__item-description">
            Opens capillaries for improved O2 blood flow
          </p>
        </div>

        <div class="benefits__item">
          <h3 class="benefits__item-title">METABOLIC UPGRADE</h3>
          <p class="benefits__item-description">
            Ramps up ATP, collagen production, supports
            weight management
          </p>
        </div>

        <div class="benefits__item">
          <h3 class="benefits__item-title">ATHLETIC RECOVERY</h3>
          <p class="benefits__item-description">
            Speeds lactic acid clearance, reduces soreness,
            boosts endurance
          </p>
        </div>

        <div class="benefits__item">
          <h3 class="benefits__item-title">SKIN & ANTI-AGING</h3>
          <p class="benefits__item-description">
            Stimulates collagen, smooths skin, reduces
            wrinkles & fine lines
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitsSection'
}
</script>

<style scoped>

.benefits {
  margin-bottom: 200px;
}

.container {
  max-width: 1420px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: start;
}

.benefits__title {
  font-family: Roboto Flex, sans-serif;
  font-style: normal;
  font-weight: 1000;
  text-transform: uppercase;
  line-height: 140%;
  letter-spacing: 1px;
  font-size: 36px;
  color: #34B4F4;
  margin-bottom: 64px;

  grid-column: span 4;

  position: sticky;
  top: 40px;
}

.benefits__list {
  grid-column: span 8;
}

.benefits__item {
  background: #000;
  padding: 20px 64px;
  margin-bottom: 24px;
  border-radius: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.benefits__item:last-child {
  margin-bottom: 0;
}

.benefits__item-title {
  margin: 0;
  color: var(--white, #FFF);

  /* H3 */
  font-family: "Roboto Flex", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 1000;
  line-height: 130%; /* 36.4px */
  letter-spacing: 1px;
  text-transform: uppercase;
}

.benefits__item-description {
  color: var(--Primary-Beige, #F7F3EB);

  /* text 20 */
  font-family: "Roboto Flex", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}

.benefits__item-description {
  border-left: 1px solid #1A1D29;
  padding-left: 24px;
}

@media (max-width: 991px) {
  .benefits {
    margin-bottom: 100px;
  }
  .benefits__title {
    margin-bottom: 24px;
    font-size: 28px;
    text-align: left;
  }

  .container {
    display: block;
  }

  .benefits__item {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .benefits__item-title {
    font-size: 18px;

  }

  .benefits__item-description {
    font-size: 16px;
    padding-top: 13px;
    margin-top: 13px;
    border-top: 1px solid rgba(79, 80, 88, 0.5);
    padding-left: 0;
  }
}
</style>