<template>
  <div class="cookie-banner">
    <h2 class="cookie-banner__title">
      WE USE COOKIES TO IMPROVE YOUR EXPERIENCE
    </h2>
    <div class="cookie-banner__text">
      <p>
        We use cookies to personalize content, analyze site traffic, and deliver targeted advertisements.
        You can manage your preferences or accept all cookies.
      </p>
      <p>
        Learn more in our
        <a href="/privacy" class="cookie-banner__link">Privacy Policy</a> and
        <a href="/cookies" class="cookie-banner__link">Cookie Policy</a>.
      </p>
    </div>

    <div class="cookie-banner__actions">
      <button @click="$emit('customize')" class="cookie-banner__button cookie-banner__button--outline">Customize Settings</button>
      <button @click="$emit('rejectAll')" class="cookie-banner__button cookie-banner__button--outline">Reject All</button>
      <button @click="$emit('acceptAll')" class="cookie-banner__button cookie-banner__button--primary"><span>Accept All <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="13" width="2" height="14" rx="1" transform="rotate(-90 5 13)" fill="#26355E"/>
        <path d="M11.2929 17.2929C10.9024 17.6834 10.9024 18.3166 11.2929 18.7071C11.6834 19.0976 12.3166 19.0976 12.7071 18.7071L18.7071 12.7071C19.0857 12.3285 19.0989 11.7189 18.7372 11.3243L13.2372 5.32428C12.864 4.91716 12.2314 4.88965 11.8243 5.26285C11.4172 5.63604 11.3897 6.26861 11.7628 6.67572L16.6159 11.9699L11.2929 17.2929Z" fill="#26355E"/>
      </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>

</script>

<style >
.cookie-banner {
  padding: 26px;
  border-radius: 24px;
  background: #0D0F15;

  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 9999;
  max-width: 656px;
}

.cookie-banner__title {
  color: var(--blue, #34B4F4);

  /* H4 */
  font-family: Roboto Flex, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 1000;
  line-height: 130%; /* 31.2px */
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.cookie-banner__text {
  color: var(--white, #FFF);

  /* body text small */
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.2px;

  margin-bottom: 24px;
}

.cookie-banner__text a:hover {
  text-decoration: underline;
}

.cookie-banner__text p:not(:last-child) {
  margin-bottom: 16px;
}

.cookie-banner__actions {
  display: flex;
  gap: 12px;
}
.cookie-banner__button span{
  position: relative;
}
.cookie-banner__button span{
  position: relative;
}
.cookie-banner__button {
  display: flex;
  padding: 16px 30px;
  justify-content: center;
  align-items: center;
  background: transparent;

  /* Heading/7 */
  font-family: "Roboto Flex", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 1000;
  line-height: 120%; /* 14.4px */
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;

  gap: 8px;

  color: #26355E;

  transition: all 0.3s ease-in-out;

  max-height: 52px;
}

.cookie-banner__button:hover {
  background: #95d8f9;
  border-color: #95d8f9;
}

.cookie-banner__button svg {
  transition: all .3s;
}

.cookie-banner__button--outline {
  border-radius: 40px;
  border: 1px solid var(--blue, #34B4F4);
  color: var(--blue, #34B4F4);
}

.cookie-banner__button--outline:hover {
  background: var(--blue, #34B4F4);
  color: #26355E;
  background: #95d8f9;
}

.cookie-banner__button--primary {
  border-radius: 40px;
  background: var(--blue, #34B4F4);
  border: 1px solid var(--blue, #34B4F4);
}

.cookie-banner__button--primary:hover svg{
  //background: transparent;
  //border-color: #34B4F4;
  //color: #34B4F4;
  margin-left: 6px;
}

.cookie-banner__button span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

@media (max-width: 991px) {
  .cookie-banner {
    bottom: 20px;
    right: 20px;
    //width: calc(100% - 40px);
    max-width: none;
    left: 20px;
  }

  .cookie-banner__actions {
    flex-direction: column;
    gap: 8px;
  }

}
</style>