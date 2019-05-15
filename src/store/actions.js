import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutation-types'
import { reqAddress, reqFoodCategorys, reqShops } from '../api'

export default {
    //异步回去地址
    async getAddress({commit,state}){
        //发送异步ajax请求
        let geohash = state.latitude + "," + state.longitude
        let result = await reqAddress(geohash);
        //提交一个mutation
        if(result.code===0){
            let address = result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },

    //异步回去分类
    async getCategorys({commit}){
        //发送异步ajax请求
        let result = await reqFoodCategorys();
        //提交一个mutation
        if(result.code===0){
            let categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },

    //异步获取商品
    async getShops({commit}){
        //发送异步ajax请求
        let result = await reqShops();
        //提交一个mutation
        if(result.code===0){
            let shops = result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    }
}