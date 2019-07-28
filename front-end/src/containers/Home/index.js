import React from "react";

import { Flex, Box } from "rebass";

import Menu from "../../components/menu";

export default () => (
  <Flex>
    <Flex width={1024} style={{ margin: "0 auto", display: "flex" }}>
      <Box width={[1, 3 / 12]} p={[1, 2]}>
        <Menu
          title="Menu"
          items={[
            {
              display: "Home",
              url: "/"
            },
            {
              display: "Usuários",
              url: "/users"
            }
          ]}
        />
      </Box>
      <Box width={[1, 9 / 12]} p={[1, 2]} style={{ marginTop: "30px" }}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Box>
    </Flex>
  </Flex>
);
