import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Listen = (props: IProps) => {
  const onPress = () => {
    props.navigation.navigate('Detail', {
      id: 100,
    });
  };
  return (
    <View>
      <Text>Listen</Text>
      <Button title="跳转到详情页" onPress={onPress} />
    </View>
  );
};
export default Listen;
