<script>
    import '../styles/global.css'
    let count = $state(10)
    const doubleCount = $derived(count * 2)
    function changeCount() {
        count++
    }
</script>
<h2>
   $derived count: {doubleCount}
</h2>
<button type="button" onclick={() => changeCount()}>
    Get double count
</button>