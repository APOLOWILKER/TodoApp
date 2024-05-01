import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray_500,
    borderColor: theme.colors.gray_400,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    height: 64,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 8,
  },
  taskDescription: {
    color: theme.colors.gray_100,
    textAlign: 'left',
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
    flex: 1,
  },
  taskDone: {
    color: theme.colors.gray_300,
    textDecorationLine: 'line-through',
  },
  checkMenu: {
    width: 24,
    height: 24,
    margin: 3,
    borderWidth: 2,
    borderRadius: 999,
    borderColor: theme.colors.blue,
  },
  checked: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.purple_dark,
    borderColor: theme.colors.purple_dark
  },

});
