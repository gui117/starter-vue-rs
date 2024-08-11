<script setup lang="ts">
import logo from '~/assets/logo.svg'
</script>

<template>
  <div flex="~ col items-center">
    <img mb-8 h-24 w-24 :src="logo" alt="vue">
    <h1 text-4xl text-gray font-italic>
      Hello World!
    </h1>
  </div>
</template>
