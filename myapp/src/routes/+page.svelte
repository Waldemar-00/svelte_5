<script lang='ts'>
import  '../styles/global.css'
import Nested from './Nested.svelte'
import Input from './Input.svelte'
import  '../events/event.math.svelte'
import {numObj} from './state.svelte'

let object: any = $state([{count: 0, prop: 'object', data: 'array', value: 'start'}])
let count = $state(0)
// $inspect(count).with(console.trace)
function increaseCount() {
    object[0].count = object[0].count + 1
}
function pushData() {
    object.push({str: 'new object has already pushed '})
}
class IsDone{
    done = $state(false)
    constructor(done: boolean) {
        this.done = done
        this.changeDone = this.changeDone.bind(this)
    }
    changeDone() {
        this.done = !this.done
    }
}
const done = new IsDone(false)
</script>

<!-- {@debug object} -->
<h1>Welcome to SvelteKit {numObj.num}</h1>
<input type=text name=value bind:value={() => object[0].value, (v) => object[0].value = v.toUpperCase() }>
<div>
    <button type="button" onclick={() => numObj.incFn()}>
    Increase num
    </button>
</div>

<button type=button onclick={increaseCount}>
Increase count {object[0].count}
</button>
<button type=button onclick={pushData}>
Push new data
</button>
<h2>{object[1]?.str}</h2>

<h2>Done is <span>{done.done}</span></h2>
<button type=button onclick={done.changeDone}>
Change Done
</button>

<Nested count={object[0].count} bind:value={object[0].value}/> //! binds to child
<Input/>
<h2>{count}</h2>
<my-math
    ondecrement={() => count -= 1}
	onincrement={() =>count += 1}
    ></my-math>