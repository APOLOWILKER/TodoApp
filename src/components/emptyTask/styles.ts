import { theme } from "@/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.gray_600
  },
  emptyTaskImage: {
    height: 60,
    width: 60,
    marginBottom: 16,
    marginTop: 48
  },
  emptyMessage: {
    fontSize: theme.fonts.size.body.sm,
    color: theme.colors.gray_300,
    textAlign: 'center',
    fontFamily: theme.fonts.family.bold,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 24
  },
  subEmptyMessage: {
    fontFamily: theme.fonts.family.regular
  },
})