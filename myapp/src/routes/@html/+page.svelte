<script>
    import '../../styles/global.css'
    import sanitizeHtml from 'sanitize-html'
    const html = '<img src=x onerror=alert(1) /><h1 style="color: red">hello</h1><h2>hello</h2>'
    const cleanHtml = sanitizeHtml(html, {
        allowedAttributes: {'h1': ['style']}
    })
    console.log(cleanHtml)
</script>

{@html cleanHtml}