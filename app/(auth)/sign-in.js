import { Text, View } from "react-native";
import { useAuth } from "../../context/auth";

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the sign in screen</Text>
      <Text
        onPress={() => signIn()}
        style={{ backgroundColor: "blue", color: "white", padding: 6 }}
      >
        Sign In
      </Text>
    </View>
  );
}
