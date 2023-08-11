import React, {useState} from 'react';
import SnapCarousel, {
  AdditionalParallaxProps,
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel'; // 给我六张cdn的图片
import {StyleSheet, View} from 'react-native';
import {hp, viewportWidth, wp} from '@/utils/index';
import {HomeState, ICarousel} from '@/models/home';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/models/index';
import {useMount} from 'ahooks';

const sliderWidth = viewportWidth;
const imageHeight = hp(26);

const Carousel = () => {
  const dispatch = useDispatch();
  useMount(() => {
    dispatch({type: 'home/fetchCarousels'});
  });

  const {carousel} = useSelector<RootState, HomeState>(
    (state: any) => state.home,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const getPaginationElement = () => {
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={carousel.length}
          activeDotIndex={activeIndex}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  };
  const renderItem = (
    {
      item,
    }: {
      item: ICarousel;
      index: number;
    },
    parallaxProps: AdditionalParallaxProps = {},
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.container}
        showSpinner
        spinnerColor={'rgba(0,0,0,0.25)'}
        {...parallaxProps}
      />
    );
  };
  return (
    <View>
      <SnapCarousel<ICarousel>
        loop
        autoplay
        data={carousel}
        hasParallaxImages
        itemWidth={itemWidth}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        onSnapToItem={setActiveIndex}
      />
      {getPaginationElement()}
    </View>
  );
};
const itemWidth = wp(90) + wp(2) * 2;
const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: imageHeight,
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
});
export default Carousel;
