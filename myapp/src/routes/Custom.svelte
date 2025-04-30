<svelte:options customElement="my-math" />
<script lang="ts">
    function dispatch(type: string) {
        $host().dispatchEvent(new CustomEvent(type))
        // console.log($host())
        // document.dispatchEvent(new CustomEvent(type))
    }
</script>

<h2>Custom</h2>

<button type='button' onclick={() => dispatch('increment')}>
    Increment
</button>
<hr>
<button type='button' onclick={() => dispatch('decrement')}>
    Decrement
</button>