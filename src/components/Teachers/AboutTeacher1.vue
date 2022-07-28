<template>
    <div class="teacher">
        <div>
            <h2 class="title">Let's hear <br> What they says</h2>
        </div>
        <div class="text mt-5">
            <p class="w-50 m-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt
                fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.title{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    position: relative;
}
.text p{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    opacity: .5;
}
.title::before{
    content: url('@/assets/img/string.png');
    position: absolute;
    top: 55%;
    left: 18%;
}
.title::after{
    content: url('@/assets/img/string.png');
    position: absolute;
    top: 55%;
    right: 18%;
}
@media only screen and (max-width: 1000px) {
    .text p{
        font-size: 14px;
        line-height: 40px;
    }
}
@media only screen and (max-width: 850px) {
    .text p{
        font-size: 10px;
        line-height: 25px;
    }
    .title{
        font-size: 30px;
        line-height: 50px;
    }
    .title::before{
        top: 55%;
        left: 10%;
    }
    .title::after{
        top: 55%;
        right: 10%;
    }
}
@media only screen and (max-width: 520px) {
    .title{
        font-size: 20px;
        line-height: 30px;
    }
    .title::before{
        content: url('@/assets/img/string.png');
        position: absolute;
        width: 5px !important;
        height: 5px !important;
        top: 50%;
        left: 10%;
    }
    .title::after{
        content: url('@/assets/img/string.png');
        position: absolute;
        top: 50%;
        right: 10%;
    }
    .teacher{
        margin-left: 5%;
    }
}
</style>