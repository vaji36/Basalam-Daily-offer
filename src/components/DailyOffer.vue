<template>
    <div class="daily-offer">
      <div class="container">
        <!--Daily offer header-->
        <div class="row list-header justify-content-between">
          <div class="title">
            <h1 class=""> یک تخفیف هیجان انگیز! + ارسال رایگان</h1>
            <span class="text-white">(تا سقف ۵۰ هزارتومان)</span>
          </div>
          <div class="d-flex left ml-3">
            <div class="d-flex f-right">

              <div class="off-code-box d-flex" @click="copyCode()" >
                <span>کد تخفیف:</span>
                <div id="discountCode" class="offCodeValue text-primary ml-2">Dailyoff14</div>
                <img src="../assets/images/copy.svg" alt="">
              </div>
              <!--<span class="tooltip">copied</span>-->
              <!--count-down-->
              <count-down-offer></count-down-offer>

            </div>

            <div class="see-all">
              <span class="float-left">مشاهده همه</span>
            </div>

          </div>
        </div>

        <!--Daily offers list item-->
        <div class="list-items">
          <div>
            <carousel id="Daily-offer-list" :loop="false" :margin="10" :rtl="true" :nav="false" :dots="false" :responsive="{
                                                                                                                0:{items:2},
                                                                                                                200:{items:2,margin:70},
                                    //                                                                            400:{margin:50},
                                                                                                                600:{items:3, margin:80},
                                                                                                                1000:{items:4},
                                                                                                                1200:{items:5},
                                                                                                                1400:{items:6}
                                                                                                                }">
              <div class="item" v-for="product in products" :key="product">
                <a class="" href="#">
                  <div class="card" style="width: 200px;">
                    <img :src="product.image" class="card-img-top" :alt="product.title" >
                    <div class="card-body">
                      <h5 class="card-title">{{product.title}}</h5>
                      <p class="card-text">غرفه:{{product.store }} </p>
                      <div class="text-left d-flex ltr">
                        <div class="discount-tag">{{product.off}}</div>
                        <span class=" text-line-through">{{product.price}}</span>
                      </div>
                      <div class="d-flex justify-content-between mt-2">
                        <div><i class="fa fa-ellipsis-v text-muted"></i></div>
                        <div class="d-flex">
                          <span class="price ml-1">,{{product.offerPrice}}</span>
                          <img src="../assets/images/toman.svg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            </carousel>
          </div>
        </div>
      </div>
    </div>
</template>

<script>



import carousel from 'vue-owl-carousel'
import CountDownOffer from './CountDown.vue';

export default {
    name: 'DailyOffer',
    props: {
        msg: String
    },
    components: {
        carousel ,
        CountDownOffer : CountDownOffer,
    },
      data() {
        return{
            discountCode : document.querySelector(".offCodeValue"),
            products :[
                {
                    image: "images/product-1.jpg",
                    title : "نان مغزدار شکلاتی (کروسان)",
                    store : " خانه کیک آیناز",
                    off : "۲۰٪",
                    price : "۴۸,۰۰۰",
                    offerPrice :"۳۶,۰۰۰",
                    count : 1
                },
                {
                    image: "images/product-2.jpg",
                    title : "باقلوا اعلا و درجه۱ یزدی",
                    store : "شیرینی حاج شهرام یزد",
                    off : "۲۷٪",
                    price : "۵۴,۰۰۰",
                    offerPrice :"۳۹,۵۰۰",
                    count : 1
                },
                {
                    image: "images/product-3.jpg",
                    title : "نان مغزدار شکلاتی (کروسان)",
                    store : "ادویه و خشکبار نازگل(روستای تر... ",
                    off : "۱۶٪",
                    price : "۵۸,۰۰۰",
                    offerPrice :"۴۸,۵۰۰",
                    count : 1
                },
                {
                    image: "images/product-4.jpg",
                    title : "رومیزی ترمه بختیاری",
                    store : " ترمه النا یزد",
                    off : "۳۴٪",
                    price : "۷۰,۰۰۰",
                    offerPrice :"۴۶,۰۰۰",
                    count : 1
                },
                {
                    image: "images/product-5.jpg",
                    title : "زیتون درجه یک فدک",
                    store : "مزرعه زیتون فدک",
                    off : "۶٪",
                    price : "۱۸,۰۰۰",
                    offerPrice :"۱۷,۰۰۰",
                    count : 1
                },
                {
                    image: "images/product-6.jpg",
                    title : "زعفزان نگین ۱ مثقالی",
                    store : " محصولات روستایی سبزرود",
                    off : "۳۴٪",
                    price : "۶۵,۰۰۰",
                    offerPrice :"۴۳,۰۰۰",
                    count : 1
                },

            ]
        }

      },
    mounted(){
//        $(".card-title").each(function(i){
//            len=$(this).text().length;
//            if(len>18)
//            {
//                $(this).text($(this).text().substr(0,18)+'…');
//            }
//        });
    },
    methods(){
//        copyCode(){
//            discountCode.select();
//        }

    }


}
</script>

<style >

  .row{
    margin: 0;
  }
  a,
  a:active,
  a:focus,
  a:visited,
  a:active:hover,
  a:focus:hover,
  a:hover,
  a:visited:hover{
    text-decoration: none;
    color: #2c2c2c;
  }
  .text-line-through{
    text-decoration: line-through;
    color: #7D7D7D;
    font-size: .875rem;
    align-self: center;
    margin-left: .3rem;
  }
  .ltr{
    direction: ltr;
  }

  .daily-offer{
    /*background-image: linear-gradient(180deg, #DB3856 15.94%, rgba(195, 50, 77, 0.932187) 34.78%, rgba(118, 30, 46, 0.713536) 54.35%, rgba(43, 11, 17, 0.50214) 79.84%, rgba(0, 0, 0, 0.38) 86.86%);*/
    padding: 0 1rem;
    background-image: url('../assets/images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .daily-offer .container{
    padding: 0 2.5rem 1rem ;
  }
  .daily-offer .row{
    margin-bottom: 2rem;
  }
  .daily-offer .list-items{
    padding-bottom: 1rem;
  }
  .daily-offer .list-header h1{
    font-weight: 500;
    color: #fff;
    font-size: 30px;
    margin: 2rem  0  1.3rem  0;
  }
  .daily-offer .list-header .title span{
    font-size: 17px;
    font-weight: lighter;
  }
  .daily-offer .list-header .left{
    flex-direction: column;
  }
  .card{
    border-radius: 1.3rem;
  }
  .card img{
    border-radius: 1.3rem 1.3rem 0 0 ;
  }
  .card .card-body img{
    width: 16px;
  }
  #Daily-offer-list .card-title{
    font-size: 14px;

  }
  #Daily-offer-list .card-text{
    font-size: 12px;
    color: #7D7D7D;
  }
  .off-code-box{
    background-color: #fff;
    margin: 2.2rem 0 1.5rem .7rem;
    padding: .3rem 1rem;
    border-radius: 1rem;
  }
  .off-code-box span{
    margin-left: 1rem;
  }
  .card-body {
    padding: 1rem .6rem .7rem;
  }
  .discount-tag{
    background-color: #E24C6C;
    color: #fff;
    border-radius: .8rem;
    font-size: 14px;
    line-height: .8rem;
    padding: .2rem .5rem;
  }




  /*-----------responsive----------*/
  @media(max-width: 840px) {
    .daily-offer .container {
      padding: 0 1.5rem;
    }
    .daily-offer .list-header .left{
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .daily-offer .see-all{

    }

  }
  @media(max-width: 920px) {
    .see-all {
      position: absolute;
      left: 30px;
      margin-top: .3rem;
    }
    .daily-offer .row {
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 700px) and (min-width:600px){
    .daily-offer .container {
      padding: 0 .8rem;
    }
  }
  @media(max-width: 540px) {
    .daily-offer .container {
      padding: 0;
    }
  }
  @media(max-width: 490px) {
    .daily-offer .list-header h1{
      font-size: 20px;
    }
    .daily-offer{
      padding: 0 10px 0 0;
    }
    .daily-offer .container {
      padding: 0;
    }
    .off-code-box{
      margin: 2.2rem 0 1.5rem 0;
    }
    .see-all{
      left: 10px;
    }
  }
  @media(max-width: 430px) {
      .see-all , .off-code-box span , .off-code-box div{
        font-size: .75rem;
      }
    .off-code-box{
      padding: .5rem .6rem;
    }
    .off-code-box div{
      margin-left: .3rem;
    }
    .off-code-box img{
      width: 16px;
    }
  }

</style>
