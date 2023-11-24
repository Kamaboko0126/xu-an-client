<template>
  <footer>
    <div class="container">
      <HealthCheck />
    </div>
  </footer>
</template>

<script>
import HealthCheck from "./HealthCheck.vue";

export default {
  components: {
    HealthCheck,
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 1rem 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

@media (min-width: 544px) {
  .container {
    max-width: 576px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 940px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
