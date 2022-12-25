import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import 'react-native-gesture-handler';

const Home = () => {
    const [searchString, setSearchString] = useState("Search on eBay");
    return (
        <ScrollView>
            <View className="grid mt-4 ml-2 mr-2">
                <View className="flex flex-row grid-cols-4 gap-24">
                    <Image className="object-cover h-8 w-16 col-span-2" source={require('./assets/ebay_logo.png')} />
                    <SimpleLineIcons  name="basket" size={24} color="black" />
                </View>
                <View className="flex flex-row grid-cols-4 gap-16">
                    <MaterialIcons name="search" size={24} color="black" />
                    <TextInput
                        value={searchString}
                        onChangeText={(searchString) => setSearchString(searchString)}
                        placeholder={"Search on eBay"}
                        placeholderTextColor="#ffff" />
                    <MaterialCommunityIcons name="microphone-outline" size={24} color="black" />
                    <SimpleLineIcons name="camera" size={24} color="black" />
                </View>
                <View className="grid grid-rows-3 bg-yellow-300 space-y-4 rounded p-4">
                    <View className="row-span-3">
                        <Text className="font-bold text-2xl text-yellow-800 p-2">Up to 60% off at the Brand Outlet</Text>
                        <Text className="text-yellow-800 font-bold p-2">Discover huge savings on top brands</Text>
                        <Button title='Get it all' className="p-4 m-4 text-yellow-300" color="brown" />
                        <View>
                            <View className="flex-row p-1 grid-cols-3 justify-evenly">
                                <Image className="object-cover h-24 w-24 col-span-2" source={require('./assets/motors.jpg')} />
                                <Image className="object-cover h-24 w-24 col-span-2" source={require('./assets/motors.jpg')} />
                                <Image className="object-cover h-24 w-24 col-span-2" source={require('./assets/motors.jpg')} />
                            </View>
                        </View>
                    </View>
                </View>
                <View className="mt-4">
                    <Text className="flex font-bold text-xl">Shop Categories</Text>
                </View>
                <View className="flex grid-cols-3 gap-4 mt-2">
                    <View className="flex-row justify-evenly">
                        <View>
                            <Image className="object-cover h-24 w-24 col-span-2 rounded-full" source={require('./assets/motors.jpg')} />
                            <Text className="font-bold">Tyres & Motors</Text>
                        </View>
                        <View>
                            <Image className="object-cover h-24 w-24 col-span-2 rounded-full" source={require('./assets/sneakers.jpg')} />
                            <Text className="font-bold">Cool Sneakers</Text>
                        </View>
                        <View>
                            <Image className="object-cover h-24 w-24 col-span-2 rounded-full" source={require('./assets/watches.jpg')} />
                            <Text className="font-bold">Wow Watches</Text>
                        </View>
                    </View>
                    <View className="flex grid-cols-3 gap-4 mt-2">
                        <View className="flex-row justify-evenly">
                            <View>
                                <Image className="object-cover h-24 w-24 col-span-2 rounded-full" source={require('./assets/sports_trading_cards.jpg')} />
                                <Text className="font-bold">Trading Cards</Text>
                            </View>
                            <View>
                                <Image className="object-cover h-24 w-24 col-span-2 rounded-full" source={require('./assets/home_garden.jpg')} />
                                <Text className="font-bold">Home & Garden</Text>
                            </View>
                            <View>
                                <Image className="object-cover h-24 w-24 col-span-2 rounded-full" source={require('./assets/electronics.jpg')} />
                                <Text className="font-bold">Yo Electronics</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="mt-4">
                    <Text className="flex font-bold text-xl">Today's Deals - All with Free Shipping</Text>
                </View>
                <View>
                    <View className="flex-row justify-evenly">
                        <View>
                            <Image className="object-cover h-24 w-24" source={require('./assets/shirts.jpg')} />
                            <Text className="font-extrabold">
                                New Mens Wow Shirt
                            </Text>
                            <Text className="font-extrabold">
                                Single Pocket
                            </Text>
                            <Text className="font-extrabold text-lg">
                                $25.00
                            </Text>
                            <View className="flex-row">
                                <Text className="line-through text-gray-400 font-bold">
                                    $50.00
                                </Text>
                                <Text className="ml-1 text-gray-400 font-bold">
                                    &#8226; 50% OFF
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Image className="object-cover h-24 w-24" source={require('./assets/pants.jpg')} />
                            <Text className="font-extrabold">
                                Jeans Pant
                            </Text>
                            <Text className="font-extrabold">
                                Double Pocket, Slim
                            </Text>
                            <Text className="font-extrabold text-lg">
                                $125.00
                            </Text>
                            <View className="flex-row">
                                <Text className="line-through text-gray-400 font-bold">
                                    $250.00
                                </Text>
                                <Text className="ml-1 text-gray-400 font-bold">
                                    &#8226; 50% OFF
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="mt-4">
                    <View>
                        <Text className="text-center">What do you think of the eBay home page?</Text>
                    </View>
                    <View className="flex-row mt-4 grid-cols-2 gap-4 justify-evenly">
                        <Feather name="thumbs-up" size={24} color="black" />
                        <Feather name="thumbs-down" size={24} color="black" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home