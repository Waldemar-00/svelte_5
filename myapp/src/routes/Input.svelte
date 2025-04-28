<script lang="ts">
	import { untrack } from 'svelte';
    import '../styles/global.css'
    let value: null | number = $state(null)
    let answer: boolean = $state(false)
    let post: any = $state(null)
    function onChange(e: Event) {
        value = Number((e.target as HTMLInputElement).value)
    }
    $effect.pre(() => {
        if(value){
           untrack(() => answer = confirm('Request will be sending with new ID!'))
            untrack(() => answer) && fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
                        .then((response) => response.json())
                        .then((json) => {
                            post = json
                            console.log(json)
                        })
        }
        console.log($effect.tracking())
    })
    $effect(() => {if(value && answer)console.log(`Do something with value: ${value}, for example`)})
    $effect.root(() => {
        $effect(() => {
            if(post) {
                const h3 = document.querySelector('h3')
                if(h3) h3.innerHTML = post?.id
            }
        })
        return () => {
            console.log('I have already worked!')
        }
    })
</script>
<div>
    <input type="number" name='post number' {value} onchange={onChange} placeholder="write post ID">
</div>

<!-- svelte-ignore a11y_missing_content -->
<h3></h3>