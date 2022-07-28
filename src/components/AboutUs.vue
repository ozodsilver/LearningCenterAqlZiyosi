<template>
    <div id="our_services" class="our_services">
        <div class="about_us container d-flex justify-content-between">
            <!-- Left -->
            <div class="left w-50">
                <h1>How we can help you</h1>
                <p>Follow our newsletter. We will regulary update <br> our latest project and availability.</p>
                <div>
                    <textarea name="" id="" cols="40" rows="5" placeholder="Send to your menssage"></textarea>
                </div>
                <button class="my_btn">Send to message</button>
            </div>

            <!-- Modals -->

            <MyDiologOne 
                v-if="showModalOne == true" 
                class="d_confirm m-auto position-fixed"
                @closeModal="closeModal"
            />
            <MyDiologTwo 
                v-if="showModalTwo == true" 
                class="d_confirm m-auto position-fixed"
                @closeModalTwo="closeModalTwo"
            />
            <MyDiologThree
                v-if="showModalThree == true" 
                class="d_confirm m-auto position-fixed"
                @closeModalThree="closeModalThree"
            />
            <MyDiologFour
                v-if="showModalFour == true" 
                class="d_confirm m-auto position-fixed"
                @closeModalFour="closeModalFour"
            />
            
            <!-- Right -->
            <div class="right w-50">
                <div class="right_top d-flex justify-content-between">
                    <div>
                        <div class="my_icon_group" @click="showModel_One()">
                            <box-icon class="my_icon" name='bar-chart-alt-2' color='white' ></box-icon>
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>Sometimes features require <br> a short description</p>
                    </div>
                    <div>
                        <div class="my_icon_group" @click="showModel_Two()">
                            <box-icon class="my_icon" type='solid' name='barcode' color='white'></box-icon>
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>Sometimes features require <br> a short description</p>
                    </div>
                </div>
                <div class="right_bottom d-flex justify-content-between">
                    <div>
                        <div class="my_icon_group" @click="showModel_Three()">
                            <box-icon class="my_icon" type='solid' name='barcode' color='white'></box-icon>
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>Sometimes features require <br> a short description</p>
                    </div>
                    <div>
                        <div class="my_icon_group" @click="showModel_Four()">
                            <box-icon class="my_icon" type='solid' name='barcode' color='white'></box-icon>
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>Sometimes features require <br> a short description</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>
<script>
import MyDiologOne from '@/components/Modals/MyModalOne.vue'
import MyDiologTwo from '@/components/Modals/MyModalTwo.vue'
import MyDiologThree from '@/components/Modals/MyModalThree.vue'
import MyDiologFour from '@/components/Modals/MyModalFour.vue'

export default {
    data(){
        return{
            showModalOne: false,
            showModalTwo: false,
            showModalThree: false,
            showModalFour: false
        }
    },
    components:{
        MyDiologOne,
        MyDiologTwo,
        MyDiologThree,
        MyDiologFour
    },
    methods:{
        showModel_One(){
            this.showModalOne = !this.showModalOne
        },
        closeModal(){
            this.showModalOne = !this.showModalOne
        },
        showModel_Two(){
            this.showModalTwo = !this.showModalTwo
        },
        closeModalTwo(){
            this.showModalTwo = !this.showModalTwo
        },
        showModel_Three(){
            this.showModalThree = !this.showModalThree
        },
        closeModalThree(){
            this.showModalThree = !this.showModalThree
        },
        showModel_Four(){
            this.showModalFour = !this.showModalFour
        },
        closeModalFour(){
            this.showModalFour = false
        },
    }
}
</script>
<style scoped>
.our_services{
    position: relative;
}
.about_us{
    margin-top: 15%;
}
.left h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: .2px;
}
.left p{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: #2E3E5C;

}
.my_icon_group{
    width: 70px;
    height: 70px;
    background-color: #706FE5;
    color: white;
    border-radius: 50%;
    position: relative;
}
.my_icon_group .my_icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.right h3{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin: 10px 0;
}
.right p{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 28px;
    color: #2E3E5C;
}
.my_btn{
    border: none;
    background-color: #706FE5;
    color: white;
    border-radius: 12px;
    padding: 10px 40px;
    margin-top: 10px;
    transition: .4s;
}
.my_btn:hover{
    background-color: #716fe5d3;
}

.d_confirm{
    width: 60% !important;
}

/* Media */

@media only screen and (max-width: 993px) {
    .about_us{
        display: block  !important;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        margin: 0 !important;
        padding: 0 !important;
    }
    .left{
        width: 100% !important; 
        text-align: center;
    }
    .left h1{
        margin-top: 30px;
    }
    .my_btn{
        margin-bottom: 20px;
    }
    .right{
        width: 100% !important; 
        text-align: center;
    }
    .my_icon_group{
        margin: auto;
    }
}
@media only screen and (max-width: 480px) {
    .left h1{
        font-size: 30px;
    }
    .left p{
        font-size: 20px;
        line-height: 30px;
    }
    .my_btn{
        padding: 7px 20px;
        font-size: 14px;
    }
    .my_icon_group{
        width: 40px;
        height: 40px;
    }
    .my_icon_group .my_icon{
        font-size: 16px;
    }
    .right h3{
        font-size: 15px;
        line-height: 23px;
    }
    .right p{    
        font-size: 12px;
        line-height: 16px;
    }
}
@media only screen and (max-width: 480px) {
    .right{
        margin-left: 3%;
    }
    .left{
        margin-left: 3%;
    }
}
</style>