import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TypicalCycle = () => {
    const navigation = useNavigation();
    const [cycleLength, setCycleLength] = useState('');

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleNext = () => {
        if (cycleLength.length === 2) {
            navigation.navigate("PeriodUsuallyLast", { cycleLength });
            console.log(cycleLength);
        }
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        How long is your{'\n'} typical cycle
                    </Text>

                    <View style={styles.separator}></View>

                    <TextInput
                        style={[styles.input, { textAlign: 'center' }]}
                        placeholder="Enter cycle length"
                        keyboardType="numeric"
                        maxLength={2}
                        value={cycleLength}
                        onChangeText={text => {
                            if (text.length === 2) {
                                Keyboard.dismiss();
                            }
                            setCycleLength(text);
                        }}
                    />


                    <View style={styles.separator}></View>

                    <Text style={styles.text}>
                        Your cycle starts on the first day of your period and ends
                        {'\n'} the day before your next period. Estimating your cycle length{'\n'}helps enable period predictions.
                    </Text>

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
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        paddingTop: '10%',
    },
    headerText: {
        fontSize: 20,
        paddingTop: '20%',
        color: 'black',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    input: {
        height: '8%',
        backgroundColor: '#F2F2F2',
        borderRadius: 35,
        marginHorizontal: '10%',
        marginTop: '10%',
        marginBottom: '10%',
    },
    nextButton: {
        backgroundColor: '#FF80B5',
        width: '80%',
        paddingVertical: '4%',
        borderRadius: 35,
        alignItems: 'center',
        marginTop: '40%',
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
        paddingTop: '5%',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#D9D9D9',
        marginVertical: '8%',
    },
    text: {
        fontSize: 16,
        paddingTop: '5%',
        color: '#B7B7B7',
        fontFamily: 'Gill Sans',
        alignSelf: 'center',
        textAlign: 'center',
    },
});

export default TypicalCycle;
