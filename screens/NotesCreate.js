import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert,
 } from "react-native";

import { AppContext } from "../context/AppContext";

const NotesCreate = ({
  navigation: { navigate },
  navigation,
  route: { params },
}) => {
  const { notesItem, saveNotesHandler } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [notes, setNoteItem] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    if (params?.type === "edit") {
      let filteredData = notesItem?.filter((note) => note?._id === params?._id);
      setTitle(filteredData[0]?.title);
      setNoteItem(filteredData[0]?.notes);
    }
  };

  //update or save new item
  const saveItemHandler = () => {
    let payLoad = {
      _id: title,
      title,
      notes,
    };
    if (params?.type === "edit") {
      let mappedData = notesItem.map((note) => {
        if (note?._id === params?._id) {
          return payLoad;
        } else {
          return note;
        }
      });
      saveNotesHandler(mappedData);
    } else {
      saveNotesHandler([...notesItem, payLoad]);
    }
    Alert.alert("Result", "Fuel price has been stored.", [
      { text: "Okay", styles: "Cancel" },
    ]);
    navigate("Notes");
  };

  return (
    <View style={styles.form}>
      <View>
        <Text>Enter Fuel Type</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={title}
          placeholder="Fuel Type"
        />
      </View>
      <View>
        <Text>Enter litres/charge unit here</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setNoteItem(text)}
          value={notes}
          placeholder="Enter details of fuel used"
        />
      </View>
      <View style={styles.button}>
        <Button
          title={params?.type === "edit" ? "upadte" : "create"}
          color="black"
          onPress={() => saveItemHandler()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
    marginTop: 60,
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: "top",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: "top",
  },

  button: {
    width: "40%",
    marginLeft: 80,
  },
  sendItemImg: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    width: 100,
    height: 100,
    padding: 50,
    margin: 40,
  },
  sendContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  sendButton: {
    width: "40%",
  },
});

export default NotesCreate;
