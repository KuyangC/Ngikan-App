import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Searchpage from './searchpage'
import React from 'react'
import { useLocalSearchParams, Link, useNavigation, useRouter } from 'expo-router'

const Tabdetail = () => {
    const params = useLocalSearchParams()
    console.log('====================================');
    console.log(params);
    console.log('====================================');
    const router = useRouter()
    return (
        <View>
            <Image source={params.pict} style={styles.image} />
            <Text style={styles.title}>{params.name}</Text>
            <Text style={styles.desc}>{params.desc}</Text>
            <Text style={styles.pricetitle}>Harga Ikan</Text>
            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 16,
                    color: '#2C4E80'
                }}>Rp</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 14,
                }}>{params.price}</Text>
            </View>
            <TouchableOpacity
                onPress={() => router.push("screens/Search/order")}
                style={styles.button}
            >
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 16,
                    color: 'white'
                }}>Beli Sekarang</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tabdetail

const styles = StyleSheet.create({
    image: {
        height: 228,
        width: 421,
      },
    
      title: {
        fontFamily: 'outfit-bold',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10
      },
    
      desc: {
        fontFamily: 'outfit',
        fontSize: 14,
        marginTop: 10,
        marginLeft: 10,
      },
    
      pricetitle: {
        fontFamily: 'outfit-bold',
        fontSize: 16,
        marginTop: 5,
        marginLeft: 10,
        color: '#2C4E80'
      },
    
      button: {
        width: 300,
        height: 50,
        backgroundColor: '#2C4E80',
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        margin: "auto",
        marginTop: 50,
        borderRadius: 20
      }
})