/**
 *
 * DrinkItem
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { Collapse, CardBody, Card } from 'reactstrap';
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
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
  }
}

DrinkItem.propTypes = {};

export default DrinkItem;
