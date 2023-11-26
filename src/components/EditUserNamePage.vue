<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="title">編輯姓名</div>
        <div class="name-container">
          <input
            type="text"
            class="name"
            v-model="inputFirstName"
            placeholder="First Name"
          />
          <input
            type="text"
            class="name"
            v-model="inputLastName"
            placeholder="Last Name"
          />
        </div>
        <input
          type="password"
          class="password"
          v-model="inputPassword"
          placeholder="Password"
        />
        <div class="button-container">
          <button @click="edit">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const inputFirstName = ref(sessionStorage.getItem("userfirstname"));
    const inputLastName = ref(sessionStorage.getItem("userlastname"));
    const inputPassword = ref("");
    const userId = ref(sessionStorage.getItem("userid"));
    const router = useRouter();

    const edit = async () => {
      let data = {
        user_id: userId.value,
        password: inputPassword.value,
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
      };
      let jsonData = JSON.stringify(data);

      try {
        const res = await axios.post("http://127.0.0.1:10000/edit", jsonData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.data.status == "success") {
          sessionStorage.setItem("userfirstname", res.data.firstname);
          sessionStorage.setItem("userlastname", res.data.lastname);
          router.push("/userinfo");
          // 你可以在這裡添加其他成功更新後的操作
        } else if (res.data.status == "wrong password") {
          alert("密碼錯誤");
          // 你可以在這裡添加其他更新失敗的操作
        } else {
          alert("更新失敗");
        }
      } catch (error) {
        console.error(error.response.data);
        // 處理錯誤
      }
    };

    return {
      inputFirstName,
      inputLastName,
      inputPassword,
      edit,
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
