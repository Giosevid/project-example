import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import ListNote from "../ListNote";
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: {Uno: 'asi'}
    };
  }

  handlePress = () => {
    this.setState(state => {
      if (!state.text) return state;
      return {
        text: "",
        items: {...state.items, [state.text]: state.text }
      };
    });
  };

  handleDelete = id => {
    this.setState(state => {
        const { [id]: _, ...items } = state.items;
        return {
          items
        };
      });
  };

  render() {
    const entries = Object.entries(this.state.items);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            onChangeText={text => this.setState({ text })}
            placeholder="Escribir nota..."
            value={this.state.text}
            style={styles.inputBox}
          />
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text>Agregar</Text>
          </TouchableOpacity>
        </View>
        <View>
          {entries.length > 0 && (
            <FlatList
              data={entries}
              renderItem={({ item }) => (
                <ListNote onDelete={this.handleDelete} item={item} /> 
              )}
            />
          )}
        </View>
      </View>
    );
  }
}

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
