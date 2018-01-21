/**
*
* DrinkMachine
*
*/

import React from 'react';
// import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';
import DrinkItem from '../DrinkItem';


// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class DrinkMachine extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ListGroup>
        <ListGroupItem><DrinkItem /></ListGroupItem>
      </ListGroup>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <FormattedMessage {...messages.header} />
  //     </div>
  //   );
  // }
}

DrinkMachine.propTypes = {

};

export default DrinkMachine;
