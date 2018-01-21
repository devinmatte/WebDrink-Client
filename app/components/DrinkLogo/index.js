/**
*
* DrinkLogo
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Button } from 'reactstrap';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class DrinkLogo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button color="primary" style={{ marginBottom: '1rem' }}>Drink Logo</Button>
      </div>
    );
  }
}

DrinkLogo.propTypes = {

};

export default DrinkLogo;
