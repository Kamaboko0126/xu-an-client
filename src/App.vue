<template>
  <HeaderItem />
  <router-view />
  <FooterItem />
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue";
import FooterItem from "./components/FooterItem.vue";

export default {
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Noto Sans TC", "Poppins", sans-serif;
}
a:visited {
  color: #000;
}
</style>
