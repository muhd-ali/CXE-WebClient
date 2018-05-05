import React, { Component } from 'react';
import { ListGroupItem, Row, Col } from 'react-bootstrap';
import ReportDetail from './ReportDetail';

class ReportRow extends Component {
  constructor(props, context) {
    super(props, context);
    let referenceDate;
    if (props.status === 'pending') {
      referenceDate = props.report.dateSubmitted;
    } else if (props.status === 'assigned') {
      referenceDate = props.report.dateAssigned;
    }
    this.referenceDate = referenceDate;
    this.state = {
      timePassed: this.getTimePassedStringSince(this.referenceDate),
    };
    this.runSeconds();
  }

  getTimePassedInMilliSecondsSince(dateString) {
    const dateNow = new Date();
    const date = new Date(dateString);
    const timePassed = dateNow - date;
    return timePassed;
  }

  getTimePassedStringSince(dateString) {
    const timePassed = new Date(
      this.getTimePassedInMilliSecondsSince(dateString)
    ).toISOString().slice(11,19);
    return timePassed;
  }

  runSeconds() {
    const self = this;
    setTimeout(() => {
      const timePassed = self.getTimePassedStringSince(self.referenceDate);
      this.setState({
        timePassed: timePassed,
      });
      self.runSeconds();
    }, 1000);
  }

  getRGBStringFrom(color) {
    return 'rgb(' + color.join(',') + ')';
  }

  getBackgroundColor() {
    const MAX_LIMIT_MINUTES = 60;
    let timePassed_minutes = this.getTimePassedInMilliSecondsSince(this.referenceDate)/1000/60;
    timePassed_minutes = timePassed_minutes > MAX_LIMIT_MINUTES ? MAX_LIMIT_MINUTES : timePassed_minutes;
    const col = 255 * (timePassed_minutes / MAX_LIMIT_MINUTES);
    const newColor = [255, 255 - col, 255 - col];
    return this.getRGBStringFrom([newColor]);
  }

  render() {
    const report = this.props.report;
    const backgroundColor = this.getBackgroundColor();
    return (
      <div>
        <ReportDetail onHide={() => this.props.hideDetail(this.props.status)(this.props.index)} report={report}></ReportDetail>
        <ListGroupItem onClick={() => this.props.showDetail(this.props.status)(this.props.index)} style={{'backgroundColor': backgroundColor, 'color': 'black'}}>
          <Row>
            <Col xs={8} md={8}>
              <b>
                {report.problemType.title}
              </b>
            </Col>
            <Col xs={4} md={4}>
              <b className="pull-right">
                {report.department.title}
              </b>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p className="pull-right">
                {this.state.timePassed}
              </p>
            </Col>
          </Row>
        </ListGroupItem>
      </div>
    );
  }
}

export default ReportRow;
