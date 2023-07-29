import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import BookListItem from '../components/BookListItem';
import BookForm from '../components/BookForm';
import Book from '../types/Book';
import { deleteBook } from '../store/BookSlice';

const BookListScreen: React.FC = () => { 
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [searchText, setSearchText] = useState('');

  const books = useSelector((state: RootState) => state.book.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    setSelectedBook(undefined);
    setIsAddingBook(true);
  };

  const handleEditBook = (book: Book) => {
    setSelectedBook(book);
    setIsAddingBook(true);
  };

  const handleDeleteBook = (bookId: string) => {
    dispatch(deleteBook(bookId));
  };

  const handleCancelAddBook = () => {
    setSelectedBook(undefined);
    setIsAddingBook(false);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchText.toLowerCase()) ||
      book.authors.join(', ').toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <View style={styles.container}>
      {isAddingBook ? (
        <BookForm book={selectedBook} onSubmit={handleCancelAddBook} />
      ) : (
        <View>
          <TextInput
            style={styles.searchInput}
            placeholder="Arama yap..."
            onChangeText={handleSearch}
            value={searchText}
          />
          <FlatList
            data={filteredBooks}
            renderItem={({ item }) => (
              <BookListItem
                book={item}
                onPress={() => handleEditBook(item)}
                onDelete={() => handleDeleteBook(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
              <Text style={styles.addButtonText}>Kitap Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#f2f2f2',
  },
  addButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BookListScreen;
