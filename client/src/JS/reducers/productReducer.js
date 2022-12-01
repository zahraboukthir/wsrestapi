import { ADD_PRODUCT_FAILED, DELET_PRODUCT_FAILED, EDIT_PRODUCT_FAILED, GETONE_PRODUCT_FAILED, GETONE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_SUCCESS, LOADING } from "../actionTypes/productTypes";

const initState = {
    loading:true,
    error:null,
    list:[],
    prodDetails:{}

}
export const productReducer=(state=initState,{type, payload})=>{
    switch (type) {
        case LOADING:
            return {...state,loading:true}
        case GET_ALL_PRODUCTS_SUCCESS:
            return{...state,loading:false,list:payload}
            case GETONE_PRODUCT_SUCCESS:
                return{...state,loading:false,prodDetails:payload}
        case GET_ALL_PRODUCTS_FAILED:
        case ADD_PRODUCT_FAILED:
            case GETONE_PRODUCT_FAILED:
                case EDIT_PRODUCT_FAILED:
                    case DELET_PRODUCT_FAILED:
        return{...state,loding:false,error:payload}
        default:
            return state;
    }
}