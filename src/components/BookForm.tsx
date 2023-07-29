import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../store/BookSlice';
import Book from '../types/Book';

interface BookFormProps {
  book?: Book; // Optional prop to pass existing book data when editing
  onSubmit: () => void; // Callback function to trigger after submitting the form
}

const BookForm: React.FC<BookFormProps> = ({ book, onSubmit }) => { //FC -> Functional Component 
  const [title, setTitle] = useState(book?.title || '');
  const [isbn, setIsbn] = useState(book?.isbn || '');
  const [authors, setAuthors] = useState(book?.authors.join(', ') || '');
  const [genre, setGenre] = useState(book?.genre || '');
  const [description, setDescription] = useState(book?.description || '');
  const [coverUrl, setCoverUrl] = useState(book?.cover || '');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newBook: Book = {
      id: book?.id || Math.random().toString(),
      title,
      isbn,
      authors: authors.split(',').map((author) => author.trim()),
      genre,
      description,
      cover: coverUrl,
    };

    if (book) {
      dispatch(updateBook(newBook));
    } else {
      dispatch(addBook(newBook));
    }

    onSubmit();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Kitap Adı"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="ISBN numarası"
        value={isbn}
        onChangeText={setIsbn}
      />
      <TextInput
        style={styles.input}
        placeholder="Yazarlar (virgülle ayırarak)"
        value={authors}
        onChangeText={setAuthors}
      />
      <TextInput
        style={styles.input}
        placeholder="Tür"
        value={genre}
        onChangeText={setGenre}
      />
      <TextInput
        style={styles.input}
        placeholder="Kitap Tanımı"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Kitap Kapağı (URL)"
        value={coverUrl}
        onChangeText={setCoverUrl}
      />
      <Button title={book ? 'Güncelle' : 'Ekle'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default BookForm;
