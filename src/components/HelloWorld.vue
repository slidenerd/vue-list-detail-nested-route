<template>
  <div class="container">
    <div class="left">
      <div v-for="i in 5000" :key="i">
        <router-link
          :to="{
            name: 'index-news-id-title',
            params: { id: i, title: 'hey ' + i }
          }"
          no-prefetch
          >{{ i }}</router-link
        >
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.left {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}

.left a {
  display: block;
  padding: 0.5rem 1rem;
}

.right {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
</style>
