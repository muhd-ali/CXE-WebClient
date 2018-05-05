import React, { Component } from 'react';
import { ListGroup, Panel } from 'react-bootstrap';
import ReportRow from './ReportRow';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './ReportsStore';

class ReportsList extends Component {
  render() {
    const state = this.props.reportsReducer;
    const pendingReportDivs = state.reports.pending.map((report, index) => {
      return <ReportRow
        showDetail={this.props.showDetail}
        hideDetail={this.props.hideDetail}
        key={index}
        index={index}
        report={report}
        visible={report.isDetailVisible}
        status='pending'
      >
      </ReportRow>;
    });

    const assignedReportDivs = state.reports.assigned.map((report, index) => {
      return <ReportRow
        showDetail={this.props.showDetail}
        hideDetail={this.props.hideDetail}
        key={index}
        index={index}
        report={report}
        visible={report.isDetailVisible}
        status='assigned'
      >
      </ReportRow>;
    });
    return (
      <div>
        <Panel>
          <Panel.Heading>
            {'Pending (' + pendingReportDivs.length + ')'}
          </Panel.Heading>
          <Panel.Body style={{'maxHeight': 'calc(65vh - 250px)', 'overflowY': 'auto'}}>
            <ListGroup>
              {pendingReportDivs}
            </ListGroup>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            {'Assigned (' + assignedReportDivs.length + ')'}
          </Panel.Heading>
          <Panel.Body style={{'maxHeight': 'calc(65vh - 250px)', 'overflowY': 'auto'}}>
            <ListGroup>
              {assignedReportDivs}
            </ListGroup>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsList);
