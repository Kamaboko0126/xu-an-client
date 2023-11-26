<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="title">使用者資訊</div>
        <div class="edit-container">
          <router-link to="/edit">
            <div class="edit">編輯</div>
          </router-link>
        </div>
        <div class="name-container">
          <input
            type="text"
            class="name"
            v-model="inputFirstName"
            placeholder="First Name"
            readonly
          />
          <input
            type="text"
            class="name"
            v-model="inputLastName"
            placeholder="Last Name"
            readonly
          />
        </div>
        <input
          type="text"
          class="email"
          v-model="inputEmail"
          placeholder="Email"
          readonly
        />
        <div class="edit-container">
          <router-link to="/change">
            <div class="edit" @click="edit">更改密碼</div>
          </router-link>
        </div>
        <input
          type="password"
          class="password"
          v-model="inputPassword"
          placeholder="Password: at least 6 characters"
          readonly
        />
        <div class="button-container">
          <button @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const router = useRouter();
    const inputFirstName = ref(sessionStorage.getItem("userfirstname"));
    const inputLastName = ref(sessionStorage.getItem("userlastname"));
    const inputEmail = ref(sessionStorage.getItem("useremail"));
    const inputPassword = ref("*********");

    const logout = () => {
      sessionStorage.removeItem("islogin");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("inputEmail");
      sessionStorage.removeItem("token");
      sessionStorage.setItem("islogin", false);
      router.push("/");
    };

    onMounted(() => {
      if (sessionStorage.getItem("islogin") == "false") {
        router.push("/");
      }
    });

    return {
      logout,
      inputFirstName,
      inputLastName,
      inputEmail,
      inputPassword,
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
  color: var(--main-color);
}

.edit-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.edit {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  cursor: pointer;
  color: var(--main-color);
  transition: color 0.15s ease-in-out;
  text-decoration: underline;
}

.edit:hover {
  color: var(--main-hover-color);
}

.name-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name {
  width: 48%;
}

.password,
.name {
  margin-top: 10px;
}

input {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
  color: var(--main-hover-color);
  background-color: #fff;
  border: 1.5px solid var(--main-color);
  width: 100%;
  margin-top: 25px;
}

input::placeholder {
  color: var(--main-color);
}

button {
  color: #fff;
  background: var(--main-color);
  cursor: pointer;
  border-radius: 0.3rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border: none;
  margin-top: 25px;
  transition: background 0.15s ease-in-out;
}

button:hover {
  background: var(--main-hover-color);
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
