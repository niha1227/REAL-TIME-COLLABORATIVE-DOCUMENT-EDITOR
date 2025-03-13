<template>
    <aside class="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 class="text-xl">Documents</h2>
      <ul>
        <li v-for="doc in documents" :key="doc.id">
          <router-link :to="'/document/' + doc.id">{{ doc.name }}</router-link>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    computed: {
      ...mapState(["documents"]),
    },
  };
  </script>
  