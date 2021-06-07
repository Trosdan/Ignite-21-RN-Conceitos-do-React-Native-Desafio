import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";
import { DarkModeContext } from "../context/DarkMode";

function FlatListHeaderComponent() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <View>
      <Text style={[styles.header, isDarkMode && styles.headerDark]}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
            style={
              item.done
                ? [
                    styles.taskButtonDone,
                    isDarkMode && styles.taskButtonDoneDark,
                  ]
                : styles.taskButton
            }
            //TODO - use onPress, onLongPress and style props
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? [
                      styles.taskMarkerDone,
                      isDarkMode && styles.taskMarkerDoneDark,
                    ]
                  : [styles.taskMarker, isDarkMode && styles.taskMarkerDark]
              }
              //TODO - use style prop
            />
            <Text
              style={
                item.done
                  ? [styles.taskTextDone, isDarkMode && styles.taskTextDark]
                  : [styles.taskText, isDarkMode && styles.taskTextDark]
              }
              //TODO - use style prop
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#3D3D4D",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  headerDark: {
    color: "#E1E1E6",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D3D4D",
    marginRight: 10,
  },
  taskMarkerDark: {
    borderColor: "#9347CA",
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskTextDark: {
    color: "#E1E1E6",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskButtonDoneDark: {
    backgroundColor: "rgba(65, 58, 111, 0.1)",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#273FAD",
    marginRight: 10,
  },
  taskMarkerDoneDark: {
    backgroundColor: "#9347CA",
  },
  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
});
