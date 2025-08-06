<template>
  <div class="cookie-modal">
    <div class="cookie-modal__container">
      <div class="cookie-modal__header">
        <h2 class="cookie-modal__title">Manage Your Cookie Preferences</h2>
        <button @click="$emit('close')" class="cookie-modal__close"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.75 21.2179L21.2179 22.75L13 14.5321L4.78207 22.75L3.25 21.2179L11.4679 13L3.25 4.78207L4.78207 3.25L13 11.4679L21.2179 3.25L22.75 4.78207L14.5321 13L22.75 21.2179Z" fill="white"/>
        </svg>

        </button>
      </div>

      <div class="cookie-modal__content">
        <div class="cookie-modal__content-wrap">
        <div class="cookie-modal__content-scroll">
        <div class="cookie-modal__content-inner">
        <p class="cookie-modal__description">
          We use cookies to help you navigate efficiently and enable essential website features.
        </p>

        <div class="cookie-modal__note">
          <p><strong>Necessary cookies are always active</strong> — they’re required to make the website function properly.</p>
          <p>Other cookies — for analytics, marketing, and enhanced functionality — will only be used with your consent.</p>
        </div>

        <p class="cookie-modal__info">
          You can enable or disable individual categories below. Disabling some may affect your browsing experience.
        </p>

        <div class="cookie-modal__section-list">
          <div
              v-for="cookie in localSettings "
              :key="cookie.key"
              class="cookie-modal__section cookie-section"
              :class="`cookie-section--${cookie.key}`"
          >
            <div class="cookie-section__header">
              <span class="cookie-section__title">{{ cookie.title }}</span>

              <label
                  class="cookie-toggle"
              >
                <input
                    type="checkbox"
                    :name="cookie.key"
                    v-model="cookie.selected"
                    :checked="cookie.alwaysOn"
                    :disabled="cookie.alwaysOn"
                />
                <span class="cookie-toggle__slider"></span>
              </label>
            </div>
            <span
                v-if="cookie.alwaysOn"
                class="cookie-section__status"
            >
                Always Active
              </span>
            <p class="cookie-section__description">
              {{ cookie.description }}
            </p>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>

      <div class="cookie-modal__footer">
        <button @click="$emit('acceptAll')" class="cookie-banner__button cookie-banner__button--outline cookie-modal__btn--accept">Accept All</button>
        <button @click="$emit('rejectAll')" class="cookie-banner__button cookie-banner__button--outline cookie-modal__btn--reject">Reject All</button>
        <button @click="savePreferences" class="cookie-banner__button cookie-banner__button--primary cookie-modal__btn--customize"><span>Customize Settings<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="13" width="2" height="14" rx="1" transform="rotate(-90 5 13)" fill="#26355E"/>
          <path d="M11.2929 17.2929C10.9024 17.6834 10.9024 18.3166 11.2929 18.7071C11.6834 19.0976 12.3166 19.0976 12.7071 18.7071L18.7071 12.7071C19.0857 12.3285 19.0989 11.7189 18.7372 11.3243L13.2372 5.32428C12.864 4.91716 12.2314 4.88965 11.8243 5.26285C11.4172 5.63604 11.3897 6.26861 11.7628 6.67572L16.6159 11.9699L11.2929 17.2929Z" fill="#26355E"/>
        </svg></span></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, toRaw } from 'vue'
const props = defineProps({ settings: Array })
const emit = defineEmits(['close', 'save'])

const localSettings = ref([])

// Create a copy of the settings
watch(
    () => props.settings,
    (newVal) => {
      localSettings.value = newVal.map(s => ({ ...s }))
    },
    { immediate: true }
)

function savePreferences() {
  emit('save', toRaw(localSettings.value))
}
</script>

<style scoped>
.cookie-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.cookie-modal__container {
  max-width: 767px;
  border-radius: 24px;
  background: var(--background-color, #1A1D29);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.cookie-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0;
  position: relative;
}

.cookie-modal__title {
  color: var(--blue, #34B4F4);

  /* H4 */
  font-family: "Roboto Flex", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 1000;
  letter-spacing: 1px;
  text-transform: uppercase;
  //border-bottom: 2px solid var(--Grey, #0D0F15);
  line-height: 80px;
  width: 100%;
}

.cookie-modal__close {
  background: none;
  border: none;
  cursor: pointer;
  transition: all .3s;
}

.cookie-modal__close:hover {
  transform: scale(1.1);

}

.cookie-modal__footer {
  padding: 20px 40px;
  display: flex;
  justify-content: space-evenly;
}

.cookie-modal__content {
  padding: 0 20px;

}

.cookie-modal__content-scroll {
  max-height: 395px;
  padding-right: 1rem;
}
.cookie-modal__content-wrap {
  background: #0D0F15;
  border-radius: 12px;
  padding: 20px 5px 20px 20px;
}

.cookie-modal__content-inner {

}

.cookie-modal__description {
  color: var(--white, #FFF);

  /* body text small */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.2px;
  margin-bottom: 20px;
}

.cookie-modal__note {
  padding: 20px 42px;

  border-radius: 12px;
  border-left: 2px solid var(--blue, #34B4F4);
  background: var(--background-color, #1A1D29);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);

  margin-bottom: 20px;
}

.cookie-modal__note p:not(:last-child) {
  margin-bottom: 16px;
}

.cookie-modal__info {

}

.cookie-modal__section-list {
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #1A1D29;
}

.cookie-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.cookie-section__title {

  display: inline-block;

  color: var(--blue, #34B4F4);

  /* H5 */
  font-family: "Roboto Flex", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 1000;
  line-height: 130%; /* 26px */
  letter-spacing: 1px;
  text-transform: uppercase;
}

.cookie-section__status {

}

.cookie-section__description {
  color: var(--white, #FFF);

  /* body text small */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.2px;
}

.cookie-modal__section {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #1A1D29;
}

.cookie-modal__section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}

.cookie-toggle {
  display: flex;
  width: 60px;
  padding: 2px;
  align-items: center;
  gap: 10px;
  border-radius: 90px;
  background: var(--background-color, #1A1D29);
  height: 32px;
  cursor: pointer;
}

.cookie-section__status {
  color: var(--white, #FFF);

  /* Body text big bold */
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  margin-bottom: 10px;
  display: inline-block;
}
.cookie-toggle__slider {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-left: 4px;

  border-radius: 90px;
  background: var(--white, #FFF);
  transition: all .3s;
}

.cookie-toggle input {
  display: none;
}

.cookie-toggle input:checked + .cookie-toggle__slider {
  transform: translateX(26px);
}

.cookie-toggle:has(:checked) {
  background: var(--blue, #34B4F4);
}

.cookie-toggle:has(:disabled) {
  cursor: not-allowed;
}

.cookie-modal__content-scroll {
  overflow-y: auto;
  padding-right: 12px;
}

.cookie-modal__content-scroll::-webkit-scrollbar {
  width: 10px;
}

.cookie-modal__content-scroll::-webkit-scrollbar-track {
  background: #0D0F15;
  border-radius: 4px;
}

.cookie-modal__content-scroll::-webkit-scrollbar-thumb {
  background-color: #34B4F4; /* колір бігунка */
  border-radius: 4px;
  border: 2px solid #34B4F4; /* відступ навколо бігунка */
}

.cookie-modal__content-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #3DDCFF;
}

.cookie-modal__content-scroll {
  //scrollbar-width: thin; /* тонкий скрол */
  //scrollbar-color: #34B4F4 #1a1a1a; /* бігунок і фон треку */
}

@media (max-width: 991px) {
  .cookie-modal__footer {
    flex-direction: column;
    gap: 10px;
  }

  .cookie-modal__container {
    width: calc(100% - 40px);
    //margin: 0 20px;
    margin: 0 auto;
  }

  .cookie-modal__title {
    font-size: 20px;
    line-height: 1.5;
    padding-bottom: 20px;
  }

  .cookie-modal__header {
    padding-top: 20px;
    position: relative;
  }

  .cookie-modal__close {
    top: 20px;
    position: absolute;
    right: 20px;
  }

  .cookie-modal__footer {
    padding: 20px;
  }

  .cookie-modal__note {
    padding: 20px;
    border-left: 2px solid var(--blue, #34B4F4);
  }

  .cookie-section__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px
  }

  .cookie-section__title {
    font-size: 16px;
  }

  .cookie-modal {
    padding-top: 50px;
    padding-bottom: 50px;
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}

.cookie-modal-enter-active,
.cookie-modal-leave-active {
  transition: opacity 0.3s ease;
}

.cookie-modal-enter-from,
.cookie-modal-leave-to {
  opacity: 0;
}

/* Контейнер, який виїжджає зліва */
.cookie-modal__container {
  transition: transform 0.4s ease;
  //transform: translateX(-200%);
}

.cookie-modal-enter-active .cookie-modal__container {
  transform: translateX(-200%);
}

.cookie-modal-leave-active .cookie-modal__container {
  transform: translateX(0);
}

</style>