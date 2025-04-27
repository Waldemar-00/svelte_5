<script lang='ts'>
import  '../styles/global.css'
import {numObj} from './state.svelte'
let object: any = $state([{count: 0, prop: 'object', data: 'array'}])
function increaseCount() {
    object[0].count++
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


<h1>Welcome to SvelteKit {numObj.num}</h1>
<div>
    <button type="button" onclick={() => numObj.incFn()}>
    Increase num
    </button>
</div>

<button type="button" onclick={increaseCount}>
Increase count {object[0].count}
</button>
<button type="button" onclick={pushData}>
Push new data
</button>
<h2>{object[1]?.str}</h2>

<h2>Done is <span>{done.done}</span></h2>
<button type="button" onclick={done.changeDone}>
Change Done
</button>
