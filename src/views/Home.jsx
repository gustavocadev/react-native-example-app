import { useEffect, useState } from 'react';
import { View, FlatList, Dimensions, Image } from 'react-native';
import ImageSearch from '../components/ImageSearch';
import { getImages } from '../helpers/getImages';

const Home = () => {
  const [images, setImages] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    getImages().then((images) => setImages(images));
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        flexDirection: 'column',
      }}
    >
      <ImageSearch
        setUserSearch={setUserSearch}
        userSearch={userSearch}
        setImages={setImages}
      />
      <FlatList
        style={{
          width: '100%',
          padding: 16,
        }}
        data={images}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Image
              source={{ uri: item.largeImageURL }}
              style={{
                height: 500,
                marginBottom: 4,
                resizeMode: 'cover',
              }}
            />
          );
        }}
      />
    </View>
  );
};
export default Home;
