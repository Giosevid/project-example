import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function ListNote({ item, itemKey, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.textList}>
        <Text>{item}</Text>
      </View>
      <View style={styles.deleteButton}>
        <Button
          onPress={() => onDelete(itemKey)}
          title="Eliminar"
          color="red"
          accessibilityLabel="button"
        />
      </View>
    </View>
  );
}

export default ListNote;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textList: {
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 0.5,
    padding: 15,
    marginTop: 10,
    width: "70%"
  }
});
