import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { firestore } from "../firebaseConfig";
import { collection, getDocs, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WeeklyChart = () => {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const email = await AsyncStorage.getItem("useraccount");
                const colRef = collection(firestore, 'UserInfo');
                const docRef = doc(colRef, email);
                const subColRef = collection(docRef, "mood");
                const snapshot = await getDocs(subColRef);

                let moodData = [];

                snapshot.forEach((doc) => {
                    const moodDataArray = doc.data().moodData;
                    moodData = moodData.concat(moodDataArray.map(({ date, mood }) => ({
                        date: new Date(date),
                        mood: parseInt(mood)
                    })));
                });

                // Sort mood data by date in ascending order
                moodData.sort((a, b) => a.date - b.date);

                const past7Days = getPast7Days();

                const updatedMoods = past7Days.map(day => {
                    const moodDataForDay = moodData.find(data => {
                        return data.date.toDateString() === day.toDateString();
                    });
                    return moodDataForDay ? moodDataForDay : { date: day, mood: null };
                });

                setMoods(updatedMoods);
                console.log('moodData:', updatedMoods);
            } catch (error) {
                console.error('Error fetching mood data:', error);
            }
        };

        fetchMoods();
    }, []);

    const getPast7Days = () => {
        const days = [];
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay()); // Start of current week (Sunday)
        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            days.push(date);
        }
        return days;
    };

    const getDayOfWeek = (date) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    };

    const getBarColor = (mood) => {
        switch (mood) {
            case 5:
                return '#1ACB8B';
            case 4:
                return '#B7E48A';
            case 3:
                return '#FFE459';
            case 2:
                return '#F78F55';
            case 1:
                return '#FD4F4F';
            default:
                return '#000000';
        }
    };

    return (
        <View>
            <BarChart
                height={200}
                width={270}
                barWidth={23}
                noOfSections={5}
                barBorderRadius={7}
                data={moods.map((item, index) => ({
                    label: getDayOfWeek(item.date),
                    value: item.mood,
                    frontColor: item.mood ? getBarColor(item.mood) : '#000000'
                }))}
                yAxisThickness={0}
                xAxisThickness={0}
                maxValue={5}
                spacing={15}
            />
        </View>
    )
}

export default WeeklyChart;