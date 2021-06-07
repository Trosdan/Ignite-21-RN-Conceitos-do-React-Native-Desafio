import React, { useContext, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import checkIcon from "../assets/icons/Check.png";
import { DarkModeContext } from "../context/DarkMode";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    addTask(task);
    setTask("");
  }

  return (
    <View
      style={[
        styles.inputContainer,
        isDarkMode && styles.inputContainerDark,
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
      ]}
    >
      <TextInput
        style={[styles.input, isDarkMode && styles.inputDark]}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={isDarkMode ? "#E1E1E6" : "#A09CB1"}
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, isDarkMode && styles.addButtonDark]}
        onPress={handleAddNewTask}
        //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#F5F4F8",
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainerDark: {
    backgroundColor: "#413A6F",
  },
  input: {
    flex: 1,
    backgroundColor: "#F5F4F8",
    color: "#141823",
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputDark: {
    backgroundColor: "#413A6F",
    color: "#E1E1E6",
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#3FAD27",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: "#9347CA",
  },
});
