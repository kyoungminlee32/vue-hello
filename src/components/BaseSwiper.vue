<template>
  <div :class="['submain-banner-wrap', wrapClass]" v-if="slides.length > 0">
    <Swiper
      v-if="!isDisabled"
      :modules="modules"
      :pagination="paginationOption"
      :navigation="navigation"
      :autoplay="autoplay"
      :loop="loop"
      :speed="speed"
      :spaceBetween="spaceBetween"
      :observer="observer"
      :observeParents="observeParents"
      @swiper="onSwiper"
      @init="onInit"
      @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
      @touchEnd="onTouchEnd"
      class="submain-banner-swiper"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.code">
        <a href="#" @click.prevent="onBannerClick(slide.code)">
          <div :class="['submain-banner', slide.type]">
            <div class="banner-txt-wrap">
              <div class="prd-title" v-html="slide.title"></div>
              <div class="prd-sub">{{ slide.sub }}</div>
            </div>
            <div v-if="slide.tags" class="hash-tag">
              <span v-for="tag in slide.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
    <div class="pagination-wrap" v-if="slides.length > 1" :aria-hidden="isDisabled">
      <div class="pagination-inner">
        <button type="button" class="slide_prev" tabindex="0" aria-label="Previous slide"><span class="hide">이전 슬라이드</span></button>
        <div :id="paginationIdAttr" class="swiper-pagination"></div>
        <button type="button" class="slide_next" tabindex="0" aria-label="Next slide"><span class="hide">다음 슬라이드</span></button>
      </div>
      <a href="#" class="button-stop" :class="{ '-active': isStopped }" role="button" @click.prevent="toggleAutoplay">
        <span class="hide">{{ isStopped ? '재생' : '정지' }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'BaseSwiper',
  components: { Swiper, SwiperSlide },
  props: {
    slides: { type: Array, required: true },
    wrapClass: { type: String, default: '' },
    onBannerClick: { type: Function, default: (code) => alert('배너 클릭: ' + code) },
    pagination: { type: Object, default: () => ({ clickable: true, type: 'fraction', el: '.swiper-pagination' }) },
    navigation: { type: Object, default: () => ({ nextEl: '.slide_next', prevEl: '.slide_prev' }) },
    autoplay: { type: Object, default: () => ({ delay: 4000, disableOnInteraction: false }) },
    loop: { type: Boolean, default: true },
    speed: { type: Number, default: 500 },
    spaceBetween: { type: Number, default: 24 },
    observer: { type: Boolean, default: true },
    observeParents: { type: Boolean, default: true },
    paginationId: { type: String, default: '' }
  },
  setup(props) {
    const isStopped = ref(false);
    const isDisabled = ref(props.slides.length <= 0);
    const swiperRef = ref(null);
    const modules = [Navigation, Pagination, Autoplay, A11y];

    watch(() => props.slides, (val) => {
      isDisabled.value = val.length <= 0;
    });

    const onSwiper = (swiper) => { swiperRef.value = swiper; };
    const setAriaHidden = () => {
      if (!swiperRef.value) return;
      const slidesEls = swiperRef.value.slides || [];
      slidesEls.forEach((el, idx) => {
        el.setAttribute('aria-hidden', swiperRef.value.realIndex === idx ? 'false' : 'true');
      });
    };
    const onInit = () => setAriaHidden();
    const onSlideChangeTransitionEnd = () => setAriaHidden();
    const onTouchEnd = () => {
      if (!swiperRef.value || !swiperRef.value.autoplay) return;
      if (!swiperRef.value.autoplay.running) isStopped.value = true;
    };
    const toggleAutoplay = () => {
      if (!swiperRef.value || !swiperRef.value.autoplay) return;
      isStopped.value = !isStopped.value;
      if (isStopped.value) swiperRef.value.autoplay.stop();
      else swiperRef.value.autoplay.start();
    };

    // Swiper 페이징 id 및 옵션
    const paginationIdAttr = computed(() => props.paginationId ? props.paginationId : '');
    const paginationOption = computed(() => ({
      clickable: true,
      type: 'fraction',
      el: props.paginationId ? `#${props.paginationId}` : '.swiper-pagination'
    }));

    return {
      isStopped, isDisabled, onSwiper, onInit, onSlideChangeTransitionEnd, onTouchEnd, toggleAutoplay, modules,
      paginationIdAttr,
      paginationOption
    };
  }
};
</script>

<style scoped>
/* 필요시 스타일 추가 */
</style>
