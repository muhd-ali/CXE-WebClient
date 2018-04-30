import {
  createStore,
  combineReducers,
} from 'redux';

const initialState = {
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
    case 'ADD_REPORT': {
      const report = action.payload;
      newState.reports.push(report);
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
    addReport: (report) => {
      dispatch({
        type: 'ADD_REPORT',
        payload: report,
      });
    },
  };
}
