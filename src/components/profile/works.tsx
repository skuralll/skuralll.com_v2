import { SimpleGrid } from "@mantine/core";
import Section from "../utils/section";
import { IconPalette } from "@tabler/icons-react";
import WorkCard from "@/components/profile/work_card";
import { works } from "@/config/profile";

export default function Works() {
  return (
    <Section icon={IconPalette} title="Works">
      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: "xl", cols: 2, spacing: "md" },
          { maxWidth: "xs", cols: 1, spacing: "md" },
        ]}
      >
        {works.map((work) => (
          <WorkCard work={work} key={work.title} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
