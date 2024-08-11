<script>
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, InputGroup, Input } from 'sveltestrap'
import {trygun, user} from '../dir/init.js'

let text = ''
let test = 'no text'
let arr = []
let radioGroup = null
let index = '0'

function posts(){
    trygun.get('testing').get({'.': {'>': index}, '%': 50000}).once(console.log).map().once((data, prop) => {
        console.log(data)
        if(index < prop){
            index = prop
            arr.push(data)
            arr = arr
        }
    })
}

function handleSubmit(e){
  e.preventDefault()
  if(!text || !document.getElementById('file').files || !document.getElementById('file').files.length){
    return
  }
  if(document.getElementById('file').files && document.getElementById('file').files.length){
        const formData = new FormData()
        for(let i = 0;i < document.getElementById('file').files.length;i++){
            formData.append('file', document.getElementById('file').files[i], document.getElementById('file').files[i].name)
        }
        console.log(formData)
        let hostname
        if(radioGroup === 'ipfs'){
            hostname = '.'
        }
        if(radioGroup === 'hyper'){
            hostname = '_'
        }
        fetch(`${radioGroup}://${hostname}/`, {method: 'POST', body: formData, headers: {'Accept': 'application/json'}}).then((data) => {
          console.log(data);
          return data.json();
        }).then((data) => {
          console.log(data[0].lastIndexOf('.'), data[0], {text, file: data[0]})
          trygun.get('testing').get(crypto.randomUUID()).put({text, file: data[0]})
          text = ''
          radioGroup = null
        }).catch((err) => {
            console.error(err)
        })
    }
}
posts()
</script>
<Form on:submit={handleSubmit}>
    <Input type="file" id="file"></Input>
    {#each ['ipfs', 'hyper'] as value}
        <Input type="radio" bind:group={radioGroup} {value} label={value}/>
    {/each}
    <Input type="textarea" bind:value={text}></Input>
    <Button type="submit">submit</Button>
</Form>
{#if arr.length}
    {#each arr as post}
    {#if ['.jpg', '.jpeg', '.png', '.gif', '.ico', '.bmp', '.apng', '.webp'].includes(post.file.slice(post.file.lastIndexOf('.')))}
        <img src={post.file} alt={post.file}>
    {/if}
    {#if ['.mp4', '.ogg', '.webm'].includes(post.file.slice(post.file.lastIndexOf('.')))}
        <video src={post.file} controls><track kind="captions"></video>
    {/if}
    {#if ['.mp3', '.ogg', '.wav'].includes(post.file.slice(post.file.lastIndexOf('.')))}
        <audio src={post.file} controls></audio>
    {/if}
    <p>{post.text}</p>
    {/each}
    <Button type="button" on:click={posts}>More</Button>
{:else}
<p>{test}</p>
{/if}
<style>
</style>