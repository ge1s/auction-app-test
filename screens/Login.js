import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Username"
          // onChange={handleEmailChange}
          onChange={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          value={password}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          // onChange={handlePasswordChange}
          onChange={(text) => setPassword(text)}
        ></TextInput>
        {/* <Button title="Login" style={styles.login} /> */}
        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginMessage}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomMessage}>
        <Text style={styles.bottomMessage}>Don't have an account</Text>
        <TouchableOpacity onPress={() => navigation.push("SignUp")}>
          <Text style={styles.signMessage}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flex: 1,
    justifyContent: "center",
    marginVertical: 20,
  },
  formContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  login: {
    backgroundColor: "#4d76e8",
    borderRadius: 5,
    height: 40,
  },
  bottomMessage: {
    flex: 1,
    flexDirection: "row",
  },
  signMessage: {
    fontWeight: "bold",
    color: "#4d76e8",
  },
  loginMessage: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});
