import { Button, Image, Linking, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Searchpage from './searchpage'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

const Pasar = () => {
    const params = useLocalSearchParams()
    console.log('===============================');
    console.log(params)
    console.log('===============================');
    const router = useRouter()

    const handlePress = () => {
        if (typeof params.link === 'string') {
            Linking.openURL(params.link);
        }
    };

    return (
        <ScrollView>
            <View>
                <Image source={params.pict} style={styles.image} />
            </View>
            <View>
                <Text style={styles.title}>{params.name}</Text>
                <Text style={styles.desc}>{params.loc}</Text>
                <Button title="Buka di Google Maps" onPress={handlePress}/>
            </View>
        </ScrollView>
    )
}

export default Pasar

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
})