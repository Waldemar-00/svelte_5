<script lang='ts'>
    let visibility = $state('visible')
    function handleMouseEnterOrLeave(e: any) {
        if(e.type === 'mouseenter')console.log("ENTER")
        else console.log("LEAVE")
    }

</script>
<div class=body>
    <h1>Mouse Enter and Leave</h1>
</div>
<svelte:body onmouseenter={handleMouseEnterOrLeave} onmouseleave={handleMouseEnterOrLeave}/>

<style>
    .body {
        width: 50vw;
        height: 20vh;
        background-color: yellow;
        border: 2px dotted green;
        cursor: pointer;
    }
</style>