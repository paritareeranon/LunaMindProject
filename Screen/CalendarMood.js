import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { firestore } from "../firebaseConfig";
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import { collection, addDoc, setDoc, getDocs, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarMood = () => {
    const [moodData, setMoodData] = useState({});
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);

    const fetchMoodData = async () => {
        try {
            const email = await AsyncStorage.getItem("useraccount");
            const colRef = collection(firestore, 'UserInfo');
            const docRef = doc(colRef, email);
            const subColRef = collection(docRef, "mood");
            const snapshot = await getDocs(subColRef);

            const moodDataFromFirebase = {};
            snapshot.forEach((doc) => {
                const month = doc.id;
                const moodDataArray = doc.data().moodData;
                moodDataArray.forEach(({ date, mood }) => {
                    moodDataFromFirebase[date] = { selected: true, selectedColor: getColorByMood(mood) };
                });
            });
            setMoodData(moodDataFromFirebase);
        } catch (error) {
            console.error('Error fetching mood data:', error);
        }
    };

    useEffect(() => {
        fetchMoodData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchMoodData();
        }, [])
    );

    const getColorByMood = (mood) => {
        switch (mood) {
            case '5':
                return '#1ACB8B';
            case '4':
                return '#B7E48A';
            case '3':
                return '#FFE459';
            case '2':
                return '#F78F55';
            case '1':
                return '#FD4F4F';
            default:
                return 'transparent';
        }
    };

    const handleDayPress = (day) => {
        const today = new Date();
        const selected = new Date(day.dateString);

        if (selected <= today) {
            console.log(today)
            setSelectedDate(day.dateString);
            navigation.navigate("Mood", { selectedDate: day.dateString });
        } else {
            console.log("Cannot select future dates");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("NavigationBar")}>
                    <AntDesign name="left" size={22} color="transparent" />
                </TouchableOpacity>
                <Text style={styles.headerText}> Calendar </Text>
                <AntDesign name="left" size={22} color="transparent" />
            </View>

            <View style={styles.separator}></View>

            <View style={styles.calendar}>
                <Calendar
                    onDayPress={handleDayPress}
                    markedDates={moodData}
                    maxDate={new Date().toISOString().split('T')[0]}
                    theme={{
                        arrowColor: '#FF80B5',
                    }}
                />
            </View>
            <View style={styles.moodContainer1}>
                <Text style={styles.Emotions}> Emotions </Text>
                <View style={styles.moodrow}>
                    <Image source={require('../img/5.png')} style={styles.mood} />
                    <Image source={require('../img/4.png')} style={styles.mood} />
                    <Image source={require('../img/3.png')} style={styles.mood} />
                    <Image source={require('../img/2.png')} style={styles.mood} />
                    <Image source={require('../img/1.png')} style={styles.mood} />
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '20%',
        backgroundColor: 'white',
    },
    headerContainer: {
        paddingBottom: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    calendar: {
        fontSize: 17,
        color: '#3F3C3C',
        fontFamily: 'Gill Sans',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 19,
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#D9D9D9',
        marginBottom: '5%',
    },
    moodContainer1: {
        position: 'absolute',
        bottom: '12%',
        left: 0,
        right: 0,
        height: '30%',
    },
    Emotions: {
        fontSize: 16,
        color: '#3F3C3C',
        fontWeight: 'bold',
        marginTop: '20%',
        paddingLeft: '10%',
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
        margin: '2%',
        marginTop: '7%',
    },
});

export default CalendarMood;
