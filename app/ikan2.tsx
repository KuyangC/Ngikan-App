import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ikan2 = () => {
  return (
      <ScrollView>
          <View>
                <Image source={require('@/assets/images/gurame.jpg')} style={{width: 300, height: 200, marginHorizontal: 40, borderRadius: 20, marginTop: 50 }}/>
              <Text style={{ fontFamily: 'outfit-bold', fontSize: 24, marginTop: 10, marginLeft: 15 }}>Tak Hanya Lezat, Ini 8 Manfaat Ikan Gurame bagi Kesehatan</Text>
          </View>
          <View>
            <Text style={{fontFamily: 'outfit', fontSize: 16,  marginTop: 10, marginLeft: 15}}>
                Gurame adalah salah satu ikan air tawar yang memiliki segudang manfaat kesehatan. 
                Berkat kandungan asam aminonya, ikan ini diklaim mampu membantu perkembangan otak. 
                Nutrisi tersebut amat dibutuhkan anak-anak yang sel-sel otaknya masih dalam masa perkembangan. 
                Jika dikonsumsi secara rutin, asam amino ini disinyalir mampu meningkatkan kecerdasan anak.
            </Text>
            <Text style={{fontFamily: 'outfit', fontSize: 16,  marginTop: 10, marginLeft: 15}}>
                1. Menyehatkan Jantung {"\n"}
                2. Menjaga berat badan {"\n"}
                3. Menyehatkan Kulit {"\n"}
                4. Sumber Energi {"\n"}
                5. Membentuk antibodi {"\n"}
                6. Memperbaiki jaringan yang rusak {"\n"}
                7. Mencegah Anemia {"\n"}
                8. Menjaga Kesehatan Tulang {"\n"}
            </Text>
          </View>
      </ScrollView>
  )
}

export default Ikan2

const styles = StyleSheet.create({})