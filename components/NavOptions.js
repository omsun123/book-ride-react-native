import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        title: "Get a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen" 
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen" 
    }
]

const NavOptions = () => {
    return (
        <FlatList
          data= {data}
          horizontal
          keyExtractor={(item, index) => 'key'+index}
          renderItem={({item}) => (
            <TouchableOpacity style= {tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60`}>
                <Image
                style={{ width: 120, height: 120, resizeMode: "contain"}}
                source={{ uri: item.image }} 
                />
              <Text style={tw`mt-2 text-lg font-bold`}> {item.title} </Text>
              <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright" color="white" type="antdesign" />
            </TouchableOpacity>
          )}
          />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
