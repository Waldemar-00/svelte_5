<script>
    import sanitizeHtml from 'sanitize-html'
    const html = '<img src=x onerror=alert(1) /><b>hello</b>'
    const cleanHtml = sanitizeHtml(html)
</script>

{@html cleanHtml}