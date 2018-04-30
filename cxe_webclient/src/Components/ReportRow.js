import React, { Component } from 'react';
import { ListGroupItem, Row, Col } from 'react-bootstrap';
import ReportDetail from './ReportDetail';

class ReportRow extends Component {
  constructor(props, context) {
    super(props, context);
    const self = this;
    this.state = {
      timePassed: self.getTimePassedStringSinceDateSubmittedFor(props.report),
    };
    this.runSeconds();
  }

  getTimePassedInMilliSecondsSinceDateSubmittedFor(report) {
    const dateNow = new Date();
    const dateSubmitted = new Date(report.dateSubmitted);
    const timePassed = dateNow - dateSubmitted;
    return timePassed;
  }

  getTimePassedStringSinceDateSubmittedFor(report) {
    const timePassed = new Date(
      this.getTimePassedInMilliSecondsSinceDateSubmittedFor(report)
    ).toISOString().slice(11,19);
    return timePassed;
  }

  runSeconds() {
    const self = this;
    setTimeout(() => {
      const timePassed = self.getTimePassedStringSinceDateSubmittedFor(self.props.report);
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
    let timePassed_minutes = this.getTimePassedInMilliSecondsSinceDateSubmittedFor(this.props.report)/1000/60;
    timePassed_minutes = timePassed_minutes > MAX_LIMIT_MINUTES ? MAX_LIMIT_MINUTES : timePassed_minutes;
    const col = 255 * (timePassed_minutes / MAX_LIMIT_MINUTES);
    const normalColor = [col, 255 - col, 255 - col];
    const newColor = normalColor;
    return this.getRGBStringFrom(newColor);
  }

  render() {
    const report = this.props.report;
    const backgroundColor = this.getBackgroundColor();
    return (
      <div>
        <ReportDetail onHide={() => this.props.hideDetail(this.props.index)} visible={this.props.visible} report={report}></ReportDetail>
        <ListGroupItem onClick={() => this.props.showDetail(this.props.index)} style={{'backgroundColor': backgroundColor}}>
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
