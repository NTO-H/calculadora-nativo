import {
    View,
    Text,
    ActivityIndicator,
    Image,
    FlatList,
    Pressable,
    StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from  'react-native-vector-icons/FontAwesome';

const Productos = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((obj) => {
                setData(obj);
                setLoad(true);
            });
    }, []);

    const Uscreen = () => {
        return (
            <View>
                <ActivityIndicator color={"darkblue"} />
                <Text>Cargando Datos...</Text>
            </View>
        );
    };

    const Card = ({ title, price, images }) => {
        return (
            <View style={estilos.card}>
                  
                    {images && images.length > 0 && (
                        <Image
                            style={{  borderRadius: 5, height: 150, width: 130 }}
                            source={{ uri: images[0] }}
                        />
                    )}
                    <Text>Producto: {title}</Text>
                    <Text>Precio: ${price} MXN</Text>
                  

                    <Icon name="heart" color={"#666666"} />
                

            </View>
        );
    };

    const renderRow = ({ item }) => (
        <View style={estilos.row}>
            <Card title={item[0].title} price={item[0].price} images={item[0].images} />
            {item.length > 1 && (
                <Card title={item[1].title} price={item[1].price} images={item[1].images} />
            )}
        </View>
    );

    const LScreen = () => {
        // Agrupar los datos en filas de a dos
        const groupedData = data.reduce((acc, item, index) => {
            if (index % 2 === 0) {
                acc.push([item]);
            } else {
                acc[acc.length - 1].push(item);
            }
            return acc;
        }, []);

        return (
            <FlatList
                data={groupedData}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    };

    return <View>{load ? <LScreen /> : <Uscreen />}</View>;
};

export default Productos;

const estilos = StyleSheet.create({
    card: {
        padding:10,
        marginBottom: 20,
        borderRadius:10,
        marginLeft:10,
        marginRight:20,
        width: 150,
        
        height: 290,
        backgroundColor: "#e7eded",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
