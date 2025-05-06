<script lang='ts'>
    import '../../styles/global.css'
    import type {Action} from 'svelte/action'
    import {autofocus, changeBGC} from './use'
    let value = $state('')
    let red = $derived(value.length > 7)
    let bgc = $state('lightblue')
    // $inspect(bgc).with(console.log)
    function replacementBGC(color: string) {
        bgc = color
    }

    const changeColor: Action<HTMLDivElement, string, {
        ongreen: (e: CustomEvent) => void,
        onbrown: (e: CustomEvent) => void
    }> = (node, color) => {
       $effect(() => {
            node.style.backgroundColor = color
            node.dispatchEvent(new CustomEvent('ongreen'))
            node.dispatchEvent(new CustomEvent('onbrown'))
       })
    }
    function changeOnBrown(event: CustomEvent<any>) {
         console.log(event.target)
    }
</script>

<div class:red>
    <input type="text" bind:value class:red use:autofocus={true}>
</div>
<hr>
<div class='highlighter' use:changeBGC={bgc}></div>
<button onclick={() => replacementBGC('yellow')}>Yellow will not work</button>
<div class='highlighter' use:changeColor={'red'} ongreen={changeOnBrown}></div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid green;
        padding: 0.5rem;
    }
    .red {
        border: 2px solid red;
        color: red;
    }
    input {
        padding: 0.5rem;
    }
    .highlighter {
        margin: 0 auto;
        width: 50vw;
        height: 20vh;
        border: 2px solid blue;
        border-radius: 2rem;
    }
</style>