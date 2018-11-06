import React from 'react'
import PropTypes from 'prop-types'
import { SketchPicker } from 'react-color'
class Colorpicker extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      selector: props.selector
    };

  }

  handleChange = ( color ) => {
    //console.log( color.hex )
    document.body.style.background = color.hex

    let element = document.querySelector('#'+ this.state.selector);
    element.value = color.hex;
  }

  render() {
    return(
      <React.Fragment>
        <SketchPicker
          color={ this.props.color }
          onChange={ this.handleChange }
        />
      </React.Fragment>
    )
  }
}

Colorpicker.propTypes = {};

export default Colorpicker
