import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const TypicalCycle = () => {

    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState('');

    const handleDayPress = (day) => {
        const today = new Date();
        const selected = new Date(day.dateString);

        if (selected <= today) {
            setSelectedDate(day.dateString);
        } else {
            console.log("Cannot select future dates");
        }
    };

    const handleNext = () => {
        if (selectedDate) {
            navigation.navigate("TypicalCycle", { selectedDate });
            console.log(selectedDate);
        } else {
            console.log("Please select a date first");
        }
    };



    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    How long is your{'\n'} typical cycle
                </Text>

                <View style={styles.separator}></View>

                <View style={styles.calendar}>
                    <Calendar
                        onDayPress={handleDayPress}
                        markedDates={{
                            [selectedDate]: { selected: true, selectedColor: '#FF80B5' }
                        }}
                        maxDate={new Date().toISOString().split('T')[0]}
                        theme={{
                            arrowColor: '#FF80B5',
                        }}
                    />
                </View>

                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("LastPeriod")}>
                    <Text style={styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
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
        paddingTop: 50,
    },
    headerText: {
        fontSize: 20,
        paddingTop: 60,
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    calendar: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    nextButton: {
        backgroundColor: '#FF80B5',
        width: '80%',
        paddingHorizontal: 20,
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
        marginVertical: 30,
    },
})
export default TypicalCycle;