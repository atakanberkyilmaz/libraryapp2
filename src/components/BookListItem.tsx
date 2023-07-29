import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Book from '../types/Book';

interface BookListItemProps {
  book: Book;
  onPress: () => void;
  onDelete: () => void;
}

const BookListItem: React.FC<BookListItemProps> = ({ book, onPress, onDelete }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.description}>Kitap Tanımı:{book.description}</Text>
        <Text style={styles.author}>Yazar: {book.authors}</Text>
        <Text style={styles.isbn}>ISBN: {book.isbn}</Text>
        <Text style={styles.genre}>Tür: {book.genre}</Text>
        <Text style={styles.cover}>Kitap Kapağı: {book.cover}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteButtonText}>Sil</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    marginTop: 4,
    color: '#666',
  },
  isbn: {
    color: '#666',
  },
  genre: {
    marginTop: 4,
    color: '#666',
  },
  description: {
    marginTop: 4,
    color: '#666',
  },
  cover: {
    marginTop: 4,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BookListItem;
