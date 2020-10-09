<template>
    <div>
        <h1>
            Editor
        </h1>
        <MarkdownEditor />
        <youtube :video-id="videoId"/>
    </div>
</template>

<script>
import MarkdownEditor from "../components/MarkdownEditor"

export default {
    Name: "Editor",
    components: {
        MarkdownEditor
    },
    data() {
        return {
            videoId: "v8bZVdTgXoY"
        }
    }
}
</script>