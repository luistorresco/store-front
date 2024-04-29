import React from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = () => {
  return (
    // Contenedor principal que actúa como la barra de navegación inferior
    <View style={styles.footer}>
      {/* Botón de inicio con icono */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="home" size={24} color="#333" />
      </TouchableOpacity>
      {/* Botón de buscar con icono */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="search" size={24} color="#333" />
      </TouchableOpacity>
      
      {/* Botón 'Shop Now' destacado */}
      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.shopButtonText}>Shop Now</Text>
      </TouchableOpacity>
      
      {/* Botón de canasta con icono */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="basket" size={24} color="#333" />
      </TouchableOpacity>
      {/* Botón de perfil con icono */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="person" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos para el contenedor principal de la barra de navegación
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
  },
  // Estilos para los contenedores de los íconos
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  // Estilos para el botón 'Shop Now'
  shopButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
      
    }),
  },
  // Estilos para el texto dentro del botón 'Shop Now'
  shopButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;