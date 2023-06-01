import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import { NativeBaseProvider, Text, Box, HStack, Grid } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../../css/ProductStyles';

import OrderTypeButton from '../../components/OrderTypeButton';

import {
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';


const Home = () => {

  const [data, setData] = useState([
    {
      id: 1,
      vendor_id: 16,
      name: "Magnolia",
      seo_tag: "mangolia",
      brand: "Bamboo Marigold",
      quantity: 1,
      unit: "piece",
      product_stock_quantity: 43,
      price: 570,
      mrp: "600",
      gst: "6",
      sgst: 3,
      cgst: 3,
      category: "Climbers",
      is_deleted: "0",
      status: "active",
      review: "nice one",
      discount: "5",
      rating: "3",
      description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing",
      is_active: 0,
      created_by: "",
      created_by_id: "",
      created_on: "2023-04-28T08:30:50.000Z",
      updated_on: "2023-04-28T08:30:50.000Z",
      all_images_url: "http://192.168.29.109:8888/product_images/3.jpg01_868385.png,http://192.168.29.109:8888/product_images/download(2).jpeg11_880588.png,http://192.168.29.109:8888/product_images/download(3).jpeg21_178746.png,http://192.168.29.109:8888/product_images/download(4).jpeg31_162529.png",
      cover_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKB1XiDc4JWlq2XG6GiIIbD3kL2-pAb65QVDdTXEINbXyWgrjQgWGr2HIc2Wnksi3qWU&usqp=CAU",
    },
    {
      id: 1,
      vendor_id: 16,
      name: "Magnolia",
      seo_tag: "mangolia",
      brand: "Bamboo Marigold",
      quantity: 1,
      unit: "piece",
      product_stock_quantity: 43,
      price: 570,
      mrp: "600",
      gst: "6",
      sgst: 3,
      cgst: 3,
      category: "Climbers",
      is_deleted: "0",
      status: "active",
      review: "nice one",
      discount: "5",
      rating: "3",
      description: "A product description is the marketing copy that explains what a product is and why it's worth purchasing",
      is_active: 0,
      created_by: "",
      created_by_id: "",
      created_on: "2023-04-28T08:30:50.000Z",
      updated_on: "2023-04-28T08:30:50.000Z",
      all_images_url: "http://192.168.29.109:8888/product_images/3.jpg01_868385.png,http://192.168.29.109:8888/product_images/download(2).jpeg11_880588.png,http://192.168.29.109:8888/product_images/download(3).jpeg21_178746.png,http://192.168.29.109:8888/product_images/download(4).jpeg31_162529.png",
      cover_image: "https://kj1bcdn.b-cdn.net/media/70568/nursery.jpg?width=1200",
    },
  ]);

  const navigation = useNavigation();

  return (
    <View style={{
      margin: 15
    }}>

      <HStack>
        <OrderTypeButton onPress={()=> {

        }}
        title='Received' count="20"></OrderTypeButton>
        <OrderTypeButton onPress={()=> {
          
        }}  title='Ready To Ship' count="10"></OrderTypeButton>
      </HStack>

      <HStack style={{ marginTop: 10 }}>
        <OrderTypeButton onPress={()=> {

        }}
        title='Delivered' count="5"></OrderTypeButton>
        <OrderTypeButton onPress={()=> {
          
        }}  title='Rejected' count="10"></OrderTypeButton>
      </HStack>


      <View style={{ marginTop: 20 }}></View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={styles.boxStyle}>
            <Box key={item.id} py={2}>
              <Image
                style={styles.imageStyle}
                source={{ uri: item.cover_image }}
              />
              <Text>{item.name}</Text>
              <Text>price:{item.price}</Text>
            </Box>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
      {/* <Box>
        {data.map((item) => (
          <HStack>
            <Box key={item.id} py={2}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </Box>
          </HStack>
        ))}
      </Box> */}

      {/* <Button title="Go to About" onPress={() => navigation.navigate('About', { data })} /> */}

    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};