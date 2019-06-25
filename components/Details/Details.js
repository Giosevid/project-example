import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import ListNote from "../ListNote"; 
import Scanner from "../QRCodeScanner/QRCodeScanner";

function Details() {
  const [text, setText] = useState("");
  const [items, setItems] = useState({});

  const addItem = () => {
    const key = Math.random()
      .toString(36)
      .slice(2);
    setItems(items => ({ ...items, [key]: text }));
    setText("");
  };

  const handleDelete = key => setItems(({ [key]: _, ...rest }) => rest);

  handleQr = () => {
    console.log('entrokljlkj')
    return (
      <View>
        <Scanner/>
      </View>
    )
  }

  const entries = Object.entries(items);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          onChangeText={text => setText(text)}
          placeholder="Escribir nota..."
          value={text}
          style={styles.inputBox}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text>Agregar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigation.navigate('Scanner')}>
          <Text>Qr</Text>
        </TouchableOpacity>
      </View>
      {entries.length > 0 ? (
        entries.map(([key, item]) => (
          <ListNote
            key={key}
            item={item}
            itemKey={key}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <Text>No hay elementos...</Text>
      )}
    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "cyan",
    padding: 1,
    padding: 12,
    borderRadius: 4
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "60%"
  }
});
