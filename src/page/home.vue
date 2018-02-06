<template>
    <div>
        <quill-editor class="editor-example bubble" ref="myTextEditor" v-model="content" :content="content" :options="editorOption" @change="onEditorChange($event)">
        </quill-editor>
         {{content}}
    </div>
   
</template>
<script>
import { quillEditor } from "vue-quill-editor";
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: "",
            editorOption: {
                // something config
                modules: {
                    toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ["clean"]
                    ]
                }
            }
        };
    },
    mounted() {
        // you can use current editor object to do something(editor methods)
        console.log("this is my editor", this.editor);
        // this.editor to do something...
    },
    methods: {
        onEditorBlur(editor) {
            console.log("editor blur!", editor);
        },
        onEditorFocus(editor) {
            console.log("editor focus!", editor);
        },
        onEditorReady(editor) {
            console.log("editor ready!", editor);
        },
        onEditorChange({ editor, html, text }) {
            // console.log('editor change!', editor, html, text)
            this.content = html;
        }
    },
    computed: {
        editor() {
            return this.$refs.myTextEditor.quillEditor;
        }
    }
};
</script>
<style lang='scss'>
.quill-editor,
  .quill-code {
    height: 20rem;
  }
  .quill-editor {
    border: 1px solid #ccc;
    border-bottom: none;
  }
  .quill-code {
    border: none;
    height: auto;
    > code {
      width: 100%;
      margin: 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 0;
      height: 10rem;
      overflow-y: auto;
    }
  }
</style>
