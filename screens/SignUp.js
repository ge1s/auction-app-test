import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Sign Up</Text>
      <View>
        <TextInput placeholder="Username"></TextInput>
        <TextInput placeholder="Email"></TextInput>
        <TextInput secureTextEntry={true} placeholder="Password"></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
        ></TextInput>
        <Button title="Sign Up" />
      </View>
      <View>
        <Text>Already have an account</Text>
        <TouchableOpacity onPress={() => navigation.push("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
