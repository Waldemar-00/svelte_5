<script lang="ts">
	import { onMount } from 'svelte'

    export async function loadingPosts( id: string = '') {
        const postJson = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(!postJson.ok) throw new Error(`${postJson.status}. URL: ${postJson.url}`)
        return await postJson.json()
    }
    let posts: any
    let post44: any
    let post777: any
    onMount(() => {
        posts = loadingPosts()
        post44 = loadingPosts('44')
        post777 = loadingPosts('777')
    })
</script>

{#await posts}
    <h1>Pending...</h1>
{:then posts}
<ul>
    {#each posts as post }
        <li>{post.title}</li>
    {/each}
</ul>
{:catch error}
    <h1>{error.message}</h1>
{/await}

<hr>

{#await post44 then post}
    <h2>{post?.id}</h2>
    <h2>{post?.title}</h2>
{/await}

<hr>

{#await post777 catch error}
    <h2 style="color: red">{error}</h2>
{/await}