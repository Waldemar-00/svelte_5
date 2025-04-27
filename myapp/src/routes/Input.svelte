<script lang="ts">
    import '../styles/global.css'
    let value = $state(null)

    $effect(() => {
        if(typeof value === 'number') fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
                                            .then((response) => response.json())
                                            .then((json) => console.log(json))
    })
</script>
<div>
    <input type="number" name='post number' bind:value={value} placeholder="write post ID">
</div>