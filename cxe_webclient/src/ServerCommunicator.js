import io from 'socket.io-client';

export class ServerCommunicator {
  constructor(reportsStore) {
    this.reportsStore = reportsStore
    this.socket = io('http://localhost:8000/webClientSocketIO');
    this.addSocketEvents();
  }

  addSocketConnectEvent() {
    this.socket.on('connect', () => {
      console.log('connection established with server.');
    });
  }

  addSocketDisconnectEvent() {
    this.socket.on('disconnect', () => {
      console.log('connection lost with server.');
    });
  }

  addNewReportEvent() {
    this.socket.on('newReport', (report) => {
      this.reportsStore.dispatch({
        type: 'NEW_REPORT',
        payload: report,
      });
    });
  }

  addAllReportsEvent() {
    this.socket.on('allReports', (reports) => {
      this.reportsStore.dispatch({
        type: 'ALL_REPORTS',
        payload: reports,
      });
    });
  }

  addSocketEvents() {
    this.addSocketConnectEvent();
    this.addSocketDisconnectEvent();
    this.addNewReportEvent();
    this.addAllReportsEvent();
  }
}
