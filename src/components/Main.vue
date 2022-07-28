<template>
    <div>
        <Statistics />
        <VueHooper />
        <Teachers />
        <AboutUs />
    </div>
</template>
<script>
import Statistics from '@/components/Statistics.vue'
import VueHooper from '@/components/Vue_hoopers.vue'
import Teachers from '@/components/Teachers.vue'
import AboutUs from '@/components/AboutUs.vue'
export default {
    components:{
        Statistics,
        VueHooper,
        Teachers,
        AboutUs
    }
}
</script>
<style scoped>

</style>