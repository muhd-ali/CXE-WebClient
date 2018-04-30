import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';

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
          <Panel.Body style={{'maxHeight': 'calc(100vh - 250px)', 'overflowY': 'auto'}}>
            <Provider store={this.props.store}>
              <ListView>
              </ListView>
            </Provider>
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

export default RightBar;
