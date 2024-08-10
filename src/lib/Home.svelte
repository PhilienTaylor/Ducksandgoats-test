<script>
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, InputGroup, Input } from 'sveltestrap'
import trygun from '../../dir/init.js'

let text = ''
let test = 'no text'
let arr = []

trygun.get('testing').get('local').get({'.': {'<': '0'}, '%': 100000}).once().map().once((data) => {
    arr.push(data)
})

function onMessage(e){
    console.log(e)
    arr.push(text)
    trygun.get('testing').get('local').get(crypto.randomUUID()).put(text)
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