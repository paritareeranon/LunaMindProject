import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { firestore } from "../firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

const CalendarMood = () => {
    const [moodData, setMoodData] = useState({});
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);

    const fetchMoodData = async () => {
        const moodCollectionRef = collection(firestore, 'testMood');
        const snapshot = await getDocs(moodCollectionRef);
        const moodDataFromFirebase = {};
        snapshot.forEach((doc) => {
            const { date, mood } = doc.data();
            moodDataFromFirebase[date] = { selected: true, marked: true, selectedColor: getColorByMood(mood) };
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
                return 'gray';
        }
    };

    const handleDayPress = (day) => {
        const today = new Date();
        const selected = new Date(day.dateString);
        console.log(today)

        if (selected <= today) { 
            setSelectedDate(day.dateString);
            navigation.navigate("Mood", { selectedDate: day.dateString });
        } else {
            console.log("Cannot select future dates");
        }
    };

    return (
        <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("CalendarMood")}>
                        <AntDesign name="left" size={22} color="#3F3C3C" />
                    </TouchableOpacity>
                    <Text style={styles.calendar}>
                    {selectedDate ? moment(selectedDate).format('dddd, MMMM D') : ''}
                    </Text>
                    <AntDesign name="left" size={22} color="transparent" />
                </View>
            
        <View style={styles.container}>
            <Calendar
                onDayPress={handleDayPress}
                markedDates={moodData}
            />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        padding: 16,
        paddingBottom: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    calendar: {
        fontSize: 17,
        padding: 4,
        paddingTop: 5,
        color: '#3F3C3C',
        fontFamily: 'Gill Sans',
        justifyContent: 'center',
    },
});

export default CalendarMood;
