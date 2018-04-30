import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import ReportRow from './ReportRow';
import { store } from './ReportsStore';
import { Provider } from 'react-redux';

class ReportsList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      reports: [
        {
          'note': 'This is first report',
          'department': {
            'server_id': '',
            'title': 'Electrical'
          },
          'location': {
            'specifics': {
              'Terminal': 'E',
              'Gate': '1'
            },
            'gps': {
              'latitude': 51.50998,
              'longitude': -0.1337
            }
          },
          'dateSubmitted': '2018-04-29T04:05:55.468Z',
          'problemType': {
            'server_id': 'i11',
            'title': 'ATM Broken'
          }
        },
        {
          'note': 'This is another report',
          'department': {
            'server_id': '',
            'title': 'Cleaning'
          },
          'location': {
            'specifics': {
              'Terminal': 'C',
              'Gate': '1'
            },
            'gps': {
              'latitude': 51.51998,
              'longitude': -0.1237
            }
          },
          'dateSubmitted': '2018-04-29T03:43:42.468Z',
          'problemType': {
            'server_id': 'i11',
            'title': 'Ice Cream Spill'
          }
        },
      ],
    };
  }

  getReports() {
  }

  render() {
    const reports = this.state.reports;
    const reportDivs = [];
    for (let reportIndex in reports) {
      reportDivs.push(
        <Provider store={store}>
          <ReportRow index={reportIndex}>
          </ReportRow>
        </Provider>
      );
    }
    return (
      <ListGroup>
        {reportDivs}
      </ListGroup>
    );
  }
}

export default ReportsList;
