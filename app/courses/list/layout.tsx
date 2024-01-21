import { Grid, GridItem, Show } from "@chakra-ui/react";
import Sidebar from "../_components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main">
        <main>{children}</main>
      </GridItem>
    </Grid>
  );
}
