import { View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");


  const handleLogin = () => {
    if (!email || !senha) {
      setError("Todos os campos devem ser preenchidos");
      return;
    }
    
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Página de Login!</Text>
        <TextInput
          label={"Email"}
          placeholder={"Digite seu e-mail"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label={"Senha"}
          placeholder={"Digite sua Senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry // Para esconder a senha
        />
        <Button mode="contained"  onPress={handleLogin}>Login</Button>
        <Text style={{ color: "red" }}>{error}</Text>
        <Button
          onPress={() => navigation.navigate("RegisterScreen")}
        >Fazer Cadastro</Button>
      </View>
    </View>
  );
}
