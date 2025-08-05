<template>
  <section class="hocatt-right">
    <div class="container">
      <div class="is-hocatt-left__content">
        <div class="is-hocatt-right__image">
          <img src="../../assets/images/HOCATT-Right-for.jpg" alt="HOCATT Sauna Chamber" class="is-hocatt-right__img">
        </div>
      </div>


      <div class="is-hocatt-right__text">
        <h2 class="is-hocatt-right__title">IS HOCATT™ RIGHT FOR YOU?</h2>

        <ul class="is-hocatt-right__list">
          <li class="is-hocatt-right__item">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7537 6.44352C23.2769 5.80597 24.2001 5.72844 24.8157 6.27036C25.4312 6.81228 25.5061 7.76844 24.9828 8.40599L12.5488 23.5567C12.0174 24.2043 11.0757 24.2725 10.4624 23.7079L3.87963 17.6476C3.2758 17.0917 3.22141 16.134 3.75815 15.5086C4.29489 14.8832 5.2195 14.8269 5.82333 15.3828L11.2882 20.414L22.7537 6.44352Z" fill="#34B4F4"/>
            </svg>

            ATHLETES LOOKING FOR RAPID RECOVERY & PERFORMANCE ENHANCEMENT
          </li>
          <li class="is-hocatt-right__item">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7537 6.44352C23.2769 5.80597 24.2001 5.72844 24.8157 6.27036C25.4312 6.81228 25.5061 7.76844 24.9828 8.40599L12.5488 23.5567C12.0174 24.2043 11.0757 24.2725 10.4624 23.7079L3.87963 17.6476C3.2758 17.0917 3.22141 16.134 3.75815 15.5086C4.29489 14.8832 5.2195 14.8269 5.82333 15.3828L11.2882 20.414L22.7537 6.44352Z" fill="#34B4F4"/>
            </svg>

            BUSY PROFESSIONALS NEEDING A COMPREHENSIVE DETOX IN MINIMAL TIME
          </li>
          <li class="is-hocatt-right__item">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7537 6.44352C23.2769 5.80597 24.2001 5.72844 24.8157 6.27036C25.4312 6.81228 25.5061 7.76844 24.9828 8.40599L12.5488 23.5567C12.0174 24.2043 11.0757 24.2725 10.4624 23.7079L3.87963 17.6476C3.2758 17.0917 3.22141 16.134 3.75815 15.5086C4.29489 14.8832 5.2195 14.8269 5.82333 15.3828L11.2882 20.414L22.7537 6.44352Z" fill="#34B4F4"/>
            </svg>

            BIOHACKERS & LONGEVITY ENTHUSIASTS OPTIMISING CELLULAR HEALTH
          </li>
          <li class="is-hocatt-right__item">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7537 6.44352C23.2769 5.80597 24.2001 5.72844 24.8157 6.27036C25.4312 6.81228 25.5061 7.76844 24.9828 8.40599L12.5488 23.5567C12.0174 24.2043 11.0757 24.2725 10.4624 23.7079L3.87963 17.6476C3.2758 17.0917 3.22141 16.134 3.75815 15.5086C4.29489 14.8832 5.2195 14.8269 5.82333 15.3828L11.2882 20.414L22.7537 6.44352Z" fill="#34B4F4"/>
            </svg>

            INDIVIDUALS WITH CHRONIC HEALTH CHALLENGES SEEKING ALTERNATIVE OPTIONS
          </li>
          <li class="is-hocatt-right__item">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7537 6.44352C23.2769 5.80597 24.2001 5.72844 24.8157 6.27036C25.4312 6.81228 25.5061 7.76844 24.9828 8.40599L12.5488 23.5567C12.0174 24.2043 11.0757 24.2725 10.4624 23.7079L3.87963 17.6476C3.2758 17.0917 3.22141 16.134 3.75815 15.5086C4.29489 14.8832 5.2195 14.8269 5.82333 15.3828L11.2882 20.414L22.7537 6.44352Z" fill="#34B4F4"/>
            </svg>

            ANYONE READY TO ELEVATE OVERALL WELLNESS IN JUST 30 MINUTES
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IsHocattRightSection'
}
</script>

<style scoped>
.hocatt-right {
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

.is-hocatt-left__content {
  grid-column: span 5;
  display: flex;
  justify-content: center;
  padding-right: 16px;
}

.is-hocatt-right__image {
  border-radius: 24px;
  overflow: hidden;
  max-width: 421px;
}

.is-hocatt-right__image img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.is-hocatt-right__img {
  /* стилі для зображення */
}

.is-hocatt-right__text {
  grid-column: span 7;
}

.is-hocatt-right__title {
  margin-bottom: 64px;
  font-family: Roboto Flex, sans-serif;
  font-style: normal;
  font-weight: 1000;
  text-transform: uppercase;
  line-height: 140%;
  letter-spacing: 1px;
  font-size: 36px;
  color: #34B4F4;
  margin-bottom: 64px;
}

.is-hocatt-right__list {
  color: var(--white, #FFF);

  /* H5 */
  font-family: "Roboto Flex", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 1000;
  line-height: 130%; /* 26px */
  letter-spacing: 1px;
  text-transform: uppercase;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 680px;
}
.is-hocatt-right__item {
  position: relative;
  padding-left: 42px;
  margin-bottom: 42px;
}

.is-hocatt-right__item:last-child {
  margin-bottom: 0;
}

.is-hocatt-right__item svg{
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
}

@media (max-width: 991px) {
  .hocatt-right {
    margin-bottom: 100px;
  }

  .is-hocatt-right__title {
    margin-bottom: 24px;
    font-size: 28px;
    text-align: left;
  }

  .is-hocatt-right__list {
    font-size: 16px;
  }

  .is-hocatt-right__item {
    margin-bottom: 16px;
  }

  .container {
    display: block;
  }

  .is-hocatt-right__image {
    margin-bottom: 24px;
  }
}
</style>