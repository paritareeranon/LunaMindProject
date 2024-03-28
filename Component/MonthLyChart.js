import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { firestore } from "../firebaseConfig";
import { collection, getDocs, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MonthLyChart = () => {
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
                    const month = doc.id;
                    const moodDataArray = doc.data().moodData;
                    moodData = moodData.concat(moodDataArray.map(({ date, mood }) => ({
                        date: new Date(date),
                        mood: parseInt(mood)
                    })));
                });

                
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth = currentDate.getMonth();
                const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

                
                const allDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

                
                const formattedMonth = allDays.map(day => {
                    const formattedDay = day < 10 ? `0${day}` : `${day}`;
                    return {
                        date: `${formattedDay}/${currentMonth + 1}`,
                        mood: 0
                    };
                });

                moodData.forEach(({ date, mood }) => {
                    const dayOfMonth = new Date(date).getDate();
                    formattedMonth[dayOfMonth - 1].mood = mood;
                });

                setMoods(formattedMonth);
                console.log('moodData:', formattedMonth);
                
            } catch (error) {
                console.error('Error fetching mood data:', error);
                
            }
        };

        fetchMoods();
    }, []);
    return (
        <View>
            <LineChart
                height={200}
                width={250}
                data={moods.map(item => ({ label: item.date, value: item.mood }))}
                color={'#D6D6D6'}
                thickness={4}
                noOfSections={5}
                dataPointsColor={'#3F3C3C'}
                maxValue={5}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
    )
}

export default MonthLyChart