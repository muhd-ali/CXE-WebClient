import React, { Component } from 'react';
import { PageHeader, Col } from 'react-bootstrap';
class RightBar extends Component {
  render() {
    const ListView = this.props.listView
    return (
      <Col className="pull-right" xs={4} xsOffset={8} style={{width: '300px'}}>
        <PageHeader style={{'backgroundColor': 'Gainsboro'}}>
          <small style={{'padding-left':'10px', 'color':'black'}}>
            {this.props.title}
          </small>
        </PageHeader>
        <ListView>
        </ListView>
      </Col>
    )
  }
}

export default RightBar;
