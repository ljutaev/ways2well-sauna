<template>
  <section class="ready-to-sweat">
    <div class="container">
      <div class="ready-to-sweat__inner">
        <h2 class="ready-to-sweat__title">READY TO SWEAT SMARTER?</h2>
        <button class="ready-to-sweat__btn">Book Your HOCATT™ Session<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.85986" y="13" width="2" height="14" rx="1" transform="rotate(-90 5.85986 13)" fill="#26355E"/>
          <path d="M12.1528 17.2929C11.7622 17.6834 11.7622 18.3166 12.1528 18.7071C12.5433 19.0976 13.1764 19.0976 13.567 18.7071L19.567 12.7071C19.9455 12.3285 19.9588 11.7189 19.597 11.3243L14.097 5.32428C13.7238 4.91716 13.0913 4.88965 12.6841 5.26285C12.277 5.63604 12.2495 6.26861 12.6227 6.67572L17.4757 11.9699L12.1528 17.2929Z" fill="#26355E"/>
        </svg>
        </button>

        <div class="ready-to-sweat__bg">
          <img src="../../assets/images/cta-bg.jpg" alt="Person in HOCATT Ozone Sauna" class="hero__img">
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ReadyToSweatSection'
}
</script>

<style scoped>
.ready-to-sweat {
  margin-bottom: 120px;
  position: relative;
}

.ready-to-sweat__bg{
  position: absolute;
  left: -2px;
  right: 0;
  bottom: 0;
  top: 0;
  //z-index: -1;
  pointer-events: none;
}

.ready-to-sweat__bg img{
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.ready-to-sweat__inner {
  padding: 124px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.54) 73.76%);
  position: relative;
  overflow: hidden;
}

.ready-to-sweat__title {
  font-family: Roboto Flex, sans-serif;
  font-style: normal;
  margin: 0;
  font-weight: 1000;
  text-transform: uppercase;
  line-height: 140%;
  letter-spacing: 1px;
  font-size: 36px;
  color: #34B4F4;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1420px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.ready-to-sweat__btn {
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

  position: relative;
  z-index: 1;
}

.ready-to-sweat__btn:hover {
  cursor: pointer;
  padding-left: 24px;
  padding-right: 16px;
}

@media (max-width: 991px) {
  .ready-to-sweat__inner {
    padding: 60px 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  .ready-to-sweat__title {
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
}

</style>