import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";

import { Flex, Box } from "rebass";

import marked from "marked";
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return href.indexOf("#") > -1
    ? `<a href=#/${href}>${text}</a>`
    : `<a href=${href}>${text}</a>`;
};

import Footer from "../../components/footer";
import Menu from "../../components/menu";
// import readme from "../../../README.md";

class Home extends Component {
  createMarkup(readme) {
    return { __html: marked(readme, { renderer: renderer }) };
  }
  render() {
    const { intl } = this.props;
    return (
      <Flex justifyContent="center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            @ciro-maciel/My version of React/Preact Application Boilerplate
          </title>
          <link
            rel="canonical"
            href="https://ciro-maciel.github.io/react-app-boilerplate/"
          />
        </Helmet>
        <Flex flexWrap="wrap" width={1024}>
          <Flex flexWrap="wrap" width={1}>
            <Box width={[1, 3 / 12]} p={[1, 2]}>
              <Menu
                title={intl.formatMessage({ id: "6592623" })}
                items={[
                  {
                    display: intl.formatMessage({ id: "71ef8f1" }),
                    url: "/"
                  },
                  {
                    display: intl.formatMessage({ id: "6871c58" }),
                    url: "/users"
                  }
                ]}
              />
            </Box>
            <Box width={[1, 9 / 12]} p={[1, 2]}>
              {/* <div dangerouslySetInnerHTML={this.createMarkup(readme)} /> */}
            </Box>
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    );
  }
}

export default connect(
  state => ({ i18n: state.i18n }),
  dispatch => ({
    handleChange: locale => dispatch(i18nChange(locale))
  })
)(injectIntl(Home));
