<script lang='ts'>
    let visibility = $state('visible')
    function visibilityChange(e: any) {
        console.log(`Document is hidden: ${e.target.hidden.toString().toUpperCase()}`)
    }

</script>
<div class=visibility>
    <h1>Change visibility</h1>
</div>
<svelte:document onvisibilitychange={visibilityChange}/>

<style>
    .visibility {
        width: 50vw;
        height: 20vh;
        background-color: yellow;
        border: 2px dotted green;
        cursor: pointer;
    }
</style>