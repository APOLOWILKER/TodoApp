import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.colors.gray_600
  },
  headerContainer: {
    height: 173,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray_700
  },

})