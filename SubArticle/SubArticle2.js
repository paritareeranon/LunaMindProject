import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const SubArticle2 = () => {
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
            <Image source={require('../img/article2.png')} style={styles.image} />
            <ScrollView style={styles.card}>
                <Text style={styles.Textheader}>โรคจิตเภท รักษาได้</Text>
                <Text style={styles.TextContent}>โรคจิตเภท (Schizophrenia) คือ คำที่ใช้เรียกกลุ่มอาการที่มีความผิดปกติของความคิด การรับรู้ ที่ไม่ตรงกับความเป็นจริง
                    ส่งผลให้แสดงออกมาในรูปแบบทางด้านอารมณ์ พฤติกรรม และก่อให้เกิดผลเสียต่อการดำเนินชีวิตประจำวัน เช่น การทำงาน การเรียน การเข้าสังคม การดูแลตนเอง
                    เป็นเวลาอย่างน้อย 6 เดือน โดยที่ผู้ป่วยต้องไม่มีโรคทางกาย โรคของสมอง พิษจากยาหรือสารต่างๆ ที่ทำให้เกิดอาการดังกล่าว จากข้อมูลในเดือนมกราคม 2565
                    ขององค์การอนามัยโลกระบุว่า โรคจิตเภทสามารถพบได้ 1 ต่อ 300 หรือ คิดเป็นร้อยละ 0.32 ของประชากรทั่วโลก พบในเพศชายและเพศหญิงเท่าๆ กัน
                    โดยในเพศชายมักเกิดอาการครั้งแรกในช่วงอายุ 10-25 ปี และเพศหญิงมักเกิดอาการครั้งแรกในช่วงอายุ 25-35 ปี</Text>
                <Text style={styles.TextSubHeader}>สาเหตุการเกิดโรค</Text>
                <Text style={styles.TextContent}>• พันธุกรรม{'\n'}
                    ผู้ที่มีความใกล้ชิดทางสายเลือดกับผู้ป่วยมาก โดยเฉพาะรุ่นลูกหลานมีโอกาสเกิดโรคมากกว่าผู้ที่ไม่มีประวัติทางพันธุกรรม{'\n'}
                    • ความผิดปกติของสมอง{'\n'} แบ่งเป็น สารเคมีในสมอง รอยโรคในสมอง แสดงออกมาในรูปแบบอารมณ์ พฤติกรรมที่ผิดปกติ{'\n'}
                    • ภาวะทางด้านจิตใจ{'\n'} ผู้ที่มีภาวะความเครียดในชีวิตประจำวัน เช่น ความสัมพันธ์กับผู้อื่นไม่ดี อยู่ในสิ่งแวดล้อมที่มีการใช้อารมณ์รุนแรง ตำหนิ วิพากษ์วิจารณ์
                    จู้จี้ บงการ ส่งผลกระตุ้นให้เกิดความเจ็บป่วย</Text>
                <Text style={styles.TextSubHeader}>อาการของโรค</Text>
                <Text style={styles.TextContent}>สัญญาณเตือนว่าอาจเป็นอาการเริ่มต้น ผู้ป่วยมักเป็นคนเงียบๆ แยกตัว เพื่อนน้อยตั้งแต่เด็กจนวัยรุ่น มักไม่มีเพื่อนสนิท
                    หลีกเลี่ยงการเข้าสังคม เช่น กลุ่มกิจกรรม กลุ่มกีฬา หมกมุ่นด้านศาสนาปรัชญามากขึ้น มีความเชื่อที่ฟังดูแปลก คนใกล้ชิดสังเกตเห็นได้ถึงประสิทธิภาพการเรียน
                    การทำงานแย่ลง การดูแลด้านอนามัยส่วนตัว สุขภาพ ลดลงจนปล่อยปละละเลย พึงระวังว่าสัญญาณเหล่านี้อาจไม่ได้หมายถึงโรคจิตเภทเท่านั้น แต่อาจเป็นอาการทางจิต
                    ในโรคอื่นๆได้ เพราะฉะนั้นประวัติของผู้ป่วยจึงเป็นสิ่งสำคัญต่อการวินิจฉัย</Text>
                <Text style={styles.TextSubHeader}>อาการทั่วไปของโรคจิตเภท</Text>
                <Text style={styles.TextContent}>ลักษณะทั่วไปภายนอก เสื้อผ้า ของใช้ ไม่เรียบร้อย ไม่สะอาดด้านอนามัยอย่างเห็นได้ชัด ผู้ป่วยอาจมีลักษณะกระสับกระส่ายอยู่ไม่นิ่ง หรืออาจอยู่นิ่งจนไม่เคลื่อนไหว ไร้การตอบสนอง
                    อารมณ์ สุดโต่ง ก้าวร้าว เดือดดาล สับสน หรือไม่ตอบสนองทางอารมณ์ ไร้ความรู้สึกการรับรู้ผิดปกติ แบ่งเป็น ประสาทหลอน (Hallucination) หูแว่ว ได้ยินเสียงคนพูดคุย พูดขู่ นินทาตน ออกคำสั่ง เสียงคนถกเถียงกัน เป็นต้น ภาพหลอน การดมกลิ่น การรับรส การสัมผัสสามารถผิดปกติได้เช่นกัน
                    การประมวลผลภาพผิดปกติ (Delusion) เช่น เห็นผ้าปูที่นอนเป็นหลุมดำลึกความคิดผิดปกติ แบ่งเป็นเนื้อหาผิดปกติ การหลงผิด เช่น คิดว่ามีคนสามารถเข้าถึงข้อมูลส่วนตัว คอยสะกดรอยตามตนเอง การระแวง เช่น คิดว่ามีคนจะมาทำร้ายตนเอง หมายปองเอาชีวิต
                    รูปแบบความคิดผิดปกติ สังเกตได้จากการพูดของผู้ป่วย เช่น พูดหลายเรื่องพร้อมกันแต่ไม่ได้ความหมายใจความ เนื้อหาไม่สัมพันธ์กัน พูดคล้องจองไปเรื่อยๆ แต่จับใจความไม่ได้ ในผู้ป่วยบางรายอาจมีเฉพาะอาการซึม ไม่พูด แยกตัว ไร้อารมณ์ ไม่ดูแลตนเอง ไม่มีความคิดริเริ่ม เรียกว่ากลุ่มอาการด้านลบ
                </Text>
                <Text style={styles.TextSubHeader}>การรักษา</Text>
                <Text style={styles.TextContent}>ยา คือ การรักษาหลัก แบ่งเป็นระยะควบคุมอาการ หากผู้ป่วยมีความก้าวร้าวเป็นอันตรายต่อตนเองหรือผู้อื่น การควบคุมอาการในโรงพยาบาลอาจเป็นสิ่งที่จำเป็นเพื่อให้ผู้ป่วยได้รับยาอย่างเหมาะสม
                    ระยะให้ยาต่อเนื่อง เป็นระยะที่ผู้ป่วยอาการสงบแล้ว แต่จำเป็นต้องได้ยาต่อเนื่องเพื่อป้องกันการเกิดซ้ำ การรักษาด้วยไฟฟ้า ใช้ในกรณีที่ผู้ป่วยไม่ตอบสนองต่อยา หรือมีอาการรุนแรงมาก
                    การรักษาด้านจิตสังคม ใช้ร่วมกับการรักษาด้วยยา มีประโยชน์ในการป้องกันการกลับเป็นซ้ำและส่งเสริมคุณภาพชีวิต เช่น ทักษะการเข้าสังคม ให้ความรู้ตั้งแต่ท่าทางการแสดงออก การสบตา การพูด การวิเคราะห์สถานการณ์ การรับรู้ความต้องการหรืออารมณ์ของผู้อื่น
                    ครอบครัวบำบัด เพื่อลดความเครียดของญาติ ลดการใช้อารมณ์รุนแรงต่อกัน</Text>
                <Text style={styles.TextSubHeader}>การดูแลผู้ป่วยจิตเภท</Text>
                <Text style={styles.TextContent}>ญาติหรือผู้ดูแลต้องเข้าใจว่าผู้ป่วยไม่ได้ตั้งใจจะเป็น แต่คือ อาการของสมอง ลดการกระตุ้น ลดการวิพากษ์วิจารณ์ ตำหนิติเตียน จู้จี้จุกจิก โดยไม่จำเป็น
                    กระตุ้นให้ผู้ป่วยสามารถช่วยเหลือตนเองให้ได้มากที่สุด มอบหมายหน้าที่รับผิดชอบเพื่อให้ผู้ป่วยมองเห็นคุณค่าของตนเอง หากเริ่มมีพฤติกรรมเปลี่ยนแปลงหรืออาการที่สงสัยให้รีบพามาพบแพทย์</Text>
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
export default SubArticle2