import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { View } from "react-native";
import MatericalIcon from "@expo/vector-icons/MaterialIcons";
import { B } from "@expo/html-elements";

type Props = {
  icon: keyof typeof MatericalIcon.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Button
      size="md"
      variant="solid"
      action="primary"
      onPress={onPress}
      className="bg-transparent"
    >
      <MatericalIcon name={icon} size={24} color="#fff" />
      <ButtonText>{label}</ButtonText>
    </Button>
  );
}
