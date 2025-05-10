<script lang="ts">
    import { setContext} from 'svelte'
    import Child from './Child.svelte'
    let commonState: any = $state({a: 10, message: 'Hello Context!'})
    setContext('CommonContext', commonState )
    const ForChildContext = {b: 700}
    setContext('ForChildContext', ForChildContext )
</script>
<h1>Context from parent to child</h1>
<h2>Parent state: {commonState.a}</h2>
<hr>
<h2>For Child Context: {ForChildContext.b}</h2>
<Child/>