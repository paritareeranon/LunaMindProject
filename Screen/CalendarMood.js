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
        const email = await AsyncStorage.getItem("useraccount");
        const moodCollectionRef = collection(firestore, 'UserInfo');
        const docRef = doc(moodCollectionRef, email);
        const subColRef = collection(docRef, "mood");
        const snapshot = await getDocs(subColRef);
        const moodDataFromFirebase = {};
        snapshot.forEach((doc) => {
            const { date, mood } = doc.data();
            moodDataFromFirebase[date] = { selected: true, selectedColor: getColorByMood(mood) };
        });
        setMoodData(moodDataFromFirebase);
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
                return '#00CE15';
            case '4':
                return '#8AF700';
            case '3':
                return '#FBF220';
            case '2':
                return '#FF9F00';
            case '1':
                return '#FE0000';
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

            <View style={styles.calendar}>
                <Calendar
                    onDayPress={handleDayPress}
                    markedDates={moodData}
                    maxDate={new Date().toISOString().split('T')[0]}
                />
            </View>
            <Text style={styles.Emotions}> Emotions </Text>
                <View style={styles.moodrow}>
                    <Image source={require('../img/mood5.png')} style={styles.mood} />
                    <Image source={require('../img/mood4.png')} style={styles.mood} />
                    <Image source={require('../img/mood3.png')} style={styles.mood} />
                    <Image source={require('../img/mood2.png')} style={styles.mood} />
                    <Image source={require('../img/mood1.png')} style={styles.mood} />
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '18%',
        padding: 16,
        backgroundColor: 'white',
        // justifyContent: 'center',
    },
    headerContainer: {
        paddingBottom: '10%',
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
        fontSize: 18,
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
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
