<template>
  <div class="center-popup">
        <template v-if="isPopupOpen">
            <div
                id="layer"
                :class="['alert', { '-active': isPopupOpen }]"
                @click.self="closePopup('alert')"
            >
                <div class="container">
                    <div class="header">
                        <div class="inner">
                            <h1 class="title">{{ popupTitle }}</h1>
                        </div>
                    </div>

                    <div class="contents">
                        <div class="content">
                            <p class="p" v-html="popupMessageHtml"></p>
                            <p v-if="popupMessageHtml2" class="p" v-html="popupMessageHtml2"></p>
                        </div>

                        <ProductActionButtons
                            class="action-buttons"
                            :join-label="confirmLabel"
                            :join-button-class="joinButtonClass"
                            :show-consult="false"
                            @join="onConfirm"
                        />
                    </div>
                </div>
            </div>
            <div
                class="dim -active"
                @click="closePopup('alert')"
            ></div>
        </template>
  </div>
</template>

<script>
import ProductActionButtons from './ProductActionButtons.vue';  

export default {
    name: 'CenterPopup',
    components: {
        ProductActionButtons
    },
    props: {
        isPopupOpen: {
            type: Boolean,
            default: false,
        },
        activeLayer: {
            type: String,
            default: null,
        },
        popupType: {
            type: String,
            default: 'default',
        },
        popupTitle: {
            type: String,
            default: '',
        },
        popupMessageHtml: {
            type: String,
            default: '',
        },
        popupMessageHtml2: {
            type: String,
            default: '',
        },
        cancelLabel: {
            type: String,
            default: '',
        },
        confirmLabel: {
            type: String,
            default: '',
        },
        joinButtonClass: {
            type: String,
            default: '-primary'
        }
    },
    emits: ['close', 'cancel', 'confirm'],
    methods: {
            closePopup(layerId) {
                this.$emit('close', layerId)
                console.log(`센터 팝업이 닫혔습니다. layerId: ${layerId}`)
            },
            onCancel() {
                this.$emit('cancel')
                this.closePopup('alert')
                console.log(`센터 팝업이 취소되었습니다. layerId: alert`)
            },
            onConfirm() {
                this.$emit('confirm')
                this.closePopup('alert')
                console.log(`센터 팝업이 확인되었습니다. layerId: alert`)
            }
    }
}
</script>

<style scoped> 
</style>


