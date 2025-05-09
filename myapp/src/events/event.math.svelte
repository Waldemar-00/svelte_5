<svelte:options customElement="my-math" />
<script lang="ts">
    import '../styles/global.css' // NOT WORK FOR ELEMENT MY-MATH
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
<style>
    button {
        padding: 0.5rem;
        background-color: #fff;
        border: 1px solid black;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    h2 {
        color: purple;
    }
</style>