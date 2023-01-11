import * as React from 'react';
import { Keyboard, View } from 'react-native';
import { getImages } from '../helpers/getImages';
import { Text, Button, Searchbar } from 'react-native-paper';

const ImageSearch = ({ setUserSearch, userSearch, setImages }) => {
  const handleSubmit = async () => {
    const images = await getImages(userSearch);
    setImages(images);
    Keyboard.dismiss();
  };

  return (
    <View
      style={{
        flexDirection: 'column',
      }}
    >
      <Text
        variant="displayMedium"
        style={{
          padding: 4,
          color: 'black',
        }}
      >
        Search a Image
      </Text>
      <Searchbar
        placeholder="Search"
        onChangeText={(value) => setUserSearch(value)}
        value={userSearch}
        style={{
          marginBottom: 10,
        }}
      />
      <Button onPress={handleSubmit} mode="contained">
        Search
      </Button>
    </View>
  );
};
export default ImageSearch;
