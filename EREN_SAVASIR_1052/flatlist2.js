import React from "react";

import{
  SafeAreaView,
  FlatList,StyleSheet,StatusBar,RefreshControl,

} from "react-native";

import Listitem from "./src/components/Listitem";
import Listheader from "./src/components/Listheader";
import Listfooter from "./src/components/Listfooter";

const DATA =[
  {
    id:"1",
    title:"First Item",    
  },
  {
    id:"2",
    title:"Second Item",    
  },
  {
    id:"3",
    title:"Third Item",    
  },
  {
    id:"4",
    title:"Fourth Item",    
  },
  {
    id:"5",
    title:"Fifth Item",    
  },
  {
    id:"6",
    title:"Sixth Item",    
  },
  {
    id:"7",
    title:"Seventh Item",    
  },
];

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data = {DATA}
        renderItem={({item})=> <Listitem item={item}/>}
        keyExtractor={item=> item.id}
        ListHeaderComponent={<Listheader />}
        ListFooterComponent={<Listfooter />}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() =>{}}></RefreshControl>
        }
        />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;



