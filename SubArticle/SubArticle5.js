import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const SubArticle5 = () => {
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
            <Image source={require('../img/article5.png')} style={styles.image} />
            <ScrollView style={styles.card}>
                <Text style={styles.Textheader}>คิดมากจนปวดหัว คิดเยอะจนเหนื่อยใจ คิดอย่างไรให้พอดี</Text>
                <Text style={styles.TextContent}>การคิดมาก คิดเยอะ เป็นผลเนื่องจากความวิตกกังวล ยิ่งใช้เวลาในการคิดมากเท่าไหร่
                    ยิ่งต้องใช้พลังงานมากขึ้น ส่งผลให้รู้สึกเหนื่อย อ่อนเพลีย หมดพลัง นอนไม่หลับ กระบวนการคิดและการตัดสินใจผิดพลาด
                    และส่งผลกระทบต่อการทำงานและคนรอบข้างได้ เราจะสามารถควบคุมการคิดของเราได้อย่างไรได้บ้าง มาเริ่มกันเลยค่ะ</Text>
                <Text style={styles.TextSubHeader}>1. โยนความเป็น Perfectionist ทิ้งไปซะ</Text>
                <Text style={styles.TextContent}>ความเป็น Perfectionist คือ อุปสรรคชิ้นใหญ่ที่จะทำให้เราต้องทำทุกอย่างให้สมบูรณ์แบบและ
                    ไม่สามารถให้อภัยตัวเองเมื่อเกิดความผิดพลาดขึ้น ทำให้ต้องใช้ความคิดมากกว่าปกติเพื่อหาทางควบคุมทุกอย่าง
                    ลองเปลี่ยนจากความต้องการความสมบูรณ์แบบเป็นความต้องการให้ทุกอย่างดีที่สุดเท่าที่สามารถทำได้ จะทำให้เราหันมา Focus
                    กับสิ่งที่เราสามารถควบคุมได้และลดความกดดันลงได้มาก ความผิดพลาดไม่ใช่ความล้มเหลว แต่ความผิดพลาดคือโอกาสการเรียนรู้
                    เพราะเราสามารถผิดพลาดได้ และเราก็สามารถแก้ไขความผิดพลาดได้เช่นกัน</Text>
                <Text style={styles.TextSubHeader}>2. ปล่อยวางอดีต</Text>
                <Text style={styles.TextContent}>คนที่คิดมาก ส่วนใหญ่มักยึดติดกับอดีต โดยเฉพาะความต้องการกลับไปแก้ไขสถานการณ์หรือการตัดสินใจบางอย่างในอดีต
                    คิดวกวนซ้ำๆ ไม่ Move On ไม่อยู่กับปัจจุบัน ในเมื่ออดีตเปลี่ยนแปลงไม่ได้เราก็ควรปล่อยวาง เริ่มต้นด้วยการลองใจดีกับตัวเองบ้าง พัฒนาให้กลายเป็นรักตัวเอง
                    ให้สามารถให้อภัยตัวเองในอดีตและเริ่มต้นใหม่กับปัจจุบันได้</Text>
                <Text style={styles.TextSubHeader}>3. มองปัญหาตามความเป็นจริง</Text>
                <Text style={styles.TextContent}>ความยาก-ง่าย ของวิธีการแก้ปัญหา หรือจัดการเหตุการณ์ยุ่งยาก ขึ้นอยู่กับวิธีการมองปัญหาของแต่ละคน
                    เมื่อมองปัญหาเล็กกว่าความเป็นจริง เราอาจต้องคิดแก้ปัญหาอยู่เรื่อยๆ และทางตรงกันข้าม เมื่อมองปัญหาใหญ่กว่าความเป็นจริง
                    เราอาจเปลืองแรงและเปลืองความคิดในการจัดการเกินความจำเป็น ทางออกที่ดีที่สุดคือการมองปัญหาตามความจริง ประเมินขนาดปัญหา/เหตุการณ์ตรงความเป็นจริง
                    จะทำให้เราคิดวางแผนแก้ปัญหาได้ตรงจุด สามารถจัดการปัญหาได้อย่างมีประสิทธิภาพ</Text>
                <Text style={styles.TextSubHeader}>4. เปลี่ยนวิธีเล่าเรื่องราวของตัวเราเอง</Text>
                <Text style={styles.TextContent}>การคิดมาก คิดเยอะ ส่วนหนึ่งเกิดจากเล่าเรื่องราวของตัวเองเชิงลบ เช่น คิดว่าตัวเองเป็นคนคิดมาก
                    คิดว่าตัวเองไม่สามารถตัดสินใจได้ คิดว่าตัวเองไม่สามารถรับผิดชอบได้ กระบวนการคิดแบบนี้จะสร้างปัญหามากกว่าแก้ปัญหา ทำให้ต้องคิดซ้ำๆ
                    วนลูป เราต้องรู้ทันความคิดและพยายามหยุดความคิดเชิงลบเหล่านั้น เปลี่ยนเป็นการเล่าเรื่องตัวเองเชิงบวก เช่น เราสามารถควบคุมความคิดตัวเองได้
                    เรามีอำนาจในการตัดสินใจ การรับรู้เหล่านี้จะช่วยให้ไม่ติดกับดักความคิด และเป็นอิสระทางความคิด</Text>
                <Text style={styles.TextSubHeader}>5. ปลดปล่อยตัวเองจากจินตนาการ</Text>
                <Text style={styles.TextContent}>การอยู่ในจินตนาการมากเกินไปก็เหมือนการล่องลอยอยู่ในอวกาศที่ไม่มีขอบเขต
                    สามารถคิดจินตนาการได้ไม่มีที่สิ้นสุด ยิ่งติดอยู่ในจินตนาการความคิดมากเท่าใหร่ ยิ่งห้ามความคิดได้ยากขึ้น หากจะปลดปล่อยตัวเองจากจินตนาการสู่โลกความเป็นจริง
                    ควรเริ่มต้นด้วยการลงมือทำสิ่งเล็กๆ น้อยๆ ที่สามารถทำได้ หรือทำกิจกรรมที่ชอบ เพื่อลดเวลาในจินตนาการ ความคิดและกลับมาอยู่ในโลกความเป็นจริงมากขึ้น</Text>
                <Text style={styles.TextSubHeader}>6. ระบายความคิดในหัวออกมาซะหน่อย</Text>
                <Text style={styles.TextContent}>หากความคิดเยอะเกินไป ไม่สามารถจัดการให้เป็นระบบได้ ลองหาวิธีปล่อยความคิดออกมาซะหน่อย
                    อาจใช้วิธีการพูดในสิ่งที่คิด หรือเขียนสิ่งที่คิดลงกระดาษ เราอาจเข้าใจความคิดเรามากขึ้น และหาทางจัดการกับปัญหาที่ทำให้คิดมากได้</Text>
                <Text style={styles.TextSubHeader}>7. ปรึกษาผู้เชี่ยวชาญ</Text>
                <Text style={styles.TextContent}>ยิ่งปล่อยให้ความคิดกัดกินเราไปเรื่อยๆ จะยิ่งสูญเสียความเป็นตัวเอง หากการจัดการความคิดด้วยวิธีต่างๆ
                    ด้วยตัวเองแล้วยังไม่เกิดการเปลี่ยนแปลงหรือยังส่งผลกระทบต่อชีวิตประจำวัน อาจต้องของความช่วยเหลือจากคนใกล้ชิด
                    หรือปรึกษาจิตแพทย์เพื่อหาทางช่วยเหลือให้สามารถจัดการความคิดตัวเองได้หากเริ่มคิดเยอะ คิดมาก อย่าปล่อยให้ความคิดของเราย้อนกลับมาทำร้ายตัวเราเอง
                    ลองฝึกควบคุมความคิดตามวิธีข้างต้นหรือค้นหาวิธีการควบคุมความคิดของตัวเอง เมื่อเราควบคุมความคิดของตัวเองได้ เราก็สามารถจะทำทุกอย่างที่เราต้องการได้</Text>
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

export default SubArticle5