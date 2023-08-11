import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/models/index';
import {HomeState, IGuess} from '@/models/home';
import {useMount} from 'ahooks';
import Touchable from '@/component/Touchable';
import Icon from '@/assets/iconfont';

const Guess = () => {
  const dispatch = useDispatch();
  const getGuess = () => {
    dispatch({type: 'home/fetchGuess'});
  };
  useMount(() => {
    getGuess();
  });

  const {guess} = useSelector<RootState, HomeState>((state: any) => state.home);
  const handlePress = () => {};
  const renderItem = ({item}: {item: IGuess}) => {
    return (
      <Touchable style={styles.item} onPress={handlePress}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </Touchable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="icon-qunfengcainixihuanxian" />
          <Text style={styles.headerTitle}>猜你喜欢</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.moreText}>更多</Text>
          <Icon name="icon-message" />
        </View>
      </View>
      <FlatList<IGuess>
        data={guess}
        renderItem={renderItem}
        numColumns={3}
        style={styles.list}
      />
      <Touchable onPress={getGuess} style={styles.changeGuess}>
        <Icon name="icon-huanyipi" color="red" />
        <Text style={styles.changeGuessText}>换一批</Text>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  headerTitle: {
    left: 5,
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
  },
  moreText: {
    right: 5,
    color: '#6f6f6f',
  },
  changeGuess: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
  },
  changeGuessText: {
    left: 5,
  },
  list: {
    padding: 10,
  },
});

export default Guess;
