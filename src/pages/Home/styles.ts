import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.gray_600
  },
  headerContainer: {
    height: 173,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray_700
  },
  tasksGroup: {
    width: "100%",
    flex: 1,
    paddingHorizontal:24,
    paddingBottom: 24,
    gap: 20,
  },
  containerFeedBackTask: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  containerStatusBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  taskStatusText: {
    color: theme.colors.purple_dark,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.body.sm,
  },
  taskStatusBlock: {
    backgroundColor: theme.colors.gray_400,
    borderRadius: 90,
    paddingHorizontal: 8,
    paddingVertical: 2
  },
  taskStatusValueNumber: {
    color: theme.colors.gray_200,
    fontWeight: 'bold',
    fontSize: theme.fonts.size.body.sm
  }

})