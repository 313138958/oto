<template>
  <div class="home">
    HOME
    <div v-for="item in list" :key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getlist" });
  }
};
</script>
