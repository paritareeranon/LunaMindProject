import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const SubArticle6 = () => {
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
            <Image source={require('../img/article6.png')} style={styles.image} />
            <ScrollView style={styles.card}>
                <Text style={styles.Textheader}>โรคซึมเศร้าเรื้อรังคืออะไร</Text>
                <Text style={styles.TextContent}>โรคซึมเศร้าเรื้อรัง มีชื่อทางการแพทย์ว่า Dysthymia หรือ Persistent Depressive Disorder (PDD)
                    ที่แม้มีอาการรุนแรงไม่มากเท่ากับโรคซึมเศร้า แต่กลับส่งผลกระทบต่อการใช้ชีวิตประจำมากกว่า เพราะมีอาการติดต่อกันยาวนานอย่างน้อย 2 ปี
                    และอาจมีบางคนที่มีอาการทั้งสองโรคพร้อมกันได้</Text>
                <Text style={styles.TextSubHeader}>โรคซึมเศร้า</Text>
                <Text style={styles.TextContent}>เป็นโรคทางอารมณ์เกี่ยวข้องทั้งด้านพฤติกรรม จิตใจ และความคิด ส่งผลต่อการกิน การนอนหลับ
                    ความคิดต่อสิ่งต่างๆ และความรู้สึกต่อตัวเอง แตกต่างกับความรู้สึกที่ไม่มีความสุขหรืออารมณ์เศร้าแบบปกติ ไม่ใช่สัญญาณของความอ่อนแอหรือตั้งใจที่จะเป็น
                    คนที่มีอาการของโรคซึมเศร้าจะไม่สามารถสลัดให้หลุด เอาออกไป หรือรู้สึกดีขึ้นได้เอง แต่สิ่งที่ช่วยให้เขาดีขึ้นได้คือการรักษา</Text>
                <Text style={styles.TextSubHeader}>สาเหตุของโรคซึมเศร้าเรื้อรัง</Text>
                <Text style={styles.TextContent}>ปัจจุบันยังไม่สามารถระบุสาเหตุของโรคซึมเศร้าเรื้อรังได้แน่ชัด แต่สันนิษฐานว่าเป็นผลจากการทำงานที่ผิดปกติของสารเคมีในสมอง
                    และยังมีอีกหลายปัจจัยที่นำไปสู่โรคซึมเศร้าได้ เช่น สิ่งแวดล้อม จิตใจ สุขภาพร่างกาย พันธุกรรม ความเครียดสะสด รวมถึงการเผชิญเหตุการณ์รุนแรงในชีวิต</Text>
                <Text style={styles.TextSubHeader}>โรคซึมเศร้าเรื้อรังมีอาการอย่างไร</Text>
                <Text style={styles.TextContent}>o มีความรู้สึกเศร้า วิตกกังวล หรือ เฉยๆ อยู่ในอารมณ์ว่างเปล่า เป็นเกือบตลอดเวลา ร่วมกับ 2 อาการจากอาการต่อไปนี้{'\n'}
                    o ไม่สามารถจดจ่อ มีสมาธิได้ คิดและตัดสินใจไม่ได้{'\n'}
                    o ไม่มีพลัง เหนื่อยล้า รู้สึกสิ้นหวัง น้ำหนักหรือการกินเปลี่ยนไปจากเดิม กินน้อยลงหรือกินมากขึ้น{'\n'}
                    o การนอนเปลี่ยนไป นอนไม่หลับ อาจตื่นตอนเช้ากว่าปกติ หรือนอนมากเกินไป{'\n'}
                    o ความภาคภูมิใจในตัวเองต่ำ{'\n'}
                    o สมาธิ การจดจ่อลดลง ตัดสินใจลำบาก{'\n'}
                    o รู้สึกสิ้นหวัง</Text>
                <Text style={styles.TextSubHeader}>การรักษาโรคซึมเศร้าเรื้อรัง</Text>
                <Text style={styles.TextContent}>• การรักษาด้วยยา{'\n'}
                    การใช้ยาต้านเศร้าช่วยให้อาการดีขึ้น อาจใช้เวลา 4 – 6 สัปดาห์ ขึ้นอยู่กับอาการ ของแต่ละคน เมื่อกินยาแล้วอาจไม่ได้เห็นผลชัดเจนในช่วงแรก
                    แต่อาการจะค่อยๆ ดีขึ้นเรื่อยๆ สิ่งสำคัญ คือ ต้องกินยาต่อเนื่องตามที่แพทย์แนะนำ หากมีผลข้างเคียง ควรรีบปรึกษาแพทย์ประจำตัว{'\n'}

                    • การทำจิตบำบัด{'\n'}
                    มีประโยชน์ต่อการรักษาในหลายๆ คนที่เป็นโรคซึมเศร้าเรื้อรัง ซึ่งช่วยให้ปรับเปลี่ยน ความคิดต่อตัวเองและสิ่งรอบข้างและช่วยพัฒนาทักษะด้านต่างๆ เช่น{'\n'}
                    o การแสดงความคิดหรือความรู้สึกอย่างมีประสิทธิภาพ{'\n'}
                    o การจัดการอารมณ์ตัวเอง{'\n'}
                    o การปรับตัวเมื่อเจอกับความท้าทายหรือสถานการณ์วิกฤต{'\n'}
                    o การพัฒนาทักษะทางสังคม ความสัมพันธ์กับคนรอบข้าง{'\n'}
                    o การระบุความคิด พฤติกรรมและอารมณ์ทางลบที่ส่งผลต่ออาการของตัวเองได้{'\n'}
                    o การปรับความเชื่อในแง่ลบให้เป็นทางบวก{'\n'}
                    o เพิ่มความรู้สึกพึงพอใจในชีวิต{'\n'}
                    o ตั้งเป้าหมายที่เป็นไปได้{'\n'}
                    อาการของโรคซึมเศร้าเรื้อรังอาจต้องใช้ระยะเวลารักษาแบบระยะยาว อาการของโรคทำให้คุณรู้สึกเหนื่อยล้า สิ้นหวัง ไม่มีคุณค่า ซึ่งเป็นความคิดและความรู้สึกทางลบที่ทำให้คุณอยากเลิกรักษา
                    สิ่งสำคัญ คือ การตระหนักรู้ว่าความคิดและความรู้สึกทางลบที่เกิดขึ้นนี้มาจากอาการของโรคไม่ใช่ตัวตนของผู้ป่วย
                    อีกสิ่งสำคัญ คือ การเข้าร่วมการบำบัดรักษาตามแผนที่แพทย์วางไว้ การปรับเปลี่ยนกิจกรรมที่ทำจะส่งผลต่อการรักษาให้ดียิ่งขึ้น เช่น{'\n'}
                    • การออกกำลังกาย อย่างน้อย 3 ครั้ง ต่อสัปดาห์{'\n'}
                    • การกินอาหารที่มีประโยชน์{'\n'}
                    • หลีกเลี่ยงสารเสพติดและเครื่องดื่มที่มีแอลกอฮอลล์{'\n'}
                    • การทำกิจกรรมที่ชื่นชอบ หรืองานอดิเรก{'\n'}
                </Text>
                <Text style={styles.TextSubHeader}>คนใกล้ชิดเป็นโรคซึมเศร้าเรื้อรังจะช่วยเหลืออย่างไร</Text>
                <Text style={styles.TextContent}>สิ่งสำคัญที่สุดที่สามารถช่วยผู้ป่วยโรคซึมเศร้าเรื้องรังได้ คือ การตระหนักและรับรู้ว่าเขาป่วยจริงๆ
                    มันเป็นอาการของโรค เขาไม่ได้พยายามที่จะแกล้งทำ ปฏิบัติ หรือรู้สึกกับคนอื่นในทางลบ เขาอาจไม่มีปฏิกิริยากับการฟังข่าวดี หรือเรื่องที่น่ายินดี
                    ควรให้กำลังใจสนับสนุนให้เขาไปปรึกษาจิตแพทย์ ติดตามการนัดหมายกับแพทย์ ดูแลให้เขากินยาและไปบำบัดรักษาอย่างต่อเนื่อง</Text>
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

export default SubArticle6