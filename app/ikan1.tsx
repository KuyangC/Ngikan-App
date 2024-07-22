import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Ikan1 = () => {
  return (
      <ScrollView style={{flex: 1, display: 'flex'}}>
          <View>
              <Image source={require('@/assets/images/salmon.jpg')} style={{width: 300, height: 200, marginHorizontal: 40, borderRadius: 20, marginTop: 20 }}/>
          </View>
          <View>
                <Text style={{fontFamily: 'outfit-bold', fontSize: 24, marginTop: 10, marginLeft: 15}}>8 Jenis Ikan Yang Bisa Dikomsumsi Mentah</Text>
                <Text style={{fontFamily: 'outfit', fontSize: 16,  marginTop: 10, marginLeft: 15}}>
                Ikan menjadi salah satu sumber protein yang cukup mudah ditemukan. Dari beragam jenis 
                ikan hanya beberapa saja yang aman dimakan mentah atau secara langsung tanpa melalui 
                proses memasak dahulu.
                </Text>
              <Text style={{fontFamily: 'outfit', fontSize: 16, marginTop: 10, marginLeft: 15}}>
              Namun kamu harus tetap berhati-hati karena banyaknya jenis ikan, hanya sebagian kecil ikan 
              yang aman dimakan mentah karena tidak memiliki parasit. Parasit yang berada dalam ikan dapat 
              menyebabkan seseorang mengalami keracunan atau bahkan merenggut nyawa seseorang. {"\n"}{"\n"}

              1. Salmon {"\n"}
              2. Sarden {"\n"}
              3. Halibut {"\n"}
              4. Haddock {"\n"}
              </Text>
          </View>
      </ScrollView>
  )
}

export default Ikan1

const styles = StyleSheet.create({})