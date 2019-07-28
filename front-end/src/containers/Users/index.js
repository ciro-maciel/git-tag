import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Flex, Box } from "rebass";

import Button from "../../components/button";
import Input from "../../components/input";
import Table from "../../components/table";

import { usersRequest } from "./actions";

class Users extends Component {
  render() {
    const { handleSearch, users } = this.props;
    return (
      <Flex>
        <Flex flexWrap="wrap" width={1024} style={{ margin: "0 auto" }}>
          <Box width={1} p={[1, 2]}>
            <Link to={"/"}>Home</Link>
            <h2> Pesquisa de Usuarios </h2>
            <Input
              type="text"
              innerRef={input => {
                this.textQuery = input;
              }}
            />
            <Button onClick={() => handleSearch(this.textQuery.value)}>
              Procurar
            </Button>
            {users.found && users.found.items && (
              <Table items={users.found.items} />
            )}
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default connect(
  state => ({ users: state.users }),
  dispatch => ({
    handleSearch: query => dispatch(usersRequest(query))
  })
)(Users);
