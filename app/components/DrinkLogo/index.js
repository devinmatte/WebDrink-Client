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

const images = [
  'http://www.coca-cola.co.uk/content/dam/journey/gb/en/hidden/Products/Brand-image/Drinks-banners/Dr-Pepper-banner.jpg',
  'http://ugaiabc.com/wp/wp-content/uploads/1907455_623263227818460_3601708294401885047_n.jpg',
  'http://www.coca-cola.co.uk/content/dam/journey/gb/en/hidden/Products/Brand-image/Drinks-banners/Coca-Cola-Zero-Sugar-Banner.jpg',
  'http://www.faktxeber.com/resimler/haber/manset/253151_465312.jpg',
];

class DrinkLogo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ width: '100%', height: '100px', overflow: 'hidden', position: 'relative', alignItems: 'center' }}>
        <img alt={'Drink Name'} onClick={this.props.onClick} style={{ width: '100%', position: 'absolute' }} src={images[Math.floor(Math.random() * 4)]} />
      </div>
    );
  }
}

DrinkLogo.propTypes = {
  onClick: PropTypes.func,
};

export default DrinkLogo;
