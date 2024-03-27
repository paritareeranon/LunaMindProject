import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar, CalendarList } from 'react-native-calendars';
import { firestore } from "../firebaseConfig";
import { collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddPeriod = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState();
    const [PeriodUsuallyLast, setTypicalPeriodLength] = useState('');
    const [TypicalCycle, setTypicalCycleLength] = useState('');
    const [periodData, setPeriodData] = useState(null);
    const [markedDates, setMarkedDates] = useState({});

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

    const AprilData = periodData && periodData['April'];

    useEffect(() => {
        if (selectedDate) {
            setMarkedDates({
                [selectedDate]: { selected: true, selectedColor: '#FFA1B0' }
            });
        }
    }, [selectedDate]);

    const handleDateSelect = (date) => {
        const currentDate = new Date();
        const selectedDateObject = new Date(date.dateString);
        if (selectedDateObject > currentDate) {
            return;
        }
        setSelectedDate(date.dateString);
    };
    if (periodData) {
        Object.entries(periodData).map(([month, monthData]) => {
            const lastPeriodDate = monthData.LastPeriod;

            markedDates[lastPeriodDate] = { selected: true, selectedColor: '#FF80B5' };

            // เพิ่มการ mark วันที่เพิ่มเติมอีก 5 วันต่อจาก lastPeriodDate
            const startDate = new Date(lastPeriodDate);
            for (let i = 0; i <= 3; i++) {
                const nextDate = new Date(startDate);
                nextDate.setDate(startDate.getDate() + i);
                const formattedDate = nextDate.toISOString().split('T')[0];
                markedDates[formattedDate] = { selected: true, selectedColor: '#FFA1B0' };
            }
        });
    }

    const handleDoneButtonPress = () => {
        console.log('periodData?.TypicalCycl', AprilData?.TypicalCycle);
        if (selectedDate && AprilData?.TypicalCycle && AprilData.PeriodUsuallyLast) {
            const cycleLength = AprilData?.TypicalCycle;
            const periodUsuallyLast = AprilData.PeriodUsuallyLast;

            saveDataToFirestore(selectedDate, cycleLength, periodUsuallyLast);
        } else {
            console.warn('Please select date and provide cycle length.');
        }
    };

    const saveDataToFirestore = async (selectedDate, cycleLength, periodUsuallyLast) => {
        try {
            const currentDate = new Date(selectedDate);
            const ovulationDate = new Date(currentDate);
            ovulationDate.setDate(ovulationDate.getDate() + (cycleLength - 14));

            const monthName = currentDate.toLocaleString('default', { month: 'long' });

            const formattedStartDate = currentDate.toISOString().split('T')[0];
            const formattedOvulationDate = ovulationDate.toISOString().split('T')[0];

            const email = await AsyncStorage.getItem("useraccount");
            const colRef = collection(firestore, 'UserInfo');
            const docRef = doc(colRef, email);
            const subColRef = collection(docRef, "period");
            const subDocRef = doc(subColRef, monthName);

            await setDoc(subDocRef, {
                LastPeriod: formattedStartDate,
                PeriodUsuallyLast: periodUsuallyLast,
                TypicalCycle: cycleLength,
                OvulationDate: formattedOvulationDate
            });

            console.log(`${monthName} cycle information added successfully!`);
            calculateNextCycleDate(currentDate, cycleLength, ovulationDate, periodUsuallyLast)
        } catch (error) {
            console.error('Error adding documents: ', error);
        }
    };

    const calculateNextCycleDate = async (selectedDate, cycleLength, ovulationDate, periodUsuallyLast) => {
        try {

            const currentDate = new Date(selectedDate);

            const nextCycleDate = new Date(currentDate);
            console.log(nextCycleDate);
            console.log(cycleLength);

            for (let i = 0; i < 11; i++) {
                
                nextCycleDate.setDate(nextCycleDate.getDate() + parseInt(cycleLength, 10));
                console.log(nextCycleDate);

                const ovulationDate = new Date(nextCycleDate);
                ovulationDate.setDate(ovulationDate.getDate() - 14);
                console.log("ovulationDate: ", ovulationDate);

                const monthName = nextCycleDate.toLocaleString('default', { month: 'long' });

                const formattedStartDate = nextCycleDate.toISOString().split('T')[0];
                const formattedOvulationDate = ovulationDate.toISOString().split('T')[0];

                const email = await AsyncStorage.getItem("useraccount");
                const colRef = collection(firestore, 'UserInfo');
                const docRef = doc(colRef, email);
                const subColRef = collection(docRef, "period");
                const subDocRef = doc(subColRef, monthName);

                await setDoc(subDocRef, {
                    LastPeriod: formattedStartDate,
                    PeriodUsuallyLast: periodUsuallyLast,
                    TypicalCycle: cycleLength,
                    OvulationDate: formattedOvulationDate
                });

                navigation.navigate('NavigationBar');
            }


        } catch (error) {
            console.error('Error calculating next cycle date: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavigationBar')}>
                        <Text style={styles.button}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Select Period Days
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={handleDoneButtonPress}>
                        <Text style={styles.button}>Done</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.separator}></View>

                <CalendarList
                    markedDates={markedDates}
                    onDayPress={handleDateSelect}
                    maxDate={new Date().toISOString().split('T')[0]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: '20%',
    },
    summaryContainer: {
        position: 'absolute',
        bottom: '25%',
        left: 50,
        right: 50,
        height: 50,
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    calendarContainer: {
        width: '90%', // ปรับขนาดความกว้างให้เหมาะสม
        borderWidth: 1, // เพิ่มเส้นขอบ
        borderColor: '#D9D9D9', // สีขอบ
        borderRadius: 10, // รูปร่างขอบ
        overflow: 'hidden', // ตัดส่วนที่เกิน
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
        bottom: '40%',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#D9D9D9',
    },
    text: {
        fontSize: 16,
        paddingTop: '5%',
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    textTypical: {
        fontSize: 16,
        paddingTop: '10%',
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    button: {
        fontSize: 16,
        fontFamily: 'Gill Sans',
        color: '#FF80B5',
    },
});

export default AddPeriod;
