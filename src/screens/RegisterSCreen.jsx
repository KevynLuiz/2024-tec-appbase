import { View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");

  // realizar de lógica de login
  // verificando se o email foi digitado
  // verificando se a senha foi digitada

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
        <Button>Fazer Cadastro</Button>
      </View>
    </View>
  );
}
