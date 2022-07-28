<template>
    <div class="play_confirm">
        <h1>Ushbu kurs haqida 3</h1>
        <p>Ipsum dolor sit amet consectetur adipisicing elit. Rerum earum dolorum quam sed eaque fugiat unde ratione, commodi consequatur quaerat excepturi vitae, veniam distinctio minima officiis animi provident cupiditate vero!</p>
        <button @click="$emit('closeModalThree')" class="btn btn-danger">Close</button>
    </div>

</template>
<script>
export default {
    components: {
    },
}
</script>
<style scoped>
.play_confirm{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 450px;
    background-color: rgb(255, 255, 255);
    /* border: 2px solid rgba(0, 0, 0, 0.473); */
    box-shadow: 0px 0px 10000px 30px black;
    text-align: center;
    z-index: 100;
    border-radius: 7px;
}
.btn{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
</style>