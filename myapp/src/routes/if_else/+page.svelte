
<script lang='ts'>
    let a = $state(0)
    function increaseOn(amount: number | 'reset') {
        if(amount === 'reset') a = 0
        else a = a + amount
    }
</script>
<h1>BLOCK IF_ELSE</h1>

<h2>
    {#if a >= 1000}
        The 'a' more then 1000
    {:else if a >= 100}
        The 'a' more then 100
    {:else if a >= 10}
         The 'a' more then 10
    {/if}
</h2>

<div>

    <button onclick={() => increaseOn(10)}>
        Increase on 10
    </button>
    <button onclick={() => increaseOn(100)}>
        Increase on 100
    </button>
    <button onclick={() => increaseOn(1000)}>
        Increase on 1000
    </button>
    <button onclick={() => increaseOn('reset')}>
        Reset
    </button>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
    }
</style>