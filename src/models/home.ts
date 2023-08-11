import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

// 轮播图
const CAROUSEL_URL = '/mock/11/bear/carousel';
// 猜你喜欢
const GUESS_URL = '/mock/11/bear/guess';

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface IGuess {
  id: string;
  image: string;
  title: string;
}

export interface HomeState {
  carousel: ICarousel[];
  guess: IGuess[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
    fetchGuess: Effect;
  };
}

const initState = {
  carousel: [],
  guess: [],
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
    *fetchGuess(_, {call, put}) {
      const {data} = yield call(axios.get, GUESS_URL);
      console.log({data});
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
  },
};
export default homeModel;
