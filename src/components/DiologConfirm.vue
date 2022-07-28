<template>
    <div class="play_confirm">
        <LazyYoutube class="my_video" src="https://youtu.be/TcMBFSGVi1c" autoplay aspectRatio />
        <button @click="$emit('closeModal')" class="btn btn-danger">Close</button>
    </div>

</template>
<script>
import {LazyYoutube} from 'vue-lazytube'
export default {
    components: {
        LazyYoutube,
    },
}
</script>
<style scoped>
.play_confirm{
    position: relative;
    height: 450px;
    background-color: rgb(255, 255, 255);
    /* border: 2px solid rgba(0, 0, 0, 0.473); */
    box-shadow: 0px 0px 40px black;
    text-align: center;
    z-index: 100;
}
.my_video{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.btn{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
</style>