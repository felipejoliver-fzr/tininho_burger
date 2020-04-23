import { combineReducers } from 'redux'

import carrinhoCompra from './carrinhoCompra'
import perfil from './perfil'

export default combineReducers({
    carrinhoCompra,
    perfil
})