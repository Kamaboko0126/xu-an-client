<template>
  <HeaderItem />
  <router-view />
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue";

export default {
  components: {
    HeaderItem,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
a:visited{
  color: #000;
}
</style>
