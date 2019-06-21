import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";


export default class ListNote extends Component {
  handlePress = () => {
    const [key] = this.props.item;
    this.props.onDelete(key);
  };

  render() {
    const  [key, name]  = this.props.item;
    return (
      <View style={styles.container}>
        <View style={styles.textList}>
          <Text>{name}</Text>
        </View>
        <View style={styles.deleteButton}>
          <Button
            onPress={this.handlePress}
            title="Eliminar"
            color="#fff"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: "60%"
  },
  deleteButton: {
    backgroundColor: "red",
    color: "#fff"
  }
});
