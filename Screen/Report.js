import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MonthLyChart from '../Component/MonthLyChart';
import WeeklyChart from '../Component/WeeklyChart';
import MoodProgressBar from '../Component/MoodProgressBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, getDocs, doc } from 'firebase/firestore';
import { firestore } from "../firebaseConfig";

const Report = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('Weekly');
    const [months, setMonths] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(null); // State to hold the selected month
    const [isPeriodToday, setIsPeriodToday] = useState(false);

    useEffect(() => {
        // Generate month options
        const currentMonthIndex = new Date().getMonth();
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const newMonths = monthNames.map((month, index) => ({
            name: month,
            isActive: index === currentMonthIndex
        }));
        setMonths(newMonths);
    }, []);

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

                const currentDate = new Date();
                const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
                const currentMonthData = data[currentMonth];
                const lastPeriod = currentMonthData?.LastPeriod;
                setIsPeriodToday(lastPeriod);
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
        }, [])
    );

    const showPeriodRange = () => {
        if (isPeriodToday) {
            const startDate = new Date(isPeriodToday);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 3);
    
            const startDateString = startDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
            const endDateString = endDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    
            return `${startDateString} - ${endDateString}`;
        }
        return '';
    };

    // Back Home
    const goBackToHome = () => {
        console.log('BackToHome');
        navigation.navigate('NavigationBar');
    };
    // Select Option
    const handleOptionPress = (option) => {
        setSelectedOption(option);
    };

    const handleMonthPress = (month) => {
        setSelectedOption('Monthly');

        setSelectedMonth(month.name)
        // Update selected month
        const updatedMonths = months.map(m => ({
            ...m,
            isActive: m.name === month.name
        }));
        setMonths(updatedMonths);
        // Handle data display for the selected month
        console.log("Selected month:", month.name);
    };

    const renderMonthlyContent = (month) => {
        if (monthHasMoodData(month)) {
            return (
                <View>
                    <View style={styles.card}>
                        <Text style={styles.Emotions}> Mood Bar </Text>
                        <MoodProgressBar selectedMonth={selectedMonth} />
                    </View>
                    <Text style={styles.mens}> Menstruation </Text>
                    <View style={styles.row}>
                        <Text style={styles.marker}> * </Text>
                        <Text style={styles.menstext}> From {showPeriodRange()} </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.Emotions}> Mood Flow </Text>
                        <MonthLyChart />
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>No mood data available for this month.</Text>
                </View>
            );
        }
    };

    const monthHasMoodData = (month) => {
        return true;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={goBackToHome}>
                    <Icon name="angle-left" size={35}></Icon>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}> Report </Text>

            <View style={styles.row}>
                <TouchableOpacity style={[styles.weekly, selectedOption === 'Weekly' && styles.activeOption]}
                    onPress={() => handleOptionPress('Weekly')}>
                    <Text style={selectedOption === 'Weekly' && styles.activeText}> Weekly </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.weekly, selectedOption === 'Monthly' && styles.activeOption]}
                    onPress={() => handleOptionPress('Monthly')}>
                    <Text style={selectedOption === 'Monthly' && styles.activeText}> Monthly </Text>

                </TouchableOpacity>
            </View>
            {selectedOption === 'Weekly' && (
                <View>
                    <View style={styles.card}>
                        <WeeklyChart />
                    </View>
                    <Text style={styles.moodlevel}> Mood Level </Text>
                    <View style={styles.moodrow}>
                        <Image source={require('../img/5.png')} style={styles.mood} />
                        <Image source={require('../img/4.png')} style={styles.mood} />
                        <Image source={require('../img/3.png')} style={styles.mood} />
                        <Image source={require('../img/2.png')} style={styles.mood} />
                        <Image source={require('../img/1.png')} style={styles.mood} />
                    </View>
                    <View style={styles.textrow}>
                        <Text style={styles.textLevel}>5</Text>
                        <Text style={styles.textLevel}>4</Text>
                        <Text style={styles.textLevel}>3</Text>
                        <Text style={styles.textLevel}>2</Text>
                        <Text style={styles.textLevel}>1</Text>
                    </View>
                </View>
            )}
            <ScrollView>
                {selectedOption === 'Monthly' && (
                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.monthrow}>
                            {months.map((month, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.month, month.isActive && styles.activeMonth]}
                                    onPress={() => handleMonthPress(month)}>
                                    <Text style={month.isActive && styles.activeText}>{month.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        {months.map((month, index) => (
                            month.isActive &&
                            <View key={index}>
                                {renderMonthlyContent(month)}
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView >
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'White',
        height: '12%',
    },
    title: {
        fontSize: 25,
        color: '#3F3C3C',
        fontWeight: 'bold',
        marginTop: '10%',
        paddingLeft: '9%',
    },
    button: {
        paddingLeft: '7%',
        marginTop: '15%',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    weekly: {
        marginTop: 19,
        height: 40,
        width: '38%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
    },
    activeOption: {
        backgroundColor: '#3F3C3C',
    },
    activeText: {
        color: 'white',
    },
    Emotions: {
        fontSize: 16,
        color: '#3F3C3C',
        fontWeight: 'bold',
        paddingLeft: 12,
        marginBottom: 20,
    },
    moodlevel: {
        fontSize: 16,
        color: '#3F3C3C',
        fontWeight: 'bold',
        paddingLeft: 30,
        marginTop: 60,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        marginHorizontal: 8,
    },
    textrow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textmood: {
        fontSize: 14,
        marginHorizontal: 15,
        borderRadius: 5,
    },
    textLevel: {
        fontSize: 14,
        marginHorizontal: 27,
        borderRadius: 5,
    },
    progress: {
        width: '90%',
        height: 40,
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 15,
    },
    card: {
        borderRadius: 25,
        backgroundColor: '#F2F2F2',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        padding: 20,
    },
    cardYearly: {
        borderRadius: 25,
        backgroundColor: '#F2F2F2',
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        padding: 20,
    },
    mens: {
        fontSize: 16,
        color: '#3F3C3C',
        fontWeight: 'bold',
        marginTop: '10%',
        paddingLeft: '10%',
    },
    menstext: {
        fontSize: 16,
        color: '#3F3C3C',
        fontWeight: 'normal',
        marginTop: '6%',

    },
    marker: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginTop: '4%',
        paddingLeft: '13%',
    },
    month: {
        marginTop: 30,
        height: 30,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthrow: {
        flexDirection: 'row',
    },
    activeMonth: {
        backgroundColor: '#3F3C3C',
    }

});
export default Report;
