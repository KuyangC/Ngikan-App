import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ikan3 = () => {
  return (
    <ScrollView>
        <View>
            <Image source={require('@/assets/images/memet.jpg')} style={{width: 300, height: 200, marginHorizontal: 40, borderRadius: 20, marginTop: 50 }}/>
        </View>
        <View>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 24, marginTop: 10, marginLeft: 15 }}>
                Serunya Tradisi Memet di Gemblegan Klaten, Ribuan Orang Berburu Ikan di Embung
            </Text>
            <Text style={{fontFamily: 'outfit', fontSize: 16,  marginTop: 10, marginLeft: 15}}>
            Ribuan orang nyemplung bareng di embung Desa Gemblegan, Kecamatan Kalikotes, Klaten, 
            untuk memeriahkan acara tradisi memet ikan, Minggu (21/7/2024) pagi. Total ikan yang 
            ditebar ke kolam itu mencapai 2 ton. {"\n"} {"\n"}


            Sebelumnya, ribuan orang itu berdatangan dan memenuhi sekeliling embung seluas 1 hektare 
            (ha) tersebut. Belum sampai seremonial pembukaan acara itu dimulai, mereka ramai-ramai 
            masuk embung dengan air rata-rata setinggi perut orang dewasa. {"\n"}{"\n"}

            Menggunakan berbagai peralatan, mereka mulai berburu ikan. Ada yang menggunakan jaring 
            beraneka ukuran. Ada pula yang menggunakan peralatan tak lazim untuk menjaring ikan seperti 
            keranjang sampah dan cething. {"\n"}{"\n"}

            Seusai seremonial pembukaan, ribuan orang di kolam kembali riuh. Mereka menanti penebaran ikan 
            yang menjadi maskot dalam rangkaian kegiatan itu. Ikan-ikan itu ditebarkan Bupati dan Wamendes 
            PDTT serta sejumlah pejabat yang datang. {"\n"}{"\n"}

            Setelah ikan dilempar, ribuan orang saling berebut ikan maskot tersebut. Tak perlu waktu lama, 
            ikan maskot yang diberi pita itu tertangkap. Mereka yang mendapatkan ikan maskot itu kemudian 
            datang ke panggung acara untuk menukarkannya dengan doorprize. {"\n"}{"\n"}

            </Text>
        </View>
    </ScrollView>
  )
}

export default Ikan3

const styles = StyleSheet.create({})