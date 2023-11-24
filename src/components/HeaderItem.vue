<template>
  <header>
    <div class="container">
      <router-link to="/">
        <div class="logo">LOGO</div>
      </router-link>
      <div class="nav-items">
        <router-link to="/login" v-if="showLoginIcon">
          <div class="nav-item">
            <i class="material-icons person">person</i
            ><span class="person-text">訪客</span>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";

export default {
  setup() {
    const showLoginIcon = ref(true);
    const getRouter = useRoute();

    watch(
      () => getRouter.path,
      (newPath) => {
        console.log(newPath);
        if (newPath !== "/") {
          showLoginIcon.value = false;
        } else {
          showLoginIcon.value = true;
        }
      }
    );

    return {
      showLoginIcon,
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.3rem;
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

.logo{
  line-height: 36px;
  color: var(--main-color);
  font-weight: bolder;
}

.nav-items {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  color: var(--main-color);
  transition: color 0.15s ease-in-out;
}
.person {
  background: var(--main-color);
  border-radius: 50%;
  color: #fff;
  padding: 1px;
  transition: color 0.15s ease-in-out;
}
.person-text {
  margin-left: 10px;
  font-weight: bolder;
}
.nav-item:hover {
  color: var(--main-hover-color);
}
.nav-item:hover i.person {
  background: var(--main-hover-color);
}
</style>
