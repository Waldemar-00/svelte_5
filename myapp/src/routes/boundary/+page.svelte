<script>
    // @ts-nocheck
    import Mouse from './Mouse.svelte'
    import '../../styles/global.css'
</script>
<svelte:boundary>
    <Mouse/>
    {#snippet failed(error, reset)}
    <h2 style="color: red">{error.message}</h2>
        <button onclick={reset}>Reset this OOps!</button>
    {/snippet}
</svelte:boundary>
