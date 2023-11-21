import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <View>
        <TextInput placeholder="Username"></TextInput>
        <TextInput secureTextEntry={true} placeholder="Password"></TextInput>
        <Button title="Login" />
      </View>
      <View>
        <Text>Don't have an account</Text>
        <TouchableOpacity onPress={() => navigation.push("SignUp")}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
