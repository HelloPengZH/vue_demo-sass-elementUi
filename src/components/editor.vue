<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
  </quill-editor>
</template>

<script>
// you can also register quill modules in the component
import Quill from "quill";

export default {
     data() {
      return {
        name: '02-example',
        content: `<h1 class="ql-align-center">
                    <span class="ql-font-serif"><span class="ql-cursor">﻿</span>I am Example 2!</span></span>
                  </h1>
                  <p><br></p>
                  <p><span class="ql-font-serif">Whenever you play the game of thrones, you either win or die. There is no middle ground.</span></p>
                  <p><br></p>
                  <p><strong class="ql-font-serif">Some war against sword and spear to win, and the others the crow and the paper to win.</strong></p>
                  <p><br></p>
                  <p><u class="ql-font-serif">Dead history is write in ink, the living sort in blood.</u></p>
                  <p><br></p>
                  <p><em class="ql-font-serif">They're only numbers. Numbers on paper. Once you understand that, it's easy to make them behave.</em></p>
                  <p><br></p>
                  <p><span class="ql-font-serif">Every time we deal with an enemy, we create two more.</span></p>
                  <p><br></p>
                  <p><span class="ql-font-serif">So the king has decreed. The small council consents.</span></p>
                  <p><br></p>
                  <p><span class="ql-font-serif">Chaos not is a pit, chaos is a ladder.</span></p>
                  <p><br></p>
                  <p><span class="ql-font-serif">A chain needs all sorts of metals, and a land needs all sorts of people.</span></p>
                  <p><br></p>
                  <p><span class="ql-font-serif">When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.</p>
                  `,
        editorOption: {
          theme: 'bubble',
          placeholder: "输入任何内容，支持html",
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['link', 'image'],
              ['clean']
            ]
          }
        }
      }
    },
    // manually control the data synchronization
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
    methods: {
        onEditorBlur(quill) {
            console.log("editor blur!", quill);
        },
        onEditorFocus(quill) {
            console.log("editor focus!", quill);
        },
        onEditorReady(quill) {
            console.log("editor ready!", quill);
        },
        onEditorChange({ quill, html, text }) {
            console.log("editor change!", quill, html, text);
            this.content = html;
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    },
    mounted() {
        console.log("this is current quill instance object", this.editor);
    }
};
</script>