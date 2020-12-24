import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <Breadcrumb className="my-2">
      <LinkContainer to="/">
        <Breadcrumb.Item>MAIN BOARD</Breadcrumb.Item>
      </LinkContainer>
      <LinkContainer to="/all">
        <Breadcrumb.Item>ORDERS</Breadcrumb.Item>
      </LinkContainer>
    </Breadcrumb>
  );
};

export default Header;
