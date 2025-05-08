<script lang="ts">
    import '../../styles/global.css'
    function alertKey(e: any) {
        alert(`Has been pressed ${e.key} key`)
    }
</script>
<h1>Svelte:window</h1>
<svelte:window onkeydown={alertKey}/>