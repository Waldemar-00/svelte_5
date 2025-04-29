<script>
    import '../styles/global.css'
    let {count: propCount = 0, value=$bindable(100)} = $props() //! $bindable binds to parent
    console.log(propCount)
    let count = $state(propCount)
    const doubleCount = $derived(count * 2)
    const doubleCountByFn = $derived.by(() => count * 2)
    function changeCount() {
        value = value * 2
        count++
    }
</script>
<h2>
   <div>count: {count}</div>
   $derived count: {doubleCount}
   <div>
    $derived.by ( with function ) count: {doubleCountByFn}
   </div>
</h2>
<h2>VALUE: {value}</h2>
<button type="button" onclick={() => changeCount()}>
    Get double count
</button>