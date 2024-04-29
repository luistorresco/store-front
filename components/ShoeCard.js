import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles'; 

const ShoeCard = ({ item, cardWidth, isDarkTheme }) => {
  return (
    <View style={[styles.card, { width: cardWidth }, isDarkTheme ? styles.darkCard : {}]}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={[styles.cardTitle, isDarkTheme ? styles.darkText : {}]}>{item.brand}</Text>
      <Text style={[styles.cardDescription, isDarkTheme ? styles.darkText : {}]}>{item.model}</Text>
      <Text style={[styles.cardDescription, isDarkTheme ? styles.darkText : {}]}>{item.size}</Text>
    </View>
  );
};

export default ShoeCard;