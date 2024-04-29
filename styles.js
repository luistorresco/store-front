
import { StyleSheet } from 'react-native';

export const cardMargin = 10; // Este es el margen de cada lado de la tarjeta

export default StyleSheet.create({
  // ... Todos tus estilos definidos aquí ...
  container: {
    flex: 1,
    paddingTop: 20,
  },
  switch: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
  },
  row: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: cardMargin,
    borderRadius: 8,
    // Sombras específicas para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombras específicas para Android
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 4,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 12,
  },
  darkTheme: {
    backgroundColor: '#000',
  },
  darkCard: {
    backgroundColor: '#333',
  },
  darkText: {
    color: '#fff',
  },
  lightTheme: {
    backgroundColor: '#fff',
  },
  lightCard: {
    backgroundColor: '#f0f0f0',
  },
});
