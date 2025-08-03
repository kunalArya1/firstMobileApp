import React, { JSX } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { styles } from './Style';

const Home = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={{
            uri: 'https://kunalarya.me/kunal.jpg',
          }}
          style={{
            height: 300,

            marginTop: 60,
            resizeMode:"contain",
            borderRadius: 17,
          }}
        />
        <View>
          <Text style={styles.heading}>Kunal Kumar Arya</Text>
        </View>
        <View>
          <Text style={styles.des}>
            Hey there! After getting comfortable with web development, I'm now
            exploring mobile app development using React Native. This is my
            first app — a small step to get hands-on and start building real
            mobile experiences.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Button Pressed!')}
          >
            <Text style={styles.buttonTitle}>Explore More.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
