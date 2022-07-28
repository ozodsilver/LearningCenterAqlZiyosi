<template>
  <div class="container mt-5" id="vue_hooper">
    <div>
      <h3 class="title mb-4">We create world-class digital classes</h3>
    </div>
    <div class="row" >
      <div class="col-12" >

        <hooper class="for_mobile_devices hooper" :progress="true" :autoPlay="false" :playSpeed="3000" style="height: 400px;">
        <!-- For miny devices -->
          <slide v-for="card in cards" :key="card" class=" d-flex justify-content-center">
            <div  class="card" style="width: 400px; height: 400px; ">
              <img class="card-img-top" :src="card.my_img" alt="Card image cap">
              <div class="card-body ">
                <h5 class="card-title"> {{card.title}} </h5>
                <p  class="card-text"> {{card.text}} </p>
              </div>
            </div>
          </slide>
        </hooper>

        <!-- For laptop devises -->

        <hooper class="for_laptop hooper" :progress="true" :autoPlay="false" :playSpeed="3000" style="height: 400px;">
          <!-- Slide -->
          <slide class="d-flex justify-content-center">
            <div class="card" style="width: 400px; height: 400px; ">
              <img class="card-img-top" src="@/assets/img/lCenter1.jpg" alt="Card image cap">
              <div class="card-body ">
                <h5 class="card-title">Card title</h5>
                <p  class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis, quis blanditiis maxime laboriosam sit culpa fuga ipsa corporis? Doloremque vero rerum cumque at minima modi quam quasi molestias perferendis consequuntur, nesciunt officiis libero fuga repellat, tenetur voluptates ipsum sequi! Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter1.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter1.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </slide>
          <!-- Slide -->
          <slide class="d-flex justify-content-center">
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter2.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter2.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter2.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </slide>

          <!-- Slide -->
          <slide class="d-flex justify-content-center">
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter3.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter3.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter3.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </slide>

          <!-- Slide -->
          <slide class="d-flex justify-content-center">
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter4.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter4.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter4.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </slide>
          <!-- Slide -->
          <slide class="d-flex justify-content-center">
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter6.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter6.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div class="card" style="width: 400px; height: 400px">
              <img class="card-img-top" src="@/assets/img/lCenter6.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
              </div>
            </div>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      cards: [
        {
          my_img: require("@/assets/img/lCenter1.jpg"),
          title: "Card Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          my_img: require("@/assets/img/lCenter2.jpg"),
          title: "Card Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          my_img: require("@/assets/img/lCenter3.jpg"),
          title: "Card Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          my_img: require("@/assets/img/lCenter4.jpg"),
          title: "Card Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          my_img: require("@/assets/img/lCenter5.jpg"),
          title: "Card Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          my_img: require("@/assets/img/lCenter6.jpg"),
          title: "Card Title",
          text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
      ]
    }
  }
};
</script>

<style scoped>
.for_mobile_devices{
  display: none !important;
}
img{
  border-radius: 10px;
  padding: 5px;
}
h3{
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0.2px;
}
.card
{
  overflow: scroll !important;
}
@media only screen and (max-width: 992px) {
  .title{
    font-size: 20px;
    line-height: 40px;
  }
}
@media only screen and (max-width: 770px) {
  
  .title{
    font-size: 15px;
    line-height: 30px;
  }
  .card{
    max-height: 250px !important;
  }
  .card-body h5{
    font-size: 15px ;
  }
  .card-body p{
    font-size: 10px;
    line-height: 10px;
  }
  .hooper{
    height: 250px !important;
  }
}
@media only screen and (max-width: 500px) {
  .for_mobile_devices{
    display: flex !important;
    height: 300px !important;
  }
  .for_laptop{
    display: none !important;
  }
  .title{
    font-size: 12px;
    line-height: 18px;
  }
  .container{
    margin-left: 2%;
  }
  .card-body h5{
    font-size: 18px ;
  }
  .card-body p{
    font-size: 12px;
    line-height: 14px;
  }
  .card{
    max-height: 390px !important;
  }
  
  .hooper{
    height: 400px !important;
  }
}
</style>