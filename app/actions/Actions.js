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

//export const updatePageSearchContent = (customParams) => (dispatch,getState) =>{
//    console.log("-> ACTIVA updatePageSearchContent")
//  dispatch(actionUpdatePageSearchContent())
//}

export const updatePageSearchContent = (palabra) => (dispatch, getState) => {
  console.log("-> ACTIVA updatePageSearchContent_palabra: " + palabra)
  fetch('notes',{method:'GET'}).then(results => results.json())
  .then(data =>
      dispatch(
        actionUpdatePageSearchContent(
          data.map((x) => ({
            nombre: x.nombre,
            intereses: x.intereses,
            imagen: x.imagen
          })).filter(function (articulo) {
              return articulo.nombre === palabra;
              })
        )
      )
    )
    .catch(err=>{console.log("--error--"+err)});
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
