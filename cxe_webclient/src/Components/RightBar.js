import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
class RightBar extends Component {
  render() {
    const ListView = this.props.listView
    return (
      <Col className="pull-right" xs={4}>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              {this.props.title}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body style={{'max-height': 'calc(100vh - 250px)', 'overflow-y': 'auto'}}>
            <ListView>
            </ListView>
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

export default RightBar;
