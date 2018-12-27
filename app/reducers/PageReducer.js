import {
  PAGE_ARTICULOS,
  PAGE_SOBRE_NOSOTROS
} from '../actions/const'

const initialState = {
  ruta : '/productos'
}

export const pageReducer = (state = initialState,action) => {
  switch(action.type){
      case PAGE_SOBRE_NOSOTROS:
        return {
          ruta: action.ruta
        }
      case PAGE_ARTICULOS:
        return {
          ruta: action.ruta
        }
        default:
          return state
  }
}

export default pageReducer
