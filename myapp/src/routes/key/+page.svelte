<script>
    import '../../styles/global.css'
    import { fade } from 'svelte/transition'
    let value = $state(100)
    function changeValue() {
        value++
    }
</script>
<h1>KEY</h1>
<div class="fade_again">
    {#key value}
    <h2 transition:fade>{value}</h2>
    {/key}

    <button type=button class=btn-fade onclick={changeValue}>Change value</button>
</div>

<style>
    .fade_again{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .btn-fade{
        height: 70px;
    }
</style>