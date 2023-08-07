import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamLIst} from '@/navigator/index';

interface IProps {
  route: RouteProp<RootStackParamLIst, 'Detail'>;
}

const Detail = (props: IProps) => {
  const {route} = props;

  return (
    <View>
      <Text>Detail</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
};
export default Detail;
