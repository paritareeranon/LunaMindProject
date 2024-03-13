import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { firestore } from "../firebaseConfig";
import { collection, getDocs, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PeriodScreen = ({ route }) => {
    const navigation = useNavigation();
    const { selectedDate } = route.params || {};
    const [typicalPeriodLength, setTypicalPeriodLength] = useState('');
    const [typicalCycleLength, setTypicalCycleLength] = useState('');
    const [periodData, setPeriodData] = useState(null);

    useEffect(() => {
        const fetchPeriodData = async () => {
            try {
                const email = await AsyncStorage.getItem("useraccount");
                if (email) {
                    const colRef = collection(firestore, 'UserInfo');
                    const docRef = doc(colRef, email);
                    const subColRef = collection(docRef, "period");
                    const snapshot = await getDocs(subColRef);

                    const data = {};
                    snapshot.forEach(doc => {
                        data[doc.id] = doc.data();
                    });
                    setPeriodData(data);
                }
            } catch (error) {
                console.error('Error fetching period data:', error);
            }
        };

        fetchPeriodData();
    }, []);


    const februaryData = periodData && periodData['February'];

    const markedDates = {};

    Object.entries(periodData).map(([month, monthData]) => {
        const lastPeriodDate = monthData.LastPeriod;
        const ovulationDate = monthData.OvulationDate;
    
        markedDates[lastPeriodDate] = { selected: true, selectedColor: '#FF80B5' };
        markedDates[ovulationDate] = { selected: true, selectedColor: '#A8D7DA' };
    });

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Cycle Tracking
                </Text>
                <Button title="Go to CalendarMood" color="red" onPress={() => navigation.navigate('Home')} />

                <View style={styles.separator}></View>

                <Calendar
                    markedDates={markedDates}
                    maxDate={new Date().toISOString().split('T')[0]}
                    theme={{
                        arrowColor: '#FF80B5',
                    }}
                />
            </View>

            <View style={styles.bottomSeparator}></View>
            <View>
                <Text>
                    Summary
                </Text>

                <Text>
                    Typical Period Length: {typicalPeriodLength}
                </Text>
                <Text style={styles.text}>{februaryData?.PeriodUsuallyLast} day</Text>
                <Text>
                    Typical Cycle Length: {typicalCycleLength}
                </Text>
                <Text style={styles.text}>{februaryData?.TypicalCycle} day</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {},
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
