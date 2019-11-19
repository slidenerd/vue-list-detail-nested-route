<template>
  <main>
    <h1>{{ $route.params.title }}</h1>
    <p>
      Content that comes under the title for {{ $route.params.id }}, are you
      happy now?
    </p>
  </main>
</template>

<script>
export default {
  key: 'articles'
}
</script>

<style></style>