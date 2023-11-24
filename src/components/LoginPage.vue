<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="title">Sign in</div>
        <router-link to="/signup"><div class="add-account">Need an account?</div></router-link>
        <input type="text" v-model="email" placeholder="Email" />
        <input type="text" v-model="password" placeholder="Password" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 15px;
}

@media (min-width: 768px) {
  .row {
    max-width: 50%;
    padding: 0 15px;
  }
}

.title {
  font-size: 2.5rem;
  text-align: center;
}

.add-account {
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  cursor: pointer;
  color: #888;
  transition: color 0.15s ease-in-out;
}

.add-account:hover {
  color: #666;
}

input {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
  color: #555595cc;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 100%;
  margin-top: 25px;
}
</style>
