import { View, Input, Button, NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const AddProduct = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, }}>

            <View style={{ marginTop: 20 }}></View>

            {/* email view */}
            <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
                <Input
                    variant="outline"
                    placeholder="Product Name"
                    marginBottom={5}
                />
                <Input
                    variant="outline"
                    placeholder="Product Brand"
                    marginBottom={5}
                />
                <Input
                    variant="outline"
                    placeholder="Product Category"
                    marginBottom={5}
                />
                <Input
                    variant="outline"
                    placeholder="Product Description"
                    marginBottom={5}
                />

                <View style={{ marginTop: 20 }}></View>

                <Button onPress={() => {


                }} style={{

                }}>
                    Add Product
                </Button>
            </View>


        </View>
    );
};

export default () => {
    return (
        <NativeBaseProvider>
            <AddProduct />
        </NativeBaseProvider>
    )
}