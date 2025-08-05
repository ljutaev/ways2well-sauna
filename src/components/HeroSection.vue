<template>
  <section class="hero">
    <div class="hero__image">
      <img src="../../assets/images/hero-banner.jpg" alt="Person in HOCATT Ozone Sauna" class="hero__img">
    </div>
    <div class="container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__title">
            HOCATT™<br>
            OZONE SAUNA
          </h1>
          <p class="hero__subtitle">
            10 SYNERGISTIC THERAPIES<br>
            IN ONE 30-MINUTE SESSION
          </p>
          <p class="hero__description">
            Get a detoxifying full body steam detox that activates your body's<br>
            natural healing systems. Medicated/naturopathic ozone therapy.
          </p>
        </div>


        <button class="hero__btn"> Book Your Session<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.85986" y="13" width="2" height="14" rx="1" transform="rotate(-90 5.85986 13)" fill="#26355E"/>
          <path d="M12.1528 17.2929C11.7622 17.6834 11.7622 18.3166 12.1528 18.7071C12.5433 19.0976 13.1764 19.0976 13.567 18.7071L19.567 12.7071C19.9455 12.3285 19.9588 11.7189 19.597 11.3243L14.097 5.32428C13.7238 4.91716 13.0913 4.88965 12.6841 5.26285C12.277 5.63604 12.2495 6.26861 12.6227 6.67572L17.4757 11.9699L12.1528 17.2929Z" fill="#26355E"/>
        </svg></button>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>

.hero {
  margin-bottom: 200px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 597px;
  background: linear-gradient(0deg, #1A1D29 30.9%, rgba(26, 29, 41, 0) 75.28%);
  z-index: 5;
}

.container {
  max-width: 1420px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  position: relative;
  width: 100%;
}

.hero__content {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 32px;
}

.hero__image {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.hero__image img{
  width: 100vw;
  height: 100%;
  object-fit: cover;
}

.hero__title {
  color: var(--Brand-color, #34B4F4);
  leading-trim: both;
  text-edge: cap;
  font-family: "Roboto Flex", sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 1000;
  line-height: 130%; /* 93.6px */
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero__subtitle {
  color: var(--white, #FFF);

  /* H4 */
  font-family: "Roboto Flex", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 1000;
  line-height: 130%; /* 31.2px */
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.hero__description {
  color: var(--white, #FFF);

  /* body text big */
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}

.hero__btn {
  font-variation-settings: "wdth" 114,"XTRA" 600,"XOPQ" 96,"YOPQ" 79,"YTLC" 530,"YTUC" 690,"YTAS" 740,"YTDE" -180,"YTFI" 738;
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 48px;
  border-radius: 40px;
  border: none;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all .3s ease-in-out;
  background: #34b4f4;
  color: #26355e;
}

.hero__btn:hover {
  cursor: pointer;
  padding-left: 24px;
  padding-right: 16px;
}

@media (max-width: 991px) {
  .hero {
    margin-bottom: 100px;
    min-height: auto;
    margin-top: 133px;
  }

  .hero__title {
    font-size: 36px;
  }

  .hero__content {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .hero__text {
    margin-bottom: 32px;
  }

  .hero__btn {
    margin-left: auto;
    margin-right: auto;
  }
  .hero__image {
    position: relative;
    margin-bottom: -40px;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
  }

  .hero__image img{
    width: 100%;
  }

  .hero__subtitle {
    font-size: 18px;
  }

  .hero__image::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 89px;
    background: linear-gradient(0deg, #1A1D29 30.9%, rgba(26, 29, 41, 0.00) 75.28%);
    z-index: 5;
  }

  .container {
    width: auto;
  }
}

</style>