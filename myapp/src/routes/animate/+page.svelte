<script lang='ts'>
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';

    let posts: any = $state()
    onMount(async () => {
        posts = await getPosts()
    })
    async function getPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await response.json()
    }
    function deletePost(id: number) {
        console.log('delete', id)
        if(Array.isArray(posts)) posts = posts.filter((item: { id: number }) => item.id !== id)
    }
</script>

<ul>
    {#each  posts as post (post.id)}
        <li animate:flip={{delay: 500}} ondblclick={() => deletePost(post.id)}>{post.id}. {post.title}</li>
    {/each}
</ul>
<style>
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        list-style: none;
        cursor: pointer;
    }
    li {
        background-color:bisque;
        padding: 0.5rem;
        color: green;
        border-radius: 4px;
    }
</style>