import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { AppContext } from "../context/AppContext";

const NotesList = ({ navigation: { navigate } }) => {
  const { notesItem, saveNotesHandler } = useContext(AppContext);
  console.log(notesItem);

  const onDltBtn = (selectedId) => {
    let filteredArr = notesItem.filter((f) => f._id !== selectedId);
    saveNotesHandler(filteredArr);
  };

  const NoteListItem = ({ title, notes, _id }) => {
    return (
      
      <TouchableOpacity style={styles.item}>
        <View style={styles.itemContainer}>
          <Text style={styles.heading}>Fuel Type</Text>
          <Text
            onPress={() => navigate("NotesCreate", { type: "edit", _id: _id })}
          >
            {title}
          </Text>
          <Text style={styles.heading}>Fuel Used</Text>
          <Text>{notes}</Text>
          <Text style={styles.heading}>Price</Text>
          <Text>100</Text>
        </View>
        <View style={styles.dltBtn}>
          <Button title="Delete" onPress={() => onDltBtn(_id)} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>User Allowance Remaining : 200</Text>

      <FlatList
        data={notesItem}
        renderItem={({ item }) => {
          return (
            <NoteListItem
              title={item.title}
              notes={item.notes}
              _id={item._id}
            />
          );
        }}
      />
      <View style={styles.containerFloatButton}>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigate("NotesCreate")}
          title="Create List"
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 30,
  },
  screen: {
    flex: 1,
    margin: 30,
    marginTop: 60,
  },
  heading: {
    fontSize: 20,
    color: "#8b0000",
  },
  text: {
    width: 60,
    height: 60,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 30,
    backgroundColor: "#D3D3D3",
    color: "white",
    fontSize: 45,
  },
  button: {
    borderRadius: 10,
  },
  dltBtn: {
    width: "30%",
    backgroundColor: "#000",
    position: "absolute",
    right: 10,
    top: 10,
  },
  mainheader: {
    textAlign: "center",
    fontSize: 20,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
  },
  containerFloatButton: {
    position: "absolute",
    bottom: 30,
    right: 0,
  },
  itemContainer: {
    minHeight: 50,
    padding: 3,
    justifyContent: "center",
    paddingHorizontal: 5,
    borderBottomWidth: 0.7,
  },
});

export default NotesList;
