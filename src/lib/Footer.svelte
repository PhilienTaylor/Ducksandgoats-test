<script>
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, InputGroup, Input } from 'sveltestrap'
import {push, link} from 'svelte-spa-router'

function noop(){}
</script>

<Navbar>
<NavbarBrand><a href="/" use:link>Home</a></NavbarBrand>
<Nav navbar>
    <NavItem>
        <span>test</span>
    </NavItem>
</Nav>
<Nav class="ms-auto" navbar>
    <NavItem>
        <Button type="button" on:click={noop}>Auto</Button>
    </NavItem>
</Nav>
</Navbar>

<style></style>