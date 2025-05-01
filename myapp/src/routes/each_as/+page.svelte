<script lang='ts'>
    import '../../styles/global.css'
    const array = $state(['MARIA', 'BRANDON', 'LUCIA', "JOHN", 'MARTIN', "ULADZIMIR"])
    function pushName(name: string){
        array.push(name)
    }
</script>
<h1>Each_as construction</h1>

<div class=grid>
    <ul>
        {#each array as name, i (name + i)}
            <li>{i + 1}. {name}</li>
            {:else}
            <li>No names</li>
        {/each}
    </ul>
    <button class=margo type='button' onclick={() => pushName("MARGO")}>
        Push name MARGO
    </button>
</div>
<ul>
    {#each  {length: 5}, i }
    {#each  {length: 5}, a }
        <li>{(i + 1) * (a + 1)}</li>
    {/each}
    {/each}
</ul>
<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .margo{
        height: 70px;
    }
    ul {
        list-style-type: none;
    }
</style>