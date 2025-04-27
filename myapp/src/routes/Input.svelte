<script lang="ts">
    import '../styles/global.css'
    let value: null | number = $state(null)
    function onChange(e: Event) {
        const inputValue = Number((e.target as HTMLInputElement).value)
        if(typeof inputValue === 'number') {
            value = inputValue
            fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`)
                .then((response) => response.json())
                .then((json) => console.log(json))
        }
    }
    $effect(() => {if(typeof value === 'number')console.log(`Do something with value: ${value}, for example`)})
</script>
<div>
    <input type="number" name='post number' {value} onchange={onChange} placeholder="write post ID">
</div>