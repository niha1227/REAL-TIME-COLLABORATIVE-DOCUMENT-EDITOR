<template>
    <nav class="bg-blue-500 p-4 text-white flex justify-between">
      <h1 class="text-lg">Real-Time Document Editor</h1>
      <div>
        <router-link to="/" class="mr-4">Home</router-link>
        <router-link to="/document/1">Open Document</router-link>
      </div>
    </nav>
  </template>
  <style>
  a {
    text-decoration: none;
    color: rgb(20, 11, 153);
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  