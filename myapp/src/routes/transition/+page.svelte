<script>
	import { fade } from 'svelte/transition';
    import '../../styles/global.css'
    let isInner = $state(false)
    let isOuter = $state(false)
</script>
{#if isOuter}
    <div>
        {#if isInner}
            <div class='inner' transition:fade><h2>Transition fade</h2></div>
        {/if}
        {#if isInner}
            <div class='inner' transition:fade|global><h2>Transition fade Global</h2></div>
        {/if}
    </div>
{/if}
<button onclick={() => {
    isInner = !isInner
    isOuter = !isOuter
}}>
    Turn on/off transition fade
</button>
<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90vw;
        height: 40vh;
        margin: 0 auto;
        background-color: yellow;
    }
    .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40vw;
        height: 17vh;
        margin: 0 auto;
        border: 2px solid green;
        gap: 1rem;
    }
    button {
        display: inline-block;
        margin: 1rem;
    }
</style>