<script lang='ts'>
    import '../../styles/global.css'
    import Snippet from './Snippet.svelte'
    import Div from './Div.svelte'
    import {snp} from './ExportSnippet.svelte'
    let flag = $state(false)
    function toggleFlag() {
        flag = !flag
    }
    let rocketCount = $state(10)
    const interval = setInterval(() =>{
        if(rocketCount > 0) return rocketCount--
        clearInterval(interval)
        }, 1000)
</script>
{@render snp(100, 600)}
{#snippet sum(a: number, b: number)}
    {@const res =  a + b}
    <h2>{a} + {b} = {res}</h2>
{/snippet}
{#snippet mult(a: number, b: number)}
{@const res = a * b}
    <h2>{a} * {b} = {res}</h2>
{/snippet}

{@render (flag ? mult : sum)(1, 3)}
{@render (flag ? mult : sum)(3, 7)}
{@render (flag ? mult : sum)(9, 8)}

<button type=button onclick={toggleFlag}>
    toggle sum & mult
</button>

<hr>
<hr>
<h2>
    {#if rocketCount > 0}
        {rocketCount}...
        {:else}
        🚀
    {/if}
</h2>
<Div text={'Some children with snippet'}>
    <ul>
        {#snippet header()}
            <li>fruit</li>
            <li>qty</li>
            <li>price</li>
            <li>total</li>
        {/snippet}
        {@render header()}
    </ul>
</Div>
{#snippet countdown(count: number)}
    {#if count > 0}
        <div>{count}...</div>
        {@render countdown(count - 1)}
        {:else}
        <h2>🚀</h2>
    {/if}
{/snippet}

{@render countdown(10)}

<Snippet {countdown}/>
