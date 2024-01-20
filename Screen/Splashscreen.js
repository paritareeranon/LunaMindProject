import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Splashscreen = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginView');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../img/logo1.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonText}>
        <Text>Developed by</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    color: "#00D49D",
    fontWeight: "bold",
    fontSize: 40,
  },
  buttonText: {
    position: 'absolute',
    bottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default Splashscreen;
