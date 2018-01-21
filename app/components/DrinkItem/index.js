/**
 *
 * DrinkItem
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { Collapse, CardBody, Card, Button } from 'reactstrap';
import DrinkLogo from '../DrinkLogo';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class DrinkItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Card>
          <DrinkLogo onClick={this.toggle} />
          {/* TODO: Make DrinkLogo trigger collapse */}
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              <Button color={'primary'} block>Drop</Button>
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
  }
}

DrinkItem.propTypes = {};

export default DrinkItem;
