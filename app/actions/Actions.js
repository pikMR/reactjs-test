import {
PAGE_SOBRE_NOSOTROS,
PAGE_ARTICULOS
} from './const'


export const updatePageNosotros = () => (dispatch,getState) =>{
  console.log("-> ACTIVA updatePageNosotros")
  dispatch(actionUpdatePageNosotros())
}

export const updatePageArticulos = () => (dispatch,getState) =>{
    console.log("-> ACTIVA updatePageArticulos")
  dispatch(actionUpdatePageArticulos())
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
