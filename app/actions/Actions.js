import {
PAGE_SOBRE_NOSOTROS,
PAGE_ARTICULOS,
PAGE_SEARCH_CONTENT
} from './const'


export const updatePageNosotros = () => (dispatch,getState) =>{
  console.log("-> ACTIVA updatePageNosotros")
  dispatch(actionUpdatePageNosotros())
}

export const updatePageArticulos = () => (dispatch,getState) =>{
    console.log("-> ACTIVA updatePageArticulos")
  dispatch(actionUpdatePageArticulos())
}

export const updatePageSearchContent = () => (dispatch,getState) =>{
    console.log("-> ACTIVA updatePageSearchContent")
  dispatch(actionUpdatePageSearchContent())
}


// actions
const actionUpdatePageNosotros = () => ({
  type: PAGE_SOBRE_NOSOTROS,
  ruta: '/visita'
})

const actionUpdatePageArticulos = () => ({
  type: PAGE_ARTICULOS,
  ruta: '/productos'
})

const actionUpdatePageSearchContent = (busqueda) => ({
  type: PAGE_SEARCH_CONTENT,
  busqueda:  busqueda
})
