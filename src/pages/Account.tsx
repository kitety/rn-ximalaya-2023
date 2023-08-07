import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import React from 'react';

interface IProps {
  navigation: RootStackNavigation;
}

const Account = (props: IProps) => {
  const onPress = () => {
    props.navigation.navigate('Detail', {
      id: 100,
    });
  };
  return (
    <View>
      <Text>Account</Text>
      <Button title="跳转到详情页" onPress={onPress} />
    </View>
  );
};
export default Account;
