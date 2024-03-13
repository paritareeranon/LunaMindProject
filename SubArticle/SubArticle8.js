import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const SubArticle8 = () => {
    const navigation = useNavigation();

    const Article = () => {
        console.log('Article');
        navigation.navigate('Article');
    };
    const Credit = () => {
        const url = 'https://www.manarom.com/blog/article_thai.html';
        Linking.openURL(url);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={Article}>
                    <Icon name="angle-left" size={35}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}> Article </Text>
            </View>
            <Image source={require('../img/article8.png')} style={styles.image} />
            <ScrollView style={styles.card}>
                <Text style={styles.Textheader}>การเยียวยาจิตใจตัวเองเมื่อเป็นโรคซึมเศร้า</Text>
                <Text style={styles.TextContent}>โรคซึมเศร้า เป็นโรคที่ทำให้ผู้ป่วยรู้สึกว่าตนเองไม่มีค่า ไม่มีใครสนใจ ต้องรับความกดดันต่างๆ
                    รู้สึกสิ้นหวัง ไม่อยากจะสู้ปัญหาอะไรๆ อีกแล้ว แต่ขอให้มั่นใจว่าความรู้สึกเช่นนี้ไม่ได้เป็นอยู่ตลอดไป โรคนี้รักษาให้หายขาดได้ เมื่ออาการของโรคดีขึ้น
                    มุมมองต่อสิ่งต่างๆ ในแง่ลบจะเปลี่ยนไป ความมั่นใจในตนเองจะมีเพิ่มขึ้น มองเห็นปัญหาต่างๆ ในมุมมองอื่นๆ ที่แตกต่างออกไปจากเดิมมากขึ้น</Text>
                <Text style={styles.TextSubHeader}>ในขณะที่คุณกำลังซึมเศร้าอยู่นั้น มีข้อแนะนำดังต่อไปนี้</Text>
                <Text style={styles.TextContent}>1. แค่ “เศร้า” ไม่ได้แปลว่า “อ่อนแอ” การที่เราป่วยเป็น “โรค” ไม่ได้แปลว่าเรา “อ่อนแอ”
                    เพราะใครๆ ก็ป่วยได้ เราจึงไม่ควรโทษหรือตำหนิตัวเองที่เราซึมเศร้า เพราะจะยิ่งทำให้เรารู้สึกแย่ลง และหมดกำลังใจในการรักษา ในทางตรงกันข้าม
                    เราควรคิดว่า “โรค” มาคุกคามเราทำให้เราย่ำแย่ แต่เราไม่ต้องไปยอมแพ้ โรคก็ได้ เราสามารถรวบรวมกำลังลุกขึ้นมาสู้กับโรคได้
                    เพราะวงการแพทย์ค้นพบแล้วว่าโรคซึมเศร้า รักษาได้อย่างแน่นอน{'\n'}
                    2. ออกกำลังกาย การออกกำลังกายนอกจากจะช่วยทางร่างกายแล้ว จิตใจก็ยังจะดีขึ้นด้วย โดยในผู้ที่มีอาการซึมเศร้าไม่มาก
                    จะรู้สึกว่าจิตใจคลายความเศร้า และแจ่มใสขึ้นได้ การออกกำลังกายที่ดีจะเป็นการออกกำลังแบบแอโรบิก เช่น วิ่ง เดิน ว่ายน้ำ
                    ซึ่งจะช่วยให้หลับได้ดีขึ้น การกินอาหารดีขึ้น การขับถ่ายดีขึ้น ถ้าได้ออกกำลังกายร่วมกับผู้อื่นด้วยก็จะยิ่งช่วยเพิ่มการเข้าสังคม ไม่รู้สึกว่าตนเองโดดเดี่ยว{'\n'}
                    3. ทำกิจกรรมที่ชอบ เลือกกิจกรรมที่ทำให้เกิดความรู้สึกที่ดีๆ โดยมักจะเป็นสิ่งที่เราเคยชอบ เช่น ไปเที่ยวสวนสาธารณะ ไปเที่ยวชายทะเล
                    ชวนเพื่อนมาที่บ้าน พยายามทำกิจกรรมที่ทำร่วมกับคนอื่นมากกว่าที่จะอยู่คนเดียว{'\n'}
                    4. ตั้งเป้าหมายไม่ยากเกินอย่าตั้งเป้าหมายในการทำงานและการปฏิบัติตัวที่ยากเกินไป ช่วงนี้เป็นช่วงเวลาที่เรายังต้องการการพักผ่อน
                    ทั้งทางร่างกายและจิตใจ การกระตุ้นตนเองมากไปกลับยิ่งจะทำให้ตัวเองรู้สึกแย่ที่ทำไม่ได้อย่างที่หวัง{'\n'}
                    5. ดูแลตัวเองให้ดี กินให้พอ นอนให้พอ เพราะคนซึมเศร้ามักกินไม่ได้นอนไม่หลับ ทำให้สภาพร่างกายอ่อนเพลีย
                    และอารมณ์จะแย่ตาม แต่ระวังอย่ากินหรือนอนมากไป เพราะอาจทำให้อารมณ์แย่ลงได้เช่นเดียวกัน ควรกินนอน พอดีๆ
                    ให้เป็นเวลา อารมณ์เศร้าจะทำให้อยากอยู่เฉยๆ ไม่อยากทำอะไร ไม่อยากออกไปไหน แต่สุดท้ายถ้าเราทำตาม อารมณ์ก็จะยิ่งเศร้ามากขึ้น
                    คำแนะนำ คือ ให้ฝืนทำกิจกรรมที่ควรทำหรือจำเป็นต้องทำต่อไปแม้จะไม่อยากทำ ให้คิดไว้เสมอว่า “ทำตามแผน อย่าทำตามอารมณ์”</Text>
                <TouchableOpacity onPress={Credit}>
                    <Text style={styles.Website}>
                        Manarom Hospital
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'White',
        // paddingHorizontal: 16,
        height: '12%',
    },
    button: {
        paddingLeft: '7%',
        marginTop: '15%',
    },
    title: {
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 25,
        fontWeight: 'bold',
    },
    image: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        marginTop: -40,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: 'black',
        shadowRadius: 50,
    },
    scrollview: {
        flex: 1,
        width: '100%',
    },
    Textheader: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        padding: 20,
    },
    TextContent: {
        padding: 20,
        fontSize: 17,
        marginTop: -15,
        lineHeight: 26,
        width: '100%'
    },
    TextSubHeader: {
        fontSize: 18,
        padding: 20,
        fontWeight: 'bold',
        marginTop: -20,
    },
    Website: {
        padding: 20,
        fontSize: 17,
        marginTop: -15,
        textDecorationLine: 'underline',
        textAlign: 'right',
    },
});
export default SubArticle8