import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacityBase } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "react-native-elements";
import db from "./localdb";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={"#434"}
            centerComponent={{
              text: "Monkey-Chunky",
              style: { fontSize: 20, color: "#fff" },
            }}
          />

          <Image
            source={{
              uri: "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png",
            }}
            style={styles.imageIcon}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(txt) => {
              this.setState({
                text: txt,
              }); //no quotations
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({
                chunks: db[this.state.text].chunks, //set whatever written in text box
              });
            }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>

          <View>
            {this.state.chunks.map((item) => {
              return (
                <TouchableOpacity style={styles.chunkButton}>
                  <Text style={styles.displayText}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  inputBox: {
    marginTop: 30,
    width: "80%",
    height: 40,
    alignSelf: "center",
    textAlign: "center",
    borderWidth: 4,
  },

  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  displayText: {
    textAlign: "center",
    fontSize: 38,
    color: "white",
  },

  imageIcon: {
    width: 200,
    height: 200,
    marginLeft: 70,
  },

  chunkButton: {
    backgroundColor: "#fff432",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 5,
    borderRadius: 50,
  },
});
