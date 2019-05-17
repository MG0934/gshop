import {
    RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS,
    RECEIVE_USER_INFO, RESET_USER_INFO,
    RECEIVE_SHOP_GOODS, RECEIVE_SHOP_INFO,
    RECEIVE_SHOP_RATINGS,INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT,CLEAR_FOODS
} from './mutation-types'
import {
    reqAddress, reqFoodCategorys, reqShops, reqUserInfo, reqLogout,
    reqShopGoods, reqShopRatings, reqShopInfo
} from '../api'

export default {
    //异步回去地址
    async getAddress({ commit, state }) {
        //发送异步ajax请求
        let geohash = state.latitude + "," + state.longitude
        let result = await reqAddress(geohash);
        //提交一个mutation
        if (result.code === 0) {
            let address = result.data
            commit(RECEIVE_ADDRESS, { address })
        }
    },

    //异步回去分类
    async getCategorys({ commit }) {
        //发送异步ajax请求
        let result = await reqFoodCategorys();
        //提交一个mutation
        if (result.code === 0) {
            let categorys = result.data
            commit(RECEIVE_CATEGORYS, { categorys })
        }
    },

    //异步获取商品
    async getShops({ commit }) {
        //发送异步ajax请求
        let result = await reqShops();
        //提交一个mutation
        if (result.code === 0) {
            let shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }
    },

    addUserInfo({ commit }, userInfo) {
        commit(RECEIVE_USER_INFO, { userInfo })
    }
    ,
    async getUserInfo({ commit }) {

        const result = await reqUserInfo();
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, { userInfo })
        }
    },

    async loginOut({ commit }) {
        const result = await reqLogout();
        if (result.code === 0) {
            commit(RESET_USER_INFO);
        }
    },
    async getShopInfo({ commit }) {
        const result = await reqShopInfo();
        if (result.code === 0) {
            const shopInfo = result.data
            commit(RECEIVE_SHOP_INFO, { shopInfo })
        }
    }
   ,
    async getShopRatings({ commit }) {
        const result = await reqShopRatings();
        if (result.code === 0) {
            const shopRatings = result.data
            commit(RECEIVE_SHOP_RATINGS, { shopRatings })
        }
    }
    ,
    async getShopGoods({ commit },callback) {
        const result = await reqShopGoods();
        if (result.code === 0) {
            const shopGoods = result.data
            commit(RECEIVE_SHOP_GOODS, { shopGoods })
            callback && callback()
        }
    }
    ,
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    clearCart({commit}){
        commit(CLEAR_FOODS)
    }
}