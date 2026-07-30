<template>
    <div class="progress-top">
        <div class="progress">
            <div class="bar" :style="barStyle">
                <div class="gauge"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FwProgress',
    props: {
        current: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 1
        }
    },
    computed: {
        barStyle() {
            return {
                '--current': this.current,
                '--max': this.max
            }
        }
    }
}
</script>