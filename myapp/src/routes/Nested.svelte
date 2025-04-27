<script>
    import '../styles/global.css'
    let count = $state(10)
    const doubleCount = $derived(count * 2)
    const doubleCountByFn = $derived.by(() => count * 2)
    function changeCount() {
        count++
    }
</script>
<h2>
   $derived count: {doubleCount}
   <div>
    $derived.by ( with function ) count: {doubleCountByFn}
   </div>
</h2>
<button type="button" onclick={() => changeCount()}>
    Get double count
</button>