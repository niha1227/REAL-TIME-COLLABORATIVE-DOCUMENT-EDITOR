<template>
    <div class="p-4">
      <h2 class="text-xl mb-4">Editing Document {{ $route.params.id }}</h2>
      <div id="editor"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import Quill from "quill";
  import "quill/dist/quill.snow.css";
  import { io } from "socket.io-client";
  
  export default {
    setup() {
      const socket = io("http://localhost:5000"); // Replace with your backend WebSocket URL
      let quillEditor = ref(null);
  
      onMounted(() => {
        // Initialize Quill editor
        quillEditor.value = new Quill("#editor", {
          theme: "snow",
        });
  
        // Listen for document changes from server
        socket.on("document-update", (delta) => {
          quillEditor.value.updateContents(delta);
        });
  
        // Send changes to the server when user edits
        quillEditor.value.on("text-change", (delta, oldDelta, source) => {
          if (source === "user") {
            socket.emit("send-changes", delta);
          }
        });
  
        // Load initial document data
        socket.emit("get-document", "doc_" + window.location.pathname.split("/").pop());
      });
  
      onBeforeUnmount(() => {
        socket.disconnect();
      });
  
      return {};
    },
  };
  </script>
  
  <style>
  #editor {
    height: 300px;
    background: white;
  }
  </style>
  