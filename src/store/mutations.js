import {
    RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_SHOP_GOODS,
    RECEIVE_SHOP_INFO,
    RECEIVE_SHOP_RATINGS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,CLEAR_FOODS
} from './mutation-types'

import Vue from 'vue'

export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address;
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys;
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops;
    },
    [RECEIVE_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo;
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {};
    },
    [RECEIVE_SHOP_GOODS](state, { shopGoods }) {
        state.shopGoods = shopGoods;
    },
    [RECEIVE_SHOP_INFO](state, { shopInfo }) {
        state.shopInfo = shopInfo;
    },
    [RECEIVE_SHOP_RATINGS](state, { shopRatings }) {
        state.shopRatings = shopRatings;
    },
    [INCREMENT_FOOD_COUNT](state, { food }) {
        if(!food.count){
            Vue.set(food,'count',1);
            state.cartFoods.push(food)
        }else{
            food.count++;
        }
    },
    [DECREMENT_FOOD_COUNT](state, { food }) {
        if(food.count){
            food.count--;
            if(food.count===0){
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [CLEAR_FOODS](state){
        state.cartFoods.forEach(element => {
            element.count=0;
        });
        state.cartFoods=[];
    }
}