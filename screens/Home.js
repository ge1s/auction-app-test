import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import ToDoScreen from "./ToDoScreen";

export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <View>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={handleLogout}
            className="bg-yellow-400 p-2 rounded-2xl mb-7  mx-3 my-3"
          >
            <Text className="text-white text-lg font-bold">Logout</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200, alignItems: "center" }}
          />
        </View>
      </SafeAreaView>
      <View>
        <ToDoScreen />
      </View>
    </View>
  );
}
