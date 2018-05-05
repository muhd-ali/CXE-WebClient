import {
  createStore,
  combineReducers,
} from 'redux';

const initialState = {
  reports: {
    'pending': [],
    'assigned': [],
  },
};

function reportsReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'HIDE_DETAIL_PENDING': {
      const index = action.payload;
      newState.reports.pending[index].isDetailVisible = false;
      break;
    }
    case 'SHOW_DETAIL_PENDING': {
      const index = action.payload;
      newState.reports.pending[index].isDetailVisible = true;
      break;
    }
    case 'HIDE_DETAIL_ASSIGNED': {
      const index = action.payload;
      newState.reports.assigned[index].isDetailVisible = false;
      break;
    }
    case 'SHOW_DETAIL_ASSIGNED': {
      const index = action.payload;
      newState.reports.assigned[index].isDetailVisible = true;
      break;
    }
    case 'NEW_REPORT': {
      const report = action.payload;
      newState.reports.pending.push(report);
      break;
    }
    case 'ALL_REPORTS': {
      const reports = action.payload;
      for (let status in reports) {
        const reportsWithStatus = reports[status];
        reportsWithStatus.forEach(r => {
          r.isDetailVisible = false;
        });
      }
      newState.reports = reports;
      break;
    }
    case 'REPORT_ASSIGNED': {
      // const reportID = action.payload;
      // newState.reports = reports;
      break;
    }
    default:
      break;
  }
  return newState;
}

export const store = createStore(
  combineReducers({
    reportsReducer,
  })
);

export function mapStateToProps(state) {
  return {
    reportsReducer: state.reportsReducer,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    showDetail: (category) => (reportIndex) => {
      let type = '';
      switch (category) {
        case 'pending': {
          type = 'SHOW_DETAIL_PENDING';
          break;
        }
        case 'assigned': {
          type = 'SHOW_DETAIL_ASSIGNED';
          break;
        }
        default:
          break;
      }
      dispatch({
        type: type,
        payload: reportIndex,
      });
    },
    hideDetail: (category) => (reportIndex) => {
      let type = '';
      switch (category) {
        case 'pending': {
          type = 'HIDE_DETAIL_PENDING';
          break;
        }
        case 'assigned': {
          type = 'HIDE_DETAIL_ASSIGNED';
          break;
        }
        default:
          break;
      }
      dispatch({
        type: type,
        payload: reportIndex,
      });
    },
  };
}
