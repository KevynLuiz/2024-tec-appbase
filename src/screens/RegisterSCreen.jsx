import { View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [error, setError] = useState("")

  const handleRegister = () => {
    if (!email || !senha || !repetirSenha) {
      setError("Todos os campos devem ser preenchidos");
      return;
    }
    if (senha !== repetirSenha) {
      setError("As senhas não coincidem");
      return;
    }
    
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Página de Registro!</Text>
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
        <TextInput
          label={"Repetir senha"}
          placeholder={"Repita sua senha"}
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry // Para esconder a senha
        />
        <Button mode="contained">Login</Button>
        <Button onPress={handleRegister}>Fazer Cadastro</Button>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    </View>
  );
}
