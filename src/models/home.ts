import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

const CAROUSEL_URL = '/mock/11/bear/carousel';

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface HomeState {
  carousel: ICarousel[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
  };
}

const initState = {
  carousel: [],
};
const homeModel: HomeModel = {
  namespace: 'home',
  state: initState,
  reducers: {
    setState(state = initState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchCarousels(_, {call, put}) {
      const {data} = yield call(axios.get, CAROUSEL_URL);
      console.log({data});
      yield put({
        type: 'setState',
        payload: {
          carousel: data,
        },
      });
    },
  },
};
export default homeModel;
