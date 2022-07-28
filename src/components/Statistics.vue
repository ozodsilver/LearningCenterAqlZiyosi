<template>
    <div class="statistics text-center" id="about_us">
        <h3>Learning Center Statistics</h3>
       <div class="stats row w-75 d-flex justify-content-between text-center mt-5">

            <div class="stats_group col-md-3 col-sm-6">
                <div class="my_icon_group">
                    <box-icon class="my_icon" name='male-female' color='white'></box-icon>
                </div>
                <VueJsCounter style="font-size: 25px; line-height: 60px;" start="0" end="34" duration="3500" thousand="." decimal=","></VueJsCounter>
                <p>Umumiy o'qituvchilar soni</p>
            </div>

            <div class="stats_group col-md-3 col-sm-6">
                <div class="my_icon_group">
                    <box-icon class="my_icon" type='solid' name='group' color='white'></box-icon>
                </div>
                <VueJsCounter style="font-size: 25px; line-height: 60px;" start="0" end="156" duration="3500" thousand="." decimal=","></VueJsCounter>
                <p>Umumiy o'quvchilar soni</p>
            </div>

            <div class="stats_group col-md-3 col-sm-6">
                <div class="my_icon_group">
                    <box-icon class="my_icon" type='solid' name='user-detail' color='white'></box-icon>
                </div>
                <VueJsCounter style="font-size: 25px; line-height: 60px;" start="0" end="200" duration="3500" thousand="." decimal=","></VueJsCounter>
                <p>Tugatgan talabalar soni</p>
            </div>

            <div class="stats_group col-md-3 col-sm-6">
                <div class="my_icon_group">
                    <box-icon class="my_icon" type='solid' name='user-check' color='white'></box-icon>
                </div>
                <VueJsCounter style="font-size: 25px; line-height: 60px;" start="0" end="10" duration="3500" thousand="." decimal=","></VueJsCounter>
                <p>Guruhlar soni</p>
            </div>
       </div>
    </div>
</template>
<script>
import 'boxicons'
import VueJsCounter from 'vue-js-counter'

export default {
    components:{
        VueJsCounter
    }
    
}
</script>
<style scoped>
.statistics h3{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #1E1F4B;
}
.statistics{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-color: rgba(112, 111, 229, 0.02);
}
.my_icon_group{
    width: 70px;
    height: 70px;
    background-color: #706FE5;
    color: white;
    border-radius: 50%;
    position: relative;
    margin: auto;
}
.my_icon_group .my_icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.stats_group p{
    color: #1E1F4B;
    font-size: 20px;
    line-height: 15px;
}


/* Media */
@media only screen and (max-width: 760px) {
    .statistics h3{
        font-size: 18px;
        line-height: 24px;
    }
    .my_icon_group{
        width: 60px;
        height: 60px;
    }
    .stats_group p{
        font-size: 15px;
        line-height: 15px;
    }
}
@media only screen and (max-width: 430px) {
    
    .statistics{
        background-color: rgb(255, 255, 255);
    }
    .statistics h3{
        margin-left: 7%;
    }
    .stats_group{
        margin-left: 2%;
    }
}
</style>