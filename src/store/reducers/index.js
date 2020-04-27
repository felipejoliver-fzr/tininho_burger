import { combineReducers } from 'redux'

import carrinhoCompra from './carrinhoCompra'
import login from './login'

export default combineReducers({
    carrinhoCompra,
    login
})