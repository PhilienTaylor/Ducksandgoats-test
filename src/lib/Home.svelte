<script>
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, InputGroup, Input } from 'sveltestrap'
import {trygun, user} from '../dir/init.js'

let text = ''
let test = 'no text'
let arr = []

trygun.get('testing').get('local').once(console.log).map().once((data) => {
    console.log('data: ', data)
    arr.push(data)
    arr = arr
})

function onMessage(e){
    console.log(e)
    trygun.get('testing').get('local').get(crypto.randomUUID()).put(text)
    // arr.push(text)
    // arr = arr
    text = ''
}
</script>
{#if arr.length}
    {#each arr as post}
    <p>{post}</p>
    {/each}
{:else}
<p>{test}</p>
{/if}
<Form>
    <Input type="text" bind:value={text}></Input>
    <Button type="button" on:click={onMessage}>Submit</Button>
</Form>
<style>
</style>