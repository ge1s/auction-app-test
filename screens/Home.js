import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <View>
      <SafeAreaView className="flex-3 flex-row justify-center items-center ">
        <Text className="text-lg">Home Page </Text>
      </SafeAreaView>
      <TouchableOpacity
        onPress={handleLogout}
        className="p-1 bg-blue-400 rounded-lg"
        style={styles.button}
      >
        <Text
          className="text-white text-lg font-bold"
          style={styles.buttonMessage}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "30%",
  },
  buttonMessage: {
    textAlign: "center",
  },
});
