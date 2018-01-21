/**
 *
 * DrinkMachine
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Table } from 'reactstrap';
import DrinkItem from '../DrinkItem';


// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class DrinkMachine extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Drink Machine Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><DrinkItem /></th>
          </tr>
          <tr>
            <th scope="row"><DrinkItem /></th>
          </tr>
        </tbody>
      </Table>
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

DrinkMachine.propTypes = {};

export default DrinkMachine;
