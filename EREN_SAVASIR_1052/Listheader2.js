import React from "react"

import { View, Text ,Stylesheet } from "react-native";

const Listheader = () =>{
    return (
     <View style={styles.header}>
        <text>header</text>
     </View>
    );
};

const styles = Stylesheet.create({
    header: {
        padding:20,
        backgroundColor:"bisque",
    },
});

export default Listheader