import { View, Input, Button, NativeBaseProvider, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';
import useValidation from '../../../util/Validator';

const validators = {
    productName: [(value) => (value.trim() ? null : 'Product Name is required')],
    productBrand: [(value) => (value.trim() ? null : 'Product Brand is required')],
    productCategory: [(value) => (value.trim() ? null : 'Product Category is required')],
    productDescription: [(value) => (value.trim() ? null : 'Product Description is required')],
};

const AddProduct = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const product = route?.params?.product ?? { productName: "", productBrand: '', productCategory: '', productDescription: '' };


    const { state, onInputChange, errors, validate } = useValidation(
        product,
        validators
    );

    const onSubmit = () => {
        if (!validate()) return;
    }

    return (
        <View style={{ flex: 1, }}>

            <View style={{ marginTop: 20 }}></View>

            {/* email view */}
            <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
                {errors.productName && <Text style={styles.errorText}>{errors.productName[0]}</Text>}
                <Input
                    value={state.productName}
                    onChangeText={(value) => onInputChange('productName', value)}
                    variant="outline"
                    placeholder="Product Name"
                    marginBottom={5}
                />
                {errors.productBrand && <Text style={styles.errorText}>{errors.productBrand[0]}</Text>}
                <Input
                    value={state.productBrand}
                    onChangeText={(value) => onInputChange('productBrand', value)}
                    variant="outline"
                    placeholder="Product Brand"
                    marginBottom={5}
                />

                {errors.productCategory && <Text style={styles.errorText}>{errors.productCategory[0]}</Text>}
                <Input
                    value={state.productCategory}
                    onChangeText={(value) => onInputChange('productCategory', value)}
                    variant="outline"
                    placeholder="Product Category"
                    marginBottom={5}
                />

                {errors.productDescription && <Text style={styles.errorText}>{errors.productDescription[0]}</Text>}
                <Input
                    value={state.productDescription}
                    onChangeText={(value) => onInputChange('productDescription', value)}
                    variant="outline"
                    placeholder="Product Description"
                    marginBottom={5}
                />

                <View style={{ marginTop: 20 }}></View>

                <Button onPress={() => {
                    onSubmit();
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

export const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        fontSize: 14
    },
});