import homeModel from './home';
import {DvaLoadingState} from 'dva-loading-ts';

const models = [homeModel];

export type RootState = {
  home: typeof homeModel.state;
  loading: DvaLoadingState;
};
export default models;
