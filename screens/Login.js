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

import { FIREBASE_AUTH } from "../FirebaseConfig";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = FIREBASE_AUTH;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      alert("Check your emails");
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.formContainer}>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Username"
          onChange={handleEmailChange}
        ></TextInput>
        <TextInput
          value={password}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChange={handlePasswordChange}
        ></TextInput>
        {/* <Button title="Login" style={styles.login} /> */}
        <TouchableOpacity style={styles.login} onPress={signIn}>
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
});
