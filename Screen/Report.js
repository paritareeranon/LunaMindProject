import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import Barchart from './Barchart';

const Report = () => {

    const navigation = useNavigation();

    const goBackToHome = () => {
        console.log('BackToHome');
        navigation.navigate('Home');
    };
    const [selectedOption, setSelectedOption] = useState('Weekly');

    const handleOptionPress = (option) => {
        setSelectedOption(option);
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

                <TouchableOpacity style={[styles.weekly, selectedOption === 'Yearly' && styles.activeOption]}
                    onPress={() => handleOptionPress('Yearly')}>
                    <Text style={selectedOption === 'Yearly' && styles.activeText}> Yearly </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>My App</Text>
                    <Barchart />
                </View> */}
                <View style={styles.chart}></View>

                <Text style={styles.Emotions}> Emotions </Text>
                <View style={styles.moodrow}>
                    <Image source={require('../img/mood5.png')} style={styles.mood} />
                    <Image source={require('../img/mood4.png')} style={styles.mood} />
                    <Image source={require('../img/mood3.png')} style={styles.mood} />
                    <Image source={require('../img/mood2.png')} style={styles.mood} />
                    <Image source={require('../img/mood1.png')} style={styles.mood} />
                </View>
                <View style={styles.textrow}>
                    <Text style={styles.textmood}>5</Text>
                    <Text style={styles.textmood}>4</Text>
                    <Text style={styles.textmood}>3</Text>
                    <Text style={styles.textmood}>2</Text>
                    <Text style={styles.textmood}>1</Text>
                </View>
                <Text style={styles.mens}> Menstruation </Text>
                <View style={styles.row}>
                    <Text style={styles.marker}> * </Text>
                    <Text style={styles.menstext}> From 3 January to 5 January </Text>
                </View>

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
        // paddingHorizontal: 16,
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
        width: '24%',
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
    chart: {
        marginTop: 19,
        height: '100%',
        width: '80%',
        backgroundColor: 'white',
        // borderRadius: 15,
        // borderWidth: 1,
        borderColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    Emotions: {
        fontSize: 16,
        color: '#3F3C3C',
        fontWeight: 'bold',
        marginTop: '10%',
        paddingLeft: '10%',
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
        margin: '2%',
        marginTop: '7%',
    },
    textrow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textmood: {
        margin: 27,
        marginTop: -60,
        fontSize: 14,
        fontWeight: 'bold',
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
    }

});
export default Report;
