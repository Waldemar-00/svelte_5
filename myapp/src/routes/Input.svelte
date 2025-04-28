<script lang="ts">
	import { untrack } from 'svelte';
    import '../styles/global.css'
    let value: null | number = $state(null)
    let answer: boolean = $state(false)
    function onChange(e: Event) {
        value = Number((e.target as HTMLInputElement).value)
    }
    $effect.pre(() => {
        if(value){
           untrack(() => answer = confirm('Request will be sending with new ID!'))
            untrack(() => answer) && fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
                        .then((response) => response.json())
                        .then((json) => console.log(json))
        }
    })
    $effect(() => {if(value && answer)console.log(`Do something with value: ${value}, for example`)})
</script>
<div>
    <input type="number" name='post number' {value} onchange={onChange} placeholder="write post ID">
</div>