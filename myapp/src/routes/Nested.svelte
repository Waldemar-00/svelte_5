<!--
@component
It's  component exists for learning SVELTE =>
It is my comment.
-->
<script>
    import '../styles/global.css'
    let {count: propCount = 0, value=$bindable(100)} = $props() //! $bindable binds to parent
    // console.log(propCount)
    let count = $state(propCount)
    const doubleCount = $derived(count * 2)
    const doubleCountByFn = $derived.by(() => count * 2)
    const uid = $props.id()
    // console.log(`UID ${uid} - binds with server`)
    function changeCount() {
        // $inspect.trace()
        value = value * 2
        count++
    }
    // $inspect(value, count).with(console.trace)
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