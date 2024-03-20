import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { firestore } from "../firebaseConfig";
import { collection, getDocs, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReportTest = () => {
  const [moodData, setMoodData] = useState([]);

  const maxMoodValue = 5;

  useEffect(() => {
    fetchPeriodData();
  }, []);

  const fetchPeriodData = async () => {
    try {
      const email = await AsyncStorage.getItem('useraccount');
      if (email) {
        const colRef = collection(firestore, 'UserInfo');
        const docRef = doc(colRef, email);
        const subColRef = collection(docRef, 'mood');
        const snapshot = await getDocs(subColRef);

        const data = [];
        snapshot.forEach(doc => {
          const { date, mood } = doc.data();
          data.push({ date, mood });
        });
        setMoodData(data);
      }
    } catch (error) {
      console.error('Error fetching period data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <BarChart
        barWidth={22}
        noOfSections={1}
        barBorderRadius={4}
        frontColor="lightgray"
        data={moodData.map(entry => ({ value: entry.mood, label: entry.date }))}
        yAxisThickness={1}
        xAxisThickness={1}
        yAxisProps={{
          showAxisLine: true,
          axisLabel: {
            fontSize: 12,
            fontWeight: 'bold',
            labelColor: 'black'
          },
          axisLine: {
            lineColor: 'black',
            lineThickness: 1
          },
          gridLine: {
            lineColor: 'black',
            lineThickness: 0.5
          },
          min: 0,
          max: maxMoodValue,
        }}
        xAxisProps={{
          showAxisLine: true,
          axisLabel: {
            fontSize: 12,
            fontWeight: 'bold',
            labelColor: 'black'
          },
          axisLine: {
            lineColor: 'black',
            lineThickness: 2
          },
          gridLine: {
            lineColor: 'black',
            lineThickness: 0.5
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReportTest;
