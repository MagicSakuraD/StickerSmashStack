import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { View } from "react-native";
import MatericalIcon from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View className="w-20 h-20 mx-15 border-4 border-violet-600 rounded-full">
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={onPress}
        className="flex-1 items-center justify-center rounded-full bg-slate-50"
      >
        <MatericalIcon name="add" size={38} color="#25292e" />
      </Button>
    </View>
  );
}
