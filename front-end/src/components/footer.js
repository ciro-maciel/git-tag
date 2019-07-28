import React from "react";

import { Flex } from "rebass";

import { I18nOption } from "../containers/i18n";

const Footer = () => (
  <Flex width={1} pb={1} justifyContent="center" alignItems="center">
    <I18nOption />
  </Flex>
);

export default Footer;
