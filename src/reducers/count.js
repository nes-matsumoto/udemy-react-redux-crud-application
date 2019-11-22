//reducerとは：発生したactionに対する状態の変化を定義する関数



//定義したアクションのtypeを読み込む
import {INCREMENT,DECREMENT} from '../actions'
//初期状態を定義
const initialState ={value:0}
//reducerでアクションに対する状態遷移を定義
export default (state=initialState , action) => {
    switch(action.type){
        case INCREMENT:
            return {value: state.value + 1}  
        case DECREMENT:
            return {value: state.value - 1}
        default:
            return state

    

    }


}


