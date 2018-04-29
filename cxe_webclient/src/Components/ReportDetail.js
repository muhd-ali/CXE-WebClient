import React, { Component } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';

class ReportDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.modalShow = this.modalShow.bind(this);
    this.modalClose = this.modalClose.bind(this);
    const self = this;
    this.state = {
      report: props.report,
      timePassed: self.getTimePassedStringSinceDateSubmittedFor(props.report),
      modalVisible: props.visible,
    };
    this.runSeconds();
  }

  modalClose() {
    this.setState({ modalVisible: false });
  }

  modalShow() {
    this.setState({ modalVisible: true });
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
      const timePassed = self.getTimePassedStringSinceDateSubmittedFor(self.state.report);
      this.setState({
        timePassed: timePassed,
      });
      self.runSeconds();
    }, 1000);
  }

  render() {
    return (
      <Modal show={this.state.modalVisible} onHide={this.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Modal Title
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>

          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.modalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ReportDetail;
