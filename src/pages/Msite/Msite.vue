<template>
  <div class="wrapper">
    <section class="msite">
      <HeaderTop :title="address.name">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
        </span>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(arr,index) in categoryArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(item,index) in arr" :key="index">
                <div class="food_container">
                  <img :src="baseImageUrl+item.image_url">
                </div>
                <span>{{item.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="../Msite/images/msite_back.svg" v-else>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList></ShopList>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ShopList from "../../components/ShopList/ShopList";

import { mapState } from "vuex";

export default {
  components: {
    HeaderTop,
    ShopList
  },
  props: {},
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com"
    };
  },
  watch: {
    categorys(newValue, oldValue) {
      //说明数组中有数据
      this.$nextTick(()=>{
        var mySwiper = new Swiper(".swiper-container", {
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  computed: {
    ...mapState(["address", "categorys"]),
    categoryArr() {
      let { categorys } = this;

      let carray = [];
      let temp = [];

      categorys.forEach(c => {
        temp.push(c);
        if (temp.length === 8) {
          carray.push(temp);
          temp = [];
        }
      });

      return carray;
    }
  },
  methods: {},
  created() {},
  mounted() {
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>