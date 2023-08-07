import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Home = (props: IProps) => {
  console.log(props);
  const onPress = () => {
    props.navigation.navigate('Detail', {
      id: 100,
    });
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="跳转到详情页" onPress={onPress} />
    </View>
  );
};
export default Home;
