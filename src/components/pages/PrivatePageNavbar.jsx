import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useAuth } from 'contexts/AuthContext';

function PrivatePageNavbar(props) {
  const { className, ...rest } = props;
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState();

  async function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  return (
    <Navbar color="secondary" light className={className} {...rest}>
      <Container>
        <NavbarBrand className="mr-auto">React testing</NavbarBrand>
        <NavbarToggler
          onClick={() => toggleNavbar()}
          className="mr-2"
        />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                style={{ cursor: 'pointer' }}
                onClick={() => logout()}
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

PrivatePageNavbar.propTypes = {
  className: PropTypes.string,
};

PrivatePageNavbar.defaultProps = {
  className: '',
};

export default PrivatePageNavbar;
