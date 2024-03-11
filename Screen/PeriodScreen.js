import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { Calendar } from 'react-native-calendars';
import { firestore } from "../firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';


const PeriodScreen = ({ route }) => {
    const navigation = useNavigation();
    // const route = useRoute(); // เรียกใช้ useRoute เพื่อดึง route.params
    const { selectedDate } = route.params || {}; // ดึงค่า selectedDate จาก route.params
    const [typicalPeriodLength, setTypicalPeriodLength] = useState('');
    const [typicalCycleLength, setTypicalCycleLength] = useState('');
    const [periodData, setPeriodData] = useState(null);

    useEffect(() => {
        const fetchPeriodData = async () => {
            try {
                const periodCollectionRef = collection(firestore, 'testPeriod');
                const snapshot = await getDocs(periodCollectionRef);

                const data = {};
                snapshot.forEach(doc => {
                    data[doc.id] = doc.data();
                });

                setPeriodData(data);
            } catch (error) {
                console.error('Error fetching period data:', error);
            }
        };

        fetchPeriodData();
    }, []);

    // const handleDayPress = (day) => {
    //     setSelectedDate(day.dateString);
    // };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Cycle Tracking
                </Text>
                <Button title="Go to CalendarMood" color="red" onPress={() => navigation.navigate('Home')} />

                <View style={styles.separator}></View>

                <Calendar
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: 'red' }
                    }}
                    maxDate={new Date().toISOString().split('T')[0]}
                    theme={{
                        arrowColor: '#FF80B5',
                    }}
                />
            </View>
            <View style={styles.bottomSeparator}></View>

            <Text style={styles.headerText}>
                Summary
            </Text>

            <Text style={styles.headerText}>
                Typical Period Length: {typicalPeriodLength}
            </Text>

            <Text>
                Typical Cycle Length: {typicalCycleLength}
            </Text>
            {periodData && Object.keys(periodData).map(key => (
                <View key={key}>
                    <Text style={styles.text}>Last Period: {periodData[key].LastPeriod}</Text>
                    <Text style={styles.text}>Period Usually Last: {periodData[key].PeriodUsuallyLast} day</Text>
                    <Text style={styles.text}>Typical Cycle: {periodData[key].TypicalCycle} day</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        // paddingTop: 50,
    },
    headerText: {
        fontSize: 18,
        paddingTop: '20%',
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    nextButton: {
        backgroundColor: '#FF80B5',
        width: '80%',
        paddingVertical: 15,
        borderRadius: 35,
        alignItems: 'center',
        marginTop: 60,
        alignSelf: 'center',
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Gill Sans',
    },
    cancelButtonText: {
        color: '#FF80B5',
        fontSize: 18,
        alignSelf: 'center',
        paddingTop: 20,
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#D9D9D9',
        marginVertical: '5%',
    },
    bottomSeparator: {
        position: 'absolute',
        bottom: '38%',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#D9D9D9',
    },
});

export default PeriodScreen;
