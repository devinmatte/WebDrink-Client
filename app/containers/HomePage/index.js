/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
// import messages from './messages';
import DrinkMachine from '../../components/DrinkMachine';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} lg><DrinkMachine /></Col>
            <Col xs={12} lg><DrinkMachine /></Col>
            <Col xs={12} lg><DrinkMachine /></Col>
          </Row>
        </Container>
      </div>
    );

    // return (
    //   <h1>
    //     <FormattedMessage {...messages.header} />
    //   </h1>
    // )
  }
}
