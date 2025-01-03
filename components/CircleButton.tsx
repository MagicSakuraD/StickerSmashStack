import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { View, StyleSheet } from "react-native";
import MatericalIcon from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View
      style={styles.circleButtonContainer}
      // className="w-20 h-20 mx-15 border-4 border-violet-600 rounded-full"
    >
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={onPress}
        style={styles.circleButton}
        className="rounded-full bg-slate-50"
      >
        <MatericalIcon name="add" size={38} color="#25292e" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#7c3aed",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
