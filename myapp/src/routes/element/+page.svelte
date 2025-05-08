<script lang="ts">
    let tag = $state('h1')
</script>


<svelte:element this={tag}>
    Svelte element with tag {tag}
</svelte:element>

<input type="text" bind:value={tag}>