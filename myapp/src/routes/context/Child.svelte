<script>
    import '../../styles/global.css'
    import {getContext} from 'svelte'
    const CommonContext = getContext('CommonContext')
    function changeStateA() {
        CommonContext.a++
    }
    function changeStateB() {
        childState.b++
    }
    const childContext = getContext('ForChildContext')
    let childState = $state(childContext)
</script>

<h2>Child state: {CommonContext.a}</h2>
<h2>Gritting: {CommonContext.message}</h2>

<button onclick={changeStateA}>Change a in state</button>
<hr>
<h4>reactive context only for child</h4>
<h2>{childState.b}</h2>
<button onclick={changeStateB}>Change b in state</button>