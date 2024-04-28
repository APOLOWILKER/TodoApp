import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerInput: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    // width: "100%",
    transform: [{translateY: -25}]
  },
  inputText: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
    backgroundColor: theme.colors.gray_500,
    borderColor: theme.colors.gray_100,
    color: theme.colors.gray_200,
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
  },
  buttonTask: {
    height: 58,
    width: 58,
    backgroundColor: theme.colors.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  }
});