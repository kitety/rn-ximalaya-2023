import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
//  返回百分比宽度
export const wp = (percentage: number) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};
//  返回百分比高度
export const hp = (percentage: number) => {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
};

export {viewportWidth, viewportHeight};
