<script>
	import { fade, fly } from 'svelte/transition';
    import '../../styles/global.css'
    import './transition.css'
    let isInner = $state(false)
    let isOuter = $state(false)

    let checked = $state(false)
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
<hr>
<label>
    <input type=checkbox bind:checked>
</label>

{#if checked}
    <div class=fly in:fly={{y: 270}} out:fade>
        <h2>Transition: fly in and fade out</h2>
    </div>
{/if}