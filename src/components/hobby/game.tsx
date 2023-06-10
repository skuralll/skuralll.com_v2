import Script from "next/script";
import Section from "../utils/section";
import { IconDeviceGamepad2 } from "@tabler/icons-react";
import { Stack, Title, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  powerdby: {
    color: theme.colors.gray[6],
  },
}));

export default function Game() {
  const { classes, cx } = useStyles();

  return (
    <Section icon={IconDeviceGamepad2} title="Game">
      <Stack spacing="sm">
        <div>
          {/* <Title order={4}>Steam</Title> */}
          <div
            id="steam-widget"
            data-steamid="76561198424303465"
            data-num="8"
            data-width="350px"
            data-target="https://steam-embeds.vercel.app"
          >
            <Script
              async
              src="https://steam-embeds.vercel.app/widget.js"
            ></Script>
          </div>
          <span className={classes.powerdby}>Powerd by SteamEmbeds</span>
        </div>
      </Stack>
    </Section>
  );
}
