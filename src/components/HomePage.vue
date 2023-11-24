<template>
  <div class="banner">
    <div>
      <div>Hello World</div>
      <div>A place to put your book.</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
};
</script>

<style scoped>
.banner {
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.2rem 0;
  background: #888;
  color: #fff;
}

.banner div:nth-child(2) {
  font-size: 1.5rem;
}
</style>
