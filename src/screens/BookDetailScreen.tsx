import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Book from '../types/Book';

interface BookDetailScreenProps {
  route: { params: { book: Book } };
}

const BookDetailScreen: React.FC<BookDetailScreenProps> = ({ route }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.isbn}>{book.isbn}</Text>
      <Text style={styles.authors}>{book.authors.join(', ')}</Text>
      <Text style={styles.genre}>{book.genre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  isbn: {
    fontSize: 18,
    marginBottom: 4,
  },
  authors: {
    fontSize: 16,
    marginBottom: 4,
  },
  genre: {
    fontSize: 14,
  },
});

export default BookDetailScreen;
