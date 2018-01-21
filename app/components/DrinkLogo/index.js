/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/**
*
* DrinkLogo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class DrinkLogo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <img alt={'Drink Name'} onClick={this.props.onClick} style={{ width: '100%' }} src={'http://www.coca-cola.co.uk/content/dam/journey/gb/en/hidden/Products/Brand-image/Drinks-banners/Dr-Pepper-banner.jpg'} />
      </div>
    );
  }
}

DrinkLogo.propTypes = {
  onClick: PropTypes.func,
};

export default DrinkLogo;
