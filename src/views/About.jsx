import { View } from 'react-native';
import { Text } from 'react-native-paper';

const About = () => {
  return (
    <View
      style={{
        padding: 16,
      }}
    >
      <Text variant="bodyMedium">
        This is a simple image search app. It uses the Pixabay API to search for
        images.
      </Text>
    </View>
  );
};
export default About;
