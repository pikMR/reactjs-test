import React from 'react'
import Articulo from './../articulo/articulo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updatePageNosotros,updatePageArticulos } from './../../app/actions/Actions'
import { browserHistory } from 'react-router'

class MainContent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      articulos:[]
    }
  }

  componentDidMount(){
    this.getItems();
  }

  getItems(){
    fetch('articulos',{method:'GET'}).then(results => results.json())
    .then(data =>
        this.setState({
          articulos:
            data.map((x) => ({
              titulo: x.titulo,
              descripcion: x.descripcion,
              imagen: x.imagen,
              pie1: x.pie1,
              pie2: x.pie2
            }))
         })
       )
      .catch(err=>{console.log("--error--"+err)});
  }

  render(){
    return(
      <main className="twitter-panel">
      <Choose>
        <When condition={this.props.ruta ==='/visita'}>
          <div>
            <h1>Quienes somos?</h1>
            <Articulo key="quienes_somos" descripcion={"En pocos días iniciaremos el año 2019 y con el nuevo año nos vienen a la cabeza nuevos propósitos para el próximo año. De una manera u otra siempre nos proponemos cambios: hacer deporte, cambiar de trabajo, estudiar idiomas, ser más positivo y quejarse menos, cambiar de casa o plantearse una nueva decoración para alguna zona de nuestro hogar."} />
          </div>
        </When>
        <Otherwise condition={this.props.ruta ==='/productos'}>
          <div className="tweet-container-header">
            Articulos
          </div>
          <For each="item" index='index' of={ this.state.articulos }>
            <Articulo key={"articulo_"+index}
            titulo={item.titulo}
            descripcion={item.descripcion}
            imagen={item.imagen}
            pie1={item.pie1}
            pie2={item.pie2} />
          </For>
        </Otherwise>
      </Choose>
      </main>
    )
  }
}

MainContent.propTypes = {
  ruta: PropTypes.string
}

MainContent.defaultProps = {
  ruta: browserHistory.getCurrentLocation().pathname
}

const mapStateToProps = (state,ownProps) =>
{
  return {
    ruta: state.pageReducer.ruta
  }
}

export default connect(mapStateToProps, { updatePageArticulos, updatePageNosotros })(MainContent);
