<script lang="ts">
    import '../../styles/global.css'
    let color = $state('green')
    function changeColor(c: string) {
        color = c
    }
    let truthy: boolean = $state(false)
    function toggleClass() {
        truthy = !truthy
    }
    let large = $state(false)
    function toggleSize() {
        large = !large
    }
</script>

<h1 style:color>Bind style and $state</h1>

<button style:color onclick={() => changeColor('brown')}>Change style color to Brown</button>
<button style:color onclick={() => changeColor('blue')}>Change style color to Blue</button>
<button style:color onclick={() => changeColor('pink')}>Change style color to Pink</button>
<button style:color|important = "purple" onclick={() => changeColor('purple')}>Change style color to Purple</button>
<hr>
<h2 class={{ purple: truthy, brown: !truthy }}>Classes in object</h2>
<button onclick={toggleClass}>Change class from green to red</button>
<hr>
<h2 class={[large && 'large', 'blue' ]}>Classes in Array</h2>
<button onclick={toggleSize}>Toggle font-size</button>
<style>
    .brown {
        color: brown;
        font-size: 4rem;
    }
    .purple {
        color: purple;
        font-size: 2rem;
    }
    .blue {
        color: blue
    }
    .large {
        font-size: 5rem;
    }
</style>