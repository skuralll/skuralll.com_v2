import { AnchorProps, MantineThemeOverride, PaperProps } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "Open Sans",
  globalStyles: (theme) => ({
    body: {
      backgroundColor: "#F8F9FA",
    },
  }),
  components: {},
};
