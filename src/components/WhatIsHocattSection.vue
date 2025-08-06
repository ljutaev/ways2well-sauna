<template>
  <section class="what-is-hocatt">
    <div class="container">
      <h2 class="what-is-hocatt__title">WHAT IS HOCATT™?</h2>
      <p class="what-is-hocatt__description">
        Hyperthermic Ozone & Carbonic Acid Transdermal Technology is a revolutionary
        wellness solution that combines multiple therapeutic modalities into one powerful
        30-minute session to optimize cellular health.
      </p>

      <div class="what-is-hocatt__modalities">
        <h3 class="what-is-hocatt__modalities-title">THE MODALITIES WE LAYER:</h3>

        <div class="what-is-hocatt__grid">
          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/1.webp" alt="Icon" class="icon">
            </div>
            <h4 class="what-is-hocatt__item-title">Ozone<br> Therapy</h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/2.webp" alt="Icon" class="icon">
            </div>
            <h4 class="what-is-hocatt__item-title">FAR-INFRARED HEAT</h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/3.webp" alt="Icon" class="icon">
            </div>
            <h4 class="what-is-hocatt__item-title">CARBONIC ACID STEAM</h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/4.webp" alt="Icon" class="icon">
            </div>
            <h4 class="what-is-hocatt__item-title">PULSED ELECTROMAGNETIC FIELD OZONE</h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/5.webp" alt="Icon" class="icon">

            </div>
            <h4 class="what-is-hocatt__item-title">PHOTON LIGHT THERAPY</h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/6.webp" alt="Icon" class="icon">

            </div>
            <h4 class="what-is-hocatt__item-title">Frequency‑
              Specific Microcurrents
            </h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/7.webp" alt="Icon" class="icon">
            </div>
            <h4 class="what-is-hocatt__item-title">Oxygen
              Infusion</h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/1.webp" alt="Icon" class="icon">

            </div>
            <h4 class="what-is-hocatt__item-title">Aromatherapy</h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/9.webp" alt="Icon" class="icon">

            </div>
            <h4 class="what-is-hocatt__item-title">Ultraviolet
              Light</h4>
          </div>

          <div class="what-is-hocatt__item">
            <div class="what-is-hocatt__icon">
              <img src="../../assets/images/icons/10.webp" alt="Icon" class="icon">

            </div>
            <h4 class="what-is-hocatt__item-title">High‑Intensity Transdermal Hyperthermia</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhatIsHocattSection',
}
</script>

<style scoped>
  .what-is-hocatt {
    margin-bottom: 200px;
  }
  .container {
    max-width: 1420px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }

  .what-is-hocatt__title {
    font-family: Roboto Flex, sans-serif;
    font-style: normal;
    font-weight: 1000;
    text-transform: uppercase;
    line-height: 110%;
    letter-spacing: 1px;
    font-size: 36px;
    color: #34B4F4;
    margin-bottom: 32px;
  }

  .what-is-hocatt__description {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 32px;
  }

  .what-is-hocatt__modalities {
    margin-bottom: 32px;
  }

  .what-is-hocatt__modalities-title {
    color: var(--white, #FFF);

    /* H4 */
    font-family: "Roboto Flex", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 1000;
    line-height: 130%; /* 31.2px */
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .what-is-hocatt__grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 20px;
  }

  .what-is-hocatt__item {
    border-radius: 16px;
    background: rgba(149, 216, 249, 0.25);
    padding: 8px;
    text-align: center;
    color: var(--white, #FFF);

    /* H6 */
    font-family: "Roboto Flex", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 1000;
    line-height: 130%; /* 23.4px */
    letter-spacing: 1px;
    text-transform: uppercase;

    min-height: 205px;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
  }

  .what-is-hocatt__item h4{
    margin: 0;
  }

  .what-is-hocatt__icon {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  .what-is-hocatt__icon img{
    max-width: 100%;
  }

  @media (max-width: 991px) {
    .what-is-hocatt {
      margin-bottom: 100px;
    }
    .what-is-hocatt__title {
      margin-bottom: 24px;
      font-size: 28px;
      text-align: left;
    }
    .what-is-hocatt__description {
      font-size: 16px;
      margin-bottom: 12px;
    }

    .what-is-hocatt__modalities-title {
      font-size: 18px;
      margin-bottom: 24px;
    }

    .what-is-hocatt__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .what-is-hocatt__item {
      padding: 5px;
      min-height: 162px;
    }

    .what-is-hocatt__item h4 {
      font-size: 12px;
      line-height: 1.2;
    }
  }
</style>