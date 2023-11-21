import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      console.log(response);
      alert("check your email");
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextInput
          value={username}
          style={styles.input}
          placeholder="Username"
          onChange={handleUsernameChange}
        ></TextInput>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          onChange={handleEmailChange}
        ></TextInput>
        <TextInput
          value={password}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChange={handlePasswordChange}
        ></TextInput>

        <TouchableOpacity style={styles.login} onPress={handleSubmit}>
          <Text style={styles.loginMessage}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomMessage}>
        <Text style={styles.bottomMessage}>Already have an account</Text>
        <TouchableOpacity onPress={() => navigation.push("Login")}>
          <Text style={styles.signMessage}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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
