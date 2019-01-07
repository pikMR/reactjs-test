import React, { Component } from 'react';
import { updatePageSearchContent } from './../../app/actions/Actions'
import { connect } from 'react-redux'

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class TextSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.timer = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.triggerChange = this.triggerChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
      clearTimeout(this.state.timer);
      this.state.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
          clearTimeout(this.timer);
          this.triggerChange();
        }
    }

    triggerChange() {
        console.log("_triggerChange:"+this.state.value)
        this.props.updatePageSearchContent(this.state.value)
    }

    render() {
        return (
            <input
                type = {this.props.type}
                className={this.props.className}
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}

const mapStateToProps = (state) =>
{
  return {
    busqueda: state.pageReducer.busqueda
  }
}

export default connect(mapStateToProps, { updatePageSearchContent })(TextSearch);
