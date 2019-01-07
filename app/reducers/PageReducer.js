import {
  PAGE_ARTICULOS,
  PAGE_SOBRE_NOSOTROS,
  PAGE_SEARCH_CONTENT
} from '../actions/const'

const initialState = {
  ruta : '/productos',
  busqueda: ''
}

export const pageReducer = (state = initialState,action) => {
  console.log("_pageReducer#0")
  switch(action.type){
      case PAGE_SOBRE_NOSOTROS:
        return {
          ruta: action.ruta
        }
      case PAGE_ARTICULOS:
        return {
          ruta: action.ruta
        }
        case PAGE_SEARCH_CONTENT:
          console.log("_pageReducer"+action.busqueda)
          return {
            busqueda: action.busqueda
          }
        default:
          return state
  }
}

export default pageReducer
