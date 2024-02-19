import { StyleSheet } from "react-native";
export const myColor = {
  blue: '#3498db',
  btnDark: '#2c3e50',
  white: '#ffffff',
  btnGray: '#bdc3c7',
  gray: '#7f8c8d',
  black: '#000000',
};
export const estilos=StyleSheet.create({
    //Estilos del boton

    btnBlue:{
      width:72,
      height:72,
      borderRadius:24,
      backgroundColor:myColor.blue,
      justifyContent:"center",
      alignItems:"center",
      margin:8,
  },
  btDark:{
      width:72,
      height:72,
      borderRadius:24,
      backgroundColor:myColor.btnDark,
      justifyContent:"center",
      alignItems:"center",
      margin:8,
  },
  btnLight:{
      width:72,
      height:72,
      borderRadius:24,
      backgroundColor:myColor.white,
      justifyContent:"center",
      alignItems:"center",
      margin:8,
  },
  btnGray:{
      width:72,
      height:72,
      borderRadius:24,
      backgroundColor:myColor.btnGray,
      justifyContent:"center",
      alignItems:"center",
      margin:8,
  },
  smallTextLight:{
      fontSize:32,
      color:myColor.white,
  },
  smallTextDark:{
      fontSize:32,
      color:myColor.black,
  },
  ///
  row:{
      maxWidth:'100%',
      flexDirection:'row',
  },
  viewBotton:{
      position:'absolute',
      bottom:50,
  },
  screenFirtsNumber:{
      fontSize:96,
      color:myColor.gray,
      fontWeight:'200',
      alignSelf: 'flex-end',

  },
  screenSecondNumber:{
      fontSize:40,
      color:myColor.gray,
      fontWeight:'200',
      alignSelf: 'flex-end',

  },

res:{
color: '#f5e9e9'

},

    boton:{
  
        backgroundColor:'#65440f',
       
        borderBottomColor:'#ff1010',
        color:'#eee9e9',
width:70,
        padding:9,
        borderRadius:40,
       height:70,

        
        borderWidth:4,
        flexDirection:'row',
      },
      textoB:{
        color:'#fffff',
        fontSize:40,
        
       
      },
      logoB:{
        height:50,
        
        width:2,
        marginRight:-1
      },
    //Estilos de la caja
    boxContainer:{
      // borderBottomColor:'#272626',

        backgroundColor:'hsla(210, 100.00%, 95.30%, 0.52)',
        // borderWidth:6,
        borderRadius:5,
 
        backgroundColor:'#787878',
        height:65,
        marginTop:5,
        marginBottom:5,
        borderRadius:10,
        width:330,
        marginLeft:30,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10
    },
    TextBox:{
      color: 'white',
        fontSize:40
    },
    //estilo de contenedor de los botones
    botonescontainer:{
      margin:9,
        padding:10,
        marginLeft:20,
        flexDirection:'row',
        flexWrap:'wrap'
    }
})