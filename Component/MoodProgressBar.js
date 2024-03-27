import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firestore } from "../firebaseConfig";
import { collection, getDocs, doc } from 'firebase/firestore';

const MoodProgressBar = ({ selectedMonth }) => {
    const [moods, setMoods] = useState([]);

    const maxMoodValue = 5;

    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const email = await AsyncStorage.getItem("useraccount");
                const colRef = collection(firestore, 'UserInfo');
                const docRef = doc(colRef, email);
                const subColRef = collection(docRef, "mood");
                const snapshot = await getDocs(subColRef);

                const moodData = [];

                snapshot.forEach((doc) => {
                    const month = doc.id;
                    const moodDataArray = doc.data().moodData;
                    moodDataArray.forEach(({ date, mood }) => {
                        moodData.push({ date: date, mood: parseInt(mood) });
                    });
                });

                setMoods(moodData);
                console.log('moodDatapercen:', moodData);
            } catch (error) {
                console.error('Error fetching mood data:', error);
            }
        };

        fetchMoods();
    }, []);

    
    const calculateMoodPercentages = () => {
        if (moods.length === 0) {
            return [0, 0, 0, 0, 0];
        }

        const moodCount = [0, 0, 0, 0, 0];
        moods.forEach(({ mood }) => {
            moodCount[maxMoodValue - mood]++;
        });
    
        const moodPercentages = moodCount.map(count => ((count / moods.length) * 100).toFixed(0));
    
        return moodPercentages;
    };
    const moodPercentages = calculateMoodPercentages();

    return (
        <View style={styles.container}>
            <View style={styles.moodrow}>
                <Image source={require('../img/5.png')} style={styles.mood} />
                <Image source={require('../img/4.png')} style={styles.mood} />
                <Image source={require('../img/3.png')} style={styles.mood} />
                <Image source={require('../img/2.png')} style={styles.mood} />
                <Image source={require('../img/1.png')} style={styles.mood} />
            </View>
            <View style={styles.textrow}>
                {moodPercentages.map((percentage, index) => (
                    <Text key={index} style={styles.textmood}>{percentage}%</Text>
                ))}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moodrow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mood: {
        width: 45,
        height: 45,
        marginTop: '7%',
        marginHorizontal: 7,
    },
    textrow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textmood: {
        fontSize: 15,
        marginHorizontal: 12,
        borderRadius: 5,
        marginLeft: 18,
    },
});

export default MoodProgressBar;