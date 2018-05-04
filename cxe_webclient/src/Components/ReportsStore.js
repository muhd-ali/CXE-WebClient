import {
  createStore,
  combineReducers,
} from 'redux';

const initialState = {
  reports: [],
  visibility: new Array(2).fill(false),
};

function reportsReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'HIDE_DETAIL': {
      const index = action.payload;
      newState.visibility[index] = false;
      break;
    }
    case 'SHOW_DETAIL': {
      const index = action.payload;
      newState.visibility[index] = true;
      break;
    }
    case 'NEW_REPORT': {
      const report = action.payload;
      newState.reports.push(report);
      newState.visibility.push(false);
      break;
    }
    case 'ALL_REPORTS': {
      const reports = action.payload.pending;
      newState.reports = reports;
      newState.visibility.push(false);
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
    showDetail: (reportIndex) => {
      dispatch({
        type: 'SHOW_DETAIL',
        payload: reportIndex,
      });
    },
    hideDetail: (reportIndex) => {
      dispatch({
        type: 'HIDE_DETAIL',
        payload: reportIndex,
      });
    },
  };
}
