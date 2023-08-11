import {Button, ScrollView, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import Carousel from '@/pages/Home/Carousel';
import Guess from '@/pages/Home/Guess';

interface IProps {
  navigation: RootStackNavigation;
}

const Index = (props: IProps) => {
  const onPress = () => {
    props.navigation.navigate('Detail', {
      id: 100,
    });
  };
  return (
    <ScrollView>
      <Text>Home1</Text>
      <Button title="跳转到详情页" onPress={onPress} />
      <Carousel />
      <Guess />
    </ScrollView>
  );
};
export default Index;
