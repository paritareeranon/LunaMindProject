import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from "../firebaseConfig";

const Home = () => {
  const navigation = useNavigation();
  const [hasEmptyLastPeriod, setHasEmptyLastPeriod] = useState(false);
    
  const checkPeriodData = async () => {
    try {
      const periodCollectionRef = collection(firestore, 'testPeriod');
      const snapshot = await getDocs(periodCollectionRef);

      let foundEmptyLastPeriod = false;

      snapshot.forEach(doc => {
        const { LastPeriod } = doc.data();
        if (LastPeriod === "") {
          foundEmptyLastPeriod = true;
        }
      });

      if (snapshot.size > 1) {
        foundEmptyLastPeriod = false;
      }

      setHasEmptyLastPeriod(foundEmptyLastPeriod);
    } catch (error) {
      console.error('Error fetching period data:', error);
    }
  };
  useEffect(() => {
    checkPeriodData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      checkPeriodData();
    }, [])
  );


  const handleCheck = () => {
    if (hasEmptyLastPeriod) {
      navigation.navigate('LastPeriod');
    } else {
      navigation.navigate('PeriodScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello Welcome to Home Screen</Text>
      <Button title="Go to CalendarMood" color="red" onPress={() => navigation.navigate('CalendarMood')} />
      <Button title="Go to Last period" color="red" onPress={() => navigation.navigate('LastPeriod')} />
      <Button title="Go to PeriodScreen" color="red" onPress={() => navigation.navigate('PeriodScreen')} />
      <Button title="Check" color="green" onPress={handleCheck} />
      <Button
        title="Profile"
        color="red"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE1F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
