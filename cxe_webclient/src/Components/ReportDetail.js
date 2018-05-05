import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button, Modal} from 'react-bootstrap';

class ReportDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.modalClose = this.modalClose.bind(this);
    const self = this;
    this.state = {
      report: props.report,
      timePassed: self.getTimePassedStringSinceDateSubmittedFor(props.report)
    };
    this.runSeconds();
  }

  modalClose() {
    this.props.onHide();
  }

  getTimePassedInMilliSecondsSinceDateSubmittedFor(report) {
    const dateNow = new Date();
    const dateSubmitted = new Date(report.dateSubmitted);
    const timePassed = dateNow - dateSubmitted;
    return timePassed;
  }

  getTimePassedStringSinceDateSubmittedFor(report) {
    const timePassed = new Date(this.getTimePassedInMilliSecondsSinceDateSubmittedFor(report)).toISOString().slice(11, 19);
    return timePassed;
  }

  runSeconds() {
    const self = this;
    setTimeout(() => {
      const timePassed = self.getTimePassedStringSinceDateSubmittedFor(self.state.report);
      this.setState({timePassed: timePassed});
      self.runSeconds();
    }, 1000);
  }

  render() {
    return (
      <Modal show={this.state.report.isDetailVisible} onHide={this.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Report Summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroupItem header='Problem Type'>
              {this.state.report.problemType.title}
            </ListGroupItem>
            <ListGroupItem header='Department'>
              {this.state.report.department.title}
            </ListGroupItem>
            <ListGroupItem header='Location'>
              <b>Terminal:{' '}
              </b>
              {this.state.report.location.specifics.Terminal}
              <br/>
              <b>Gate:{' '}
              </b>
              {this.state.report.location.specifics.Gate}
            </ListGroupItem>
            <ListGroupItem header='Note'>
              {this.state.report.note}
            </ListGroupItem>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.modalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
  }
}

export default ReportDetail;
