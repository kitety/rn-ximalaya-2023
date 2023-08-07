import {Model} from 'dva-core-ts';
import {Reducer} from 'redux';

export interface HomeState {
  num: number;
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    add: Reducer<HomeState>;
  };
  // effects: {
  //   asyncAdd: Effect;
  // };
}

const initState = {
  num: 0,
};
const homeModel: HomeModel = {
  namespace: 'home',
  state: initState,
  reducers: {
    add(state = initState, {payload}) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
  // effects: {
  //   *asyncAdd({payload}, {call, put}) {
  //     yield call(() => {
  //       return new Promise(resolve => {
  //         setTimeout(() => {
  //           resolve();
  //         }, 1000);
  //       });
  //     });
  //     yield put({type: 'add'});
  //   },
  // },
};
export default homeModel;
