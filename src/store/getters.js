export default{
    totalCount(state){
        return state.cartFoods.reduce((proTotal,food)=>proTotal+food.count,0)
    },
    totalPrice(state){
        return state.cartFoods.reduce((proTotal,food)=>proTotal+food.price*food.count,0)
    }
}