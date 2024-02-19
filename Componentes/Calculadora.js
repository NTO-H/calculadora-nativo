import { View, TouchableOpacity ,Text } from 'react-native';
import React, { useState } from 'react';
import { Boton, Caja } from './Atomicos';
import { estilos } from './Estilos';

export const Calculadora = () => {
  const [pantalla, setPantalla] = useState('');

  const manejarPulsacion = (valor) => {
    switch (valor) {
      case '=':
        calcularResultado();
        break;
      case 'ce':
        setPantalla('');
        break;
      case 'c':
        setPantalla('');
        break;
      case '<-':
        setPantalla((prevPantalla) => prevPantalla.slice(0, -1));
        break;
      case '1/':
        setPantalla((prevPantalla) => `1/(${prevPantalla})`);
        break;
      case 'x²':
        setPantalla((prevPantalla) => `(${prevPantalla})^2`);
        break;
      case 'R':
        setPantalla(`Math.sqrt(${pantalla})`);
        break;
      case '+/-':
        setPantalla((prevPantalla) =>
          prevPantalla.startsWith('-') ? prevPantalla.slice(1) : `-${prevPantalla}`
        );
        break;
      default:
        setPantalla((prevPantalla) => prevPantalla + valor);
        break;
    }
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(pantalla);
      setPantalla(resultado.toString());
    } catch (error) {
      setPantalla('Syntax error');
    }
  };
const Boton = ({ texto, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={{  margin:10,
      padding:27,
      marginRight:4,
      flexDirection:'row',
      flexWrap:'wrap',borderRadius:20, border: '#fff200', backgroundColor: '#acacac' }}>
      <Text>{texto}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <View>
        <Caja style={estilos.res} valor={pantalla} />
      </View>
      <View style={estilos.botonescontainer}>
        <Boton texto={' % '} onPress={() => manejarPulsacion('%')} />
        <Boton texto={' ce'} onPress={() => manejarPulsacion('ce')} />
        <Boton texto={' c '} onPress={() => manejarPulsacion('c')} />
        <Boton texto={' <-'} onPress={() => manejarPulsacion('<-')} />
        <Boton texto={'1/x'} onPress={() => manejarPulsacion('1/')} />
        <Boton texto={'x² '} onPress={() => manejarPulsacion('x²')} />
        <Boton texto={' R '} onPress={() => manejarPulsacion('R')} />
        <Boton texto={' / '} onPress={() => manejarPulsacion('/')} />
        <Boton texto={'  7 '} onPress={() => manejarPulsacion('7')} />
        <Boton texto={'  8 '} onPress={() => manejarPulsacion('8')} />
        <Boton texto={' 9 '} onPress={() => manejarPulsacion('9')} />
        <Boton texto={' * '} onPress={() => manejarPulsacion('*')} />
        <Boton texto={'  4 '} onPress={() => manejarPulsacion('4')} />
        <Boton texto={'  5 '} onPress={() => manejarPulsacion('5')} />
        <Boton texto={' 6 '} onPress={() => manejarPulsacion('6')} />
        <Boton texto={'  - '} onPress={() => manejarPulsacion('-')} />
        <Boton texto={'  1 '} onPress={() => manejarPulsacion('1')} />
        <Boton texto={'  2 '} onPress={() => manejarPulsacion('2')} />
        <Boton texto={' 3 '} onPress={() => manejarPulsacion('3')} />
        <Boton texto={' + '} onPress={() => manejarPulsacion('+')} />
        <Boton texto={'+/-'} onPress={() => manejarPulsacion('+/-')} />
        <Boton texto={'  0 '} onPress={() => manejarPulsacion('0')} />
        <Boton texto={'  . '} onPress={() => manejarPulsacion('.')} />
        <Boton texto={' = '} onPress={() => manejarPulsacion('=')} />
      </View>
    </View>
  );
};
