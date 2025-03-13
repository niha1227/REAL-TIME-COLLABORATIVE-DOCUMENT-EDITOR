<template>
    <quill-editor v-model="content" @update:modelValue="updateDocument" />
  </template>
  
  <script>
  import { QuillEditor } from "@vueup/vue-quill";
  import { ref } from "vue";
  import { io } from "socket.io-client";
  
  export default {
    components: { QuillEditor },
    setup() {
      const content = ref("");
      const socket = io("http://localhost:5000");
  
      socket.on("document-update", (newContent) => {
        content.value = newContent;
      });
  
      function updateDocument() {
        socket.emit("document-update", content.value);
      }
  
      return { content, updateDocument };
    },
  };
  </script>
  