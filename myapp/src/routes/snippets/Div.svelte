<script>
    let {text, children} = $props()
</script>
<div>
    <h2>{text}</h2>
    <h2>{@render children?.()}</h2>
</div>
<style>
    div {
        color: red;
        padding: 0.5rem;
        border-radius: 2px solid blue;
        border-radius: 0.5rem;
    }
</style>