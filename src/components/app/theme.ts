import { AnchorProps, MantineThemeOverride, PaperProps } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily:
    "Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo, sans-serif",
  globalStyles: (theme) => ({
    body: {
      backgroundColor: "#F8F9FA",
    },
  }),
  components: {},
};
