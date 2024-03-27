import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { firestore } from "../firebaseConfig";
import { collection, getDocs, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PeriodScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { selectedDate } = route.params || {};
    const [typicalPeriodLength, setTypicalPeriodLength] = useState('');
    const [typicalCycleLength, setTypicalCycleLength] = useState('');
    const [periodData, setPeriodData] = useState(null);
    const [isPeriodToday, setIsPeriodToday] = useState(false);

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

                const today = new Date().toISOString().split('T')[0];
                const monthName = today.toLocaleString('default', { month: 'long' });
                const isTodayMarked = checkIfTodayMarked(data[monthName], today);
                setIsPeriodToday(isTodayMarked); // ตั้งค่าสถานะ isPeriodToday ตามผลลัพธ์ที่ได้จากการตรวจสอบ
            }
        } catch (error) {
            console.error('Error fetching period data:', error);
        }
    };

    useEffect(() => {
        fetchPeriodData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchPeriodData();
            checkIfTodayMarked();
        }, [])
    );

    const AprilData = periodData && periodData['April'];

    const markedDates = {};

    if (periodData) {
        Object.entries(periodData).map(([month, monthData]) => {
            const lastPeriodDate = monthData.LastPeriod;
            const ovulationDate = monthData.OvulationDate;

            markedDates[lastPeriodDate] = { selected: true, selectedColor: '#FF80B5' };
            markedDates[ovulationDate] = { selected: true, selectedColor: '#A8D7DA' };

            const startDate = new Date(lastPeriodDate);
            for (let i = 0; i <= 3; i++) {
                const nextDate = new Date(startDate);
                nextDate.setDate(startDate.getDate() + i);
                const formattedDate = nextDate.toISOString().split('T')[0];
                markedDates[formattedDate] = { selected: true, selectedColor: '#FFA1B0' };
            }
            const ovulationStartDate = new Date(ovulationDate);
            for (let i = 0; i < 3; i++) {
                const nextOvulationDate = new Date(ovulationStartDate);
                nextOvulationDate.setDate(ovulationStartDate.getDate() + i);
                const formattedOvulationDate = nextOvulationDate.toISOString().split('T')[0];
                markedDates[formattedOvulationDate] = { selected: true, selectedColor: '#A8D7DA' };
            }
        });
    }

    const checkIfTodayMarked = (data, currentDate) => {
        setIsPeriodToday(data?.LastPeriod); // ตรวจสอบว่ามีการเป็นประจำเดือนในวันนี้หรือไม่
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <Text style={{ color: 'transparent' }}>Add Period</Text>
                    <Text style={styles.headerText}>
                        Cycle Tracking
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddPeriod')}>
                        <Text style={styles.button}>Add Period</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.separator}></View>

                <Calendar
                    markedDates={markedDates}
                    maxDate={new Date().toISOString().split('T')[0]}
                    theme={{
                        arrowColor: '#FF80B5',
                    }}
                />
            </View>

            <View>
                {isPeriodToday && <Text>Have menstruation today</Text>}
            </View>

            <View style={styles.bottomSeparator}></View>

            <View style={styles.circleContainer}>
                <View style={styles.circle11}></View>
                <Text style={styles.circleLabel}>Menstrual period</Text>

                <View style={styles.circle22}></View>
                <Text style={styles.circleLabel}>Ovulation</Text>
            </View>

            <View style={styles.summaryContainer1}>
                <View style={styles.summaryContainer}>
                    <Text style={styles.textSummary}>
                        Summary
                    </Text>

                    <Text style={styles.textTypical}>
                        Typical Period Length
                    </Text>
                    <Text style={styles.textAPI}>{AprilData?.PeriodUsuallyLast} day</Text>

                    <View style={styles.summarySeparator}></View>

                    <Text style={styles.textTypical}>
                        Typical Cycle Length
                    </Text>
                    <Text style={styles.textAPI}>{AprilData?.TypicalCycle} day</Text>
                </View>
            </View>
        </View>
    );
};

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
    summaryContainer1: {
        position: 'absolute',
        bottom: '0%',
        left: 0,
        right: 0,
        height: '30%',
        backgroundColor: '#F5F5F5',
    },
    summaryContainer: {
        position: 'absolute',
        bottom: '5%',
        left: '8%',
        right: '8%',
        height: '90%',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    headerText: {
        fontSize: 18,
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
    summarySeparator: {
        height: 1,
        width: '90%',
        backgroundColor: '#D9D9D9',
        marginVertical: '3%',
        alignSelf: 'center',
    },
    textAPI: {
        fontSize: 18,
        paddingTop: '2%',
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    textTypical: {
        fontSize: 15,
        paddingTop: '3%',
        color: '#252121',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    textSummary: {
        fontSize: 18,
        paddingTop: '7%',
        color: '#5D6896',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: '5%',
    },
    button: {
        fontSize: 16,
        fontFamily: 'Gill Sans',
        color: '#FF80B5',
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        position: 'absolute',
        bottom: '25%',
        left: 50,
        right: 50,
        height: 60,
    },
    circleLabel: {
        fontSize: 14,
        fontFamily: 'Gill Sans',
    },
    circle2: {
        flexDirection: 'row',
    },
    circle11: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#FFA1B0',
        marginRight: 10,
    },
    circle22: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#A8D7DA',
        marginHorizontal: 10,
    },
});

export default PeriodScreen;
