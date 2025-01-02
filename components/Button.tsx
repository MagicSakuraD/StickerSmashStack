import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = { label: string; theme?: "primary"; onPress?: () => void };

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View className="w-80 h-16 mx-5 p-3">
        <Pressable
          className="rounded-full w-full h-full items-center justify-center flex-row bg-violet-500 hover:bg-violet-500/90 border-violet-600 border-b-4 border-x-[1px] active:border-b-2"
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#fff"}
            className="mr-2"
          />
          <Text className="text-white font-semibold text-lg">{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View className="w-80 h-16 mx-5 justify-center p-1 items-center">
      <Pressable
        className="rounded-xl w-full h-full items-center justify-center flex-row"
        onPress={onPress}
      >
        <Text className="text-white text-base">{label}</Text>
      </Pressable>
    </View>
  );
}
