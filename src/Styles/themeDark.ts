import { StyleSheet } from "react-native"


export const ThemeDark = StyleSheet.create({
  containerCentral: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18181b",
    


},
container: {
    flex:1,
    alignItems: "center",
    backgroundColor:"#18181b",
    padding:16
 },

 title:{
     fontSize: 32,
    color: '#7C7C8A',
     marginTop: 16,
      // fontFamily: 'Roboto-regular'
 },

 buttonSmall: {
    backgroundColor: '#9333ea',
    borderRadius: 8,
    justifyContent: "center",
    height: 50,
    width: 200,
    margin: 18,
},

buttonLarge: {
    backgroundColor:'#9333ea',
    borderRadius:8,
    justifyContent:"center",
    height:50,
    width:'100%',
    margin:18
},

inputSmall: {
    height: 50,
    width: 200,
    borderRadius: 8,
    color: '#7C7C8A',
    backgroundColor: "#262626",
    margin: 16,
    padding: 16,
    // fontFamily: 'Roboto-bold'
},

inputLarge:{
    height:50,
    width:"100%",
    borderRadius:8,
    color:'#7C7C8A',
    backgroundColor: "#262626",
    margin:16,
    padding: 16
},

formLogin: {
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
},

itemList: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
},
itemText: {
    color: '#fff',
    fontSize: 24
},
actions: {
    display:"flex",
    flexDirection:"row",

},

forms: {
  width: 300,
  height: 400,
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor:'#012E40',
  borderRadius: 16

},

})




