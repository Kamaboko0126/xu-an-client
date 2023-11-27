<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="edit">
        <div class="title">更改密碼</div>
        <div class="warn-text" v-if="wrongOldPasswordFormat">
          {{ wranOldPasswordText }}
        </div>
        <input
          type="password"
          class="password"
          v-model="inputOldPassword"
          placeholder="Old Password"
        />
        <div class="warn-text" v-if="wrongNewPasswordFormat">
          {{ wranNewPasswordText }}
        </div>
        <input
          type="password"
          class="password"
          v-model="inputNewPassword"
          placeholder="New Password"
        />
        <div class="warn-text" v-if="wrongConfirmPassword">
          ⦁ Password and Confirm Password not same
        </div>
        <input
          type="password"
          class="password"
          v-model="inputConfirmPassword"
          placeholder="Confirm Password"
        />
        <div class="button-container">
          <button type="submit" :disabled="isProcessing">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const inputOldPassword = ref("");
    const inputNewPassword = ref("");
    const inputConfirmPassword = ref("");
    const user_id = ref(sessionStorage.getItem("user_id") || "");

    const isProcessing = ref(false);

    const wrongOldPasswordFormat = ref(false);
    const wranOldPasswordText = ref("");
    const wrongNewPasswordFormat = ref(false);
    const wranNewPasswordText = ref("");
    const wrongConfirmPassword = ref(false);

    const router = useRouter();
    const regex = /[^a-zA-Z0-9]/;

    const edit = async () => {
      isProcessing.value = true;

      inputOldPassword.value = inputOldPassword.value.replace(/\s/g, "");
      inputNewPassword.value = inputNewPassword.value.replace(/\s/g, "");
      inputConfirmPassword.value = inputConfirmPassword.value.replace(
        /\s/g,
        ""
      );
      if (inputOldPassword.value === "") {
        wrongOldPasswordFormat.value = true;
        wranOldPasswordText.value = "⦁ 密碼不能為空";
        isProcessing.value = false;
      } else {
        if (regex.test(inputOldPassword.value)) {
          wrongOldPasswordFormat.value = true;
          wranOldPasswordText.value = "⦁ 密碼只能包含英文和數字";
          isProcessing.value = false;
        } else {
          wranOldPasswordText.value = false;
        }
      }

      if (inputNewPassword.value === "") {
        wrongNewPasswordFormat.value = true;
        wranNewPasswordText.value = "⦁ 密碼不能為空";
        isProcessing.value = false;
      } else {
        if (regex.test(inputNewPassword.value)) {
          wrongNewPasswordFormat.value = true;
          wranNewPasswordText.value = "⦁ 密碼只能包含英文和數字";
          isProcessing.value = false;
        } else {
          if (inputOldPassword.value === inputNewPassword.value) {
            wrongNewPasswordFormat.value = true;
            wranNewPasswordText.value = "⦁ 新密碼不能和舊密碼相同";
            isProcessing.value = false;
          } else {
            wranNewPasswordText.value = false;
          }
          wranNewPasswordText.value = false;
        }
      }

      if (inputConfirmPassword.value === inputNewPassword.value) {
        wrongConfirmPassword.value = false;
      } else {
        wrongConfirmPassword.value = true;
        isProcessing.value = false;
      }

      if (
        !wrongOldPasswordFormat.value &&
        !wrongNewPasswordFormat.value &&
        !wrongConfirmPassword.value
      ) {
        let data = {
          user_id: user_id.value,
          oldPassword: inputOldPassword.value,
          newPassword: inputNewPassword.value,
        };
        let jsonData = JSON.stringify(data);

        try {
          const res = await axios.post(
            "http://127.0.0.1:10000/change",
            jsonData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (res.data.status == "success") {
            alert("更改成功");
            router.push("/userinfo");
            // 你可以在這裡添加其他成功更新後的操作
          } else if (res.data.status == "wrong password") {
            wrongOldPasswordFormat.value = true;
            wranOldPasswordText.value = "⦁ 密碼錯誤";
            // 你可以在這裡添加其他更新失敗的操作
          } else {
            wrongOldPasswordFormat.value = true;
            isProcessing.value = false;
            wranOldPasswordText.value = "⦁ 更新失敗";
          }
        } catch (error) {
          console.error(error.response.data);
          // 處理錯誤
        }
      }
    };

    return {
      inputOldPassword,
      inputNewPassword,
      inputConfirmPassword,

      wrongOldPasswordFormat,
      wranOldPasswordText,
      wrongNewPasswordFormat,
      wranNewPasswordText,
      wrongConfirmPassword,

      isProcessing,
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

.warn-text {
  margin-top: 15px;
  margin-bottom: -10px;
  color: #b85c5c;
  font-weight: 600;
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

button:disabled {
  background-color: #999;
  cursor: not-allowed;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
