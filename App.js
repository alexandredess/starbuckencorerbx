import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,  
  Image, 
  FlatList, 
  TouchableOpacity,
  Modal} from 'react-native';
import Product from './Component/Product/product'
//useState
import React, { useState } from 'react'; 
export default function App() {

  //state des boissons
  const [products, setProducts] = useState([
    {
    name: 'Iced Latte',
    },
    {
    name: 'Doubleshot Iced Coffee',
    },
    {
    name: 'Doubleshot Vanilla Iced Coffee',
    },
    {
    name: 'Caramel Macchiato',
    },
    {
    name: 'Iced Caramel Macchiato',
    },
    {
    name: 'Iced Cappuccino',
    },
    {
    name: 'Ristretto Bianco',
    },
    {
    name: 'Cold Brew Latte',
    },
    {
    name: 'Mocha',
    },
    {
    name: 'Iced Mocha',
    },
    {
    name: 'Americano',
    },
    {
    name: 'Iced Americano',
    },
    {
    name: 'Café Filtre',
    },
    {
    name: 'Café Filtre Glacé',
    },
    {
    name: 'Chocolat Viennois Signature',
    },
    {
    name: 'Chocolat Viennois Signature Glacé',
    },
    ]);

    const [isDisplayed,setIsDisplayed]=useState(false);

    const  [modal,setModal]=useState(true);

    // let menu = products.map(product=>(
    //   <View key={Math.random()}>
    //     <Text style={styles.card}>{product.name}</Text>
    //   </View>
    // ))

  return (

      <View style={styles.container}>
        <Modal transparent={true} visible={modal} animationType="slide">
          <View
            style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'rgba(0,0,0,.5)'
            }}>
              <View style={{
              backgroundColor:'white',
              padding:17,
              elevation:40,
              shadowColor:'#006341',
              shadowOpacity:.4,
              shadowRadius:5,
              shadowOffset:{width:0,height:0}
              }}>
                <TouchableOpacity onPress={()=>setModal(false)}>
                  <Text style={{
                      textAlignVertical:"center",
                      textAlign:"center",
                      borderStyle:"solid",
                      borderWidth:2,
                      borderRadius:30,
                      borderColor:'#006341',
                      fontSize:15,
                      width:30,
                      height:30,
                      color:'#006341',
                      marginBottom:8}}>X</Text>
                </TouchableOpacity>
                <Text>Ceci est ma première modale</Text>
            </View>
          </View>
        </Modal>

        <Image source={require('./assets/starbucklogo.png')} style={styles.logo}/>
        <Text style={styles.title}>STARBUCKS</Text>
        <StatusBar style="auto" />
            {isDisplayed ? (
                <Text>Que souhaitez-vous boire ?</Text>
            ) : (
                <Text>Commencez par ouvrir le menu</Text>
            )}

            {isDisplayed && (
                <FlatList
                    data={products}
                    renderItem={({ item }) => <Product item={item} />}
                    style={{ width: '100%' }}
                />
            )}
            <View style={{ marginTop: 40 }}>
                
                <TouchableOpacity
                    onPress={()=>setIsDisplayed(prevState => !prevState)}
                    
                    style={{
                        widht:'40%',
                        backgroundColor:'#006341',
                        paddingHorizontal:15,
                        paddingVertical:5,
                        borderRadius:5,
                        }}
                        activeOpacity={0.8}
                >
                    <Text style={{color:'white'}} >{isDisplayed ? 'Fermer le menu' : 'Ouvrir le menu'}</Text>
                </TouchableOpacity>

        </View>
        
      </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:100,
    height:100,
    marginBottom:15,
    marginTop:100
  },
  title:{
      fontSize: 32,
      color: '#006341',
      textTransform: 'uppercase',
      fontWeight: 'bold',
  },
  boutbout : {
    backgroundColor:'#006341',
    color:"white"
  },
  card:{
    width:'100%',
    padding:30,
    borderBottomWidth:1,
    borderColor:'#182E28'
  }
});
