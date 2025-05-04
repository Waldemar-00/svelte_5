<script lang="ts">
	import { onMount } from 'svelte';

    let checked = $state(false)
    let plants = $state('grace')
    let filesArray: any = $state([])
    let file: any = $state()
    let selected = $state()
    let selectedMult: any = $state([])
    let open: boolean | undefined = $state()
    let articleText: string | undefined = $state()
    let textForArticle: string | undefined = $state()
    $inspect(checked).with(console.log)
    $inspect(plants).with(console.log)
    $inspect(filesArray).with(console.log)
    $inspect(file).with(console.log)
    $inspect(selected).with(console.log)
    $inspect(selectedMult).with(console.log)
    $inspect(open).with(console.log)
    $inspect(articleText).with(console.log)
    function changeFiles(event: any) {
        const array = Array.from(event?.target.files)
        filesArray = [...filesArray, ...array]
    }
    function changeSelects(event: any) {
        selectedMult = [...selectedMult, event?.target.value]
    }
    function setNewArticleText() {
        articleText = textForArticle
    }
</script>
<div>
    <label>
        <input type="checkbox" name='sun_question' bind:checked> Is the sun start?
    </label>
    <label>
        <input type="radio" name='plants' bind:group={plants} value='grace'> Grace
    </label>
   <label>
        <input type="radio" name='plants' bind:group={plants} value='tree'> Tree
   </label>
    <label>
        <input type="radio" name='plants' bind:group={plants} value='moss'> Moss
    </label>
     <label>
        <input type="radio" name='plants' bind:group={plants} value='lichen'> Lichen
    </label>
    <label for='file'>
        <input id='file' type="file" bind:files={file}>
    </label>
    <label for="files">
        <input id=files type="file" onchange={changeFiles}>
    </label>
</div>

<hr>
<select name="select" id="select" bind:value={selected}>
    <option value="one">one</option>
     <option value="two">two</option>
      <option value="three">three</option>
       <option value="four">four</option>
</select>
<hr>
<select name="selects" multiple id="selects" onchange={changeSelects}>
    <option value="one">one</option>
     <option value="two">two</option>
      <option value="three">three</option>
       <option value="four">four</option>
</select>
<details bind:open>
    <summary>Open</summary>
    <article contenteditable=true bind:innerText={articleText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ab amet inventore soluta alias fuga repudiandae? Amet cumque expedita, iusto ab velit vitae nobis, inventore vero est illum, dolores libero?
    Pariatur, dignissimos aliquam eum recusandae libero doloribus natus? Necessitatibus ipsum ab eum. Tenetur quia ipsam, blanditiis numquam repellat nam praesentium cupiditate eos repellendus corrupti repudiandae. Nesciunt suscipit expedita eligendi architecto.
    Necessitatibus, nihil. Similique dolorum, deleniti delectus laborum sapiente culpa harum tenetur deserunt sequi? Totam provident suscipit velit sit iure deserunt eligendi tenetur. Ipsum, ipsam? Laborum porro nulla unde quidem debitis!
    Dolorem accusamus repudiandae totam suscipit, architecto dicta consectetur debitis esse ullam qui, recusandae facere ipsum ab amet voluptate asperiores. Doloremque distinctio quasi aut ratione? Aliquam saepe exercitationem alias soluta similique.</article>
</details>
<input type="text" bind:value={textForArticle} onchange={setNewArticleText}>
<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        border: 2px solid aquamarine;
        border-radius: 1rem;
        gap: 1rem;
    }
</style>