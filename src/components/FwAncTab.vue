<template>
  <div class="submain-anc-tab">
    <div class="subs -anchor">
      <div class="inner-wrap">
        <div class="inner">
          <div role="tablist" class="list">
            <div
              v-for="(tab, idx) in tabs"
              :key="tab.id"
              :class="['item', { '-active': activeIndex === idx }]"
            >
              <button
                type="button"
                role="tab"
                :aria-selected="activeIndex === idx ? 'true' : 'false'"
                :aria-controls="`subs-panel${idx + 1}`"
                :id="tab.id"
                @click="selectTab(idx)"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="subs-panels">
      <div
        v-for="(panel, idx) in panels"
        :key="`panel${idx}`"
        role="tabpanel"
        :aria-labelledby="tabs[idx].id"
        :id="`subs-panel${idx + 1}`"
        class="subs-panel"
        :class="{ '-active': activeIndex === idx }"
        tabindex="0"
        v-show="activeIndex === idx"
      >
        <slot :name="`panel${idx + 1}`"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FwAncTab',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    panels: {
      type: Array,
      required: true,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeIndex: this.defaultIndex,
    };
  },
  methods: {
    selectTab(idx) {
      this.activeIndex = idx;
    },
  },
};
</script>

<style scoped>
/* 필요시 스타일 추가 */
.item.-active > button { font-weight: bold; }
.subs-panel { display: none; }
.subs-panel.-active { display: block; }
</style>
