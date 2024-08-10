<script>
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, InputGroup, Input, InputGroupText, Row, Col } from 'sveltestrap'
import {push, link} from 'svelte-spa-router'
function noop(){}
</script>

<Navbar>
<NavbarBrand><a href="/" use:link>Home</a></NavbarBrand>
<Nav navbar>
  <NavItem><span>login to see the pub key</span></NavItem>
</Nav>
<Nav class="ms-auto" navbar>
  <NavItem>
    <Button type="button" on:click={noop}>Login</Button>
  </NavItem>
</Nav>
</Navbar>

<style></style>