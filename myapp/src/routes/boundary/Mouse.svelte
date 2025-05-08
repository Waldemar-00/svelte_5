<script lang="ts">
    import '../../styles/global.css'
    let mouse = $state({y: 0, x: 0})
    function mouseMove(e: any) {
        mouse.y = e.clientY
        mouse.x = e.clientX
    }
    function notClick() {
        //@ts-ignore
        mouse = null
    }
</script>

<svelte:window
    onmousemove={mouseMove}
/>
<h2>Y: {mouse.y}</h2>
<h2>X: {mouse.x}</h2>
<button onclick={notClick}>Don't click here</button>