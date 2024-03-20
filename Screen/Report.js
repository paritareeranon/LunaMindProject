import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressBar } from 'react-native-paper';
import { BarChart, LineChart } from 'react-native-gifted-charts';

const Report = () => {

    const navigation = useNavigation();

    const goBackToHome = () => {
        console.log('BackToHome');
        navigation.navigate('NavigationBar');
    };
    const [selectedOption, setSelectedOption] = useState('Weekly');

    const handleOptionPress = (option) => {
        setSelectedOption(option);
    };
    const barData = [
        { value: 4, label: 'S', frontColor: '#B7E48A' },
        { value: 1, label: 'M', frontColor: '#FD4F4F' },
        { value: 5, label: 'T', frontColor: '#1ACB8B' },
        { value: 3, label: 'W', frontColor: '#FFE459' },
        { value: 5, label: 'T', frontColor: '#1ACB8B' },
        { value: 1, label: 'F', frontColor: '#FD4F4F' },
        { value: 2, label: 'S', frontColor: '#F78F55' },
    ];

    const frontColor = (value) => {
        switch (value) {
            case 5:
                return '#1ACB8B';
            case 4:
                return '#B7E48A';
            case 3:
                return '#FFE459';
            case 2:
                return '#F78F55';
            case 1:
                return '#FD4F4F';
            default:
                return '#000000';
        }
    };
    const linedata = [
        { value: 4, label: '1/3' },
        { value: 1, label: '2/3' },
        { value: 5, label: '3/3' },
        { value: 3, label: '4/3' },
        { value: 5, label: '5/3' },
        { value: 1, label: '6/3' },
        { value: 2, label: '7/3' },
        { value: 4, label: '8/3' },
        { value: 1, label: '9/3' },
        { value: 5, label: '10/3' },
        { value: 3, label: '11/3' },
        { value: 5, label: '12/3' },
        { value: 1, label: '13/3' },
        { value: 2, label: '14/3' },
    ];
    const stackData = [
        {
            stacks: [
                { value: 10, color: '#1ACB8B' },
                { value: 15, color: '#B7E48A', marginBottom: 2 },
                { value: 10, color: '#FD4F4F', marginBottom: 2 },
                { value: 14, color: '#1ACB8B', marginBottom: 2 },
                { value: 20, color: '#F78F55' },
            ],
            label: 'Jan',
        },
        {
            stacks: [
                { value: 10, color: '#4ABFF4' },
                { value: 11, color: 'orange', marginBottom: 2 },
                { value: 15, color: '#28B2B3', marginBottom: 2 },
            ],
            label: 'Feb',
        },
        {
            stacks: [
                { value: 14, color: 'orange' },
                { value: 18, color: '#4ABFF4', marginBottom: 2 },
            ],
            label: 'Mar',
        },
        {
            stacks: [
                { value: 7, color: '#4ABFF4' },
                { value: 11, color: 'orange', marginBottom: 2 },
                { value: 10, color: '#28B2B3', marginBottom: 2 },
            ],
            label: 'Apr',
        },
        {
            stacks: [
                { value: 10, color: 'orange' },
                { value: 20, color: '#4ABFF4', marginBottom: 2 },
            ],
            label: 'May',
        },
        {
            stacks: [
                { value: 10, color: '#4ABFF4' },
                { value: 11, color: 'orange', marginBottom: 2 },
                { value: 15, color: '#28B2B3', marginBottom: 2 },
            ],
            label: 'Jun',
        },
        {
            stacks: [
                { value: 14, color: 'orange' },
                { value: 18, color: '#4ABFF4', marginBottom: 2 },
            ],
            label: 'Jul',
        },
        {
            stacks: [
                { value: 7, color: '#4ABFF4' },
                { value: 11, color: 'orange', marginBottom: 2 },
                { value: 10, color: '#28B2B3', marginBottom: 2 },
            ],
            label: 'Aug',
        },
        {
            stacks: [
                { value: 10, color: 'orange' },
                { value: 20, color: '#4ABFF4', marginBottom: 2 },
            ],
            label: 'Sab',
        },
        {
            stacks: [
                { value: 10, color: '#4ABFF4' },
                { value: 11, color: 'orange', marginBottom: 2 },
                { value: 15, color: '#28B2B3', marginBottom: 2 },
            ],
            label: 'Oct',
        },
        {
            stacks: [
                { value: 14, color: 'orange' },
                { value: 18, color: '#4ABFF4', marginBottom: 2 },
            ],
            label: 'Nov',
        },
        {
            stacks: [
                { value: 7, color: '#4ABFF4' },
                { value: 11, color: 'orange', marginBottom: 2 },
                { value: 10, color: '#28B2B3', marginBottom: 2 },
            ],
            label: 'Dec',
        },
    ];
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
                {selectedOption === 'Weekly' && (
                    <View>
                        <View style={styles.card}>
                            <BarChart
                                barWidth={22}
                                noOfSections={5}
                                barBorderRadius={7}
                                frontColor={frontColor}
                                data={barData}
                                yAxisThickness={0}
                                xAxisThickness={0}
                                maxValue={5}
                                spacing={15}
                            />
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
                {selectedOption === 'Monthly' && (
                    <View>
                        <View style={styles.card}>
                            <Text style={styles.Emotions}> Mood Bar </Text>
                            <View style={styles.moodrow}>
                                <Image source={require('../img/5.png')} style={styles.mood} />
                                <Image source={require('../img/4.png')} style={styles.mood} />
                                <Image source={require('../img/3.png')} style={styles.mood} />
                                <Image source={require('../img/2.png')} style={styles.mood} />
                                <Image source={require('../img/1.png')} style={styles.mood} />
                            </View>
                            <View style={styles.textrow}>
                                <Text style={styles.textmood}>20%</Text>
                                <Text style={styles.textmood}>20%</Text>
                                <Text style={styles.textmood}>20%</Text>
                                <Text style={styles.textmood}>20%</Text>
                                <Text style={styles.textmood}>20%</Text>
                            </View>
                            <ProgressBar
                                style={styles.progress}
                                progress={0.2}
                                color="#1ACB8B"
                            />
                        </View>
                        <Text style={styles.mens}> Menstruation </Text>
                        <View style={styles.row}>
                            <Text style={styles.marker}> * </Text>
                            <Text style={styles.menstext}> From 3 January to 5 January </Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.Emotions}> Mood Flow </Text>
                            <LineChart
                                height={200}
                                width={250}
                                data={linedata}
                                color={'#D6D6D6'}
                                thickness={4}
                                noOfSections={5}
                                dataPointsColor={'#3F3C3C'}
                                maxValue={5}
                                yAxisThickness={0}
                                xAxisThickness={0}
                            />
                        </View>
                       
                    </View>
                )}
                {selectedOption === 'Yearly' && (
                    <View style={styles.cardYearly}>
                        <Text style={styles.Emotions}> Mood Flow </Text>
                        <BarChart
                            width={250}
                            height={400}
                            rotateLabel
                            barWidth={18}
                            spacing={25}
                            noOfSections={4}
                            barBorderRadius={6}
                            stackData={stackData}
                            yAxisThickness={0}
                                xAxisThickness={0}
                        />
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
        height: '50%',
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
        // margin: '2%',
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
        marginTop: 20,
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

});
export default Report;
