import homeModel from './home';

const models = [homeModel];

export type RootState = {
  home: typeof homeModel.state;
};
export default models;
