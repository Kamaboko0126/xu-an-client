<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="title">Sign in</div>
        <router-link to="/signup">
          <div class="add-account">Need an account?</div>
        </router-link>
        <div class="warn-text" v-if="wrongFormat">{{ wrongText }}</div>
        <input
          type="text"
          class="email"
          :class="{ 'mt-15': !wrongFormat }"
          @blur="emailCheck"
          v-model="inputEmail"
          placeholder="Email"
        />
        <input
          type="password"
          class="password"
          @blur="passwordCheck"
          v-model="inputPassword"
          placeholder="Password"
        />
        <div class="button-container">
          <button @click="signIn">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email } from "@vuelidate/validators";
import axios from "axios";

export default {
  setup() {
    const inputEmail = ref("");
    const inputPassword = ref("");
    const wrongFormat = ref(false);
    const wrongText = ref("");
    const firstInputEmail = ref(true);
    const firstInputPassword = ref(true);

    const v$ = useVuelidate();

    const emailCheck = () => {
      v$.value.$validate();

      if (firstInputEmail.value) {
        if (inputEmail.value != "") {
          firstInputEmail.value = false;
          if (!v$.value.inputEmail.$error) {
            wrongFormat.value = false;
            if (!firstInputPassword.value) {
              if (inputPassword.value.length < 6) {
                wrongFormat.value = true;
                wrongText.value =
                  "⦁ The password must be at least 6 characters";
              } else {
                wrongFormat.value = false;
              }
            }
          } else {
            wrongFormat.value = true;
            wrongText.value = "⦁ The email format is incorrect";
            console.log(v$.value.inputEmail.$errors);
          }
        } else {
          console.log("first email check && is null");
        }
        console.log("first email check");
      } else {
        if (inputEmail.value == "") {
          wrongFormat.value = true;
          wrongText.value = "⦁ The email can't be empty";
        } else {
          if (!v$.value.inputEmail.$error) {
            wrongFormat.value = false;
            if (!firstInputPassword.value) {
              if (inputPassword.value.length < 6) {
                wrongFormat.value = true;
                wrongText.value =
                  "⦁ The password must be at least 6 characters";
              } else {
                wrongFormat.value = false;
              }
            }
          } else {
            wrongFormat.value = true;
            wrongText.value = "⦁ The email format is incorrect";
            console.log(v$.value.inputEmail.$errors);
          }
        }
      }
    };

    const passwordCheck = function () {
      if (firstInputPassword.value) {
        if (inputPassword.value !== "") {
          firstInputPassword.value = false;
          if (inputPassword.value.length < 6) {
            wrongFormat.value = true;
            wrongText.value = "⦁ The password must be at least 6 characters";
          } else {
            if (!firstInputEmail.value) {
              v$.value.$validate();
              if (v$.value.inputEmail.$error) {
                wrongFormat.value = true;
                wrongText.value = "⦁ The email format is incorrect";
              } else {
                wrongFormat.value = false;
              }
            }
          }
        } else {
          console.log("first password check && is null");
        }
        console.log("first password check");
      } else {
        if (inputPassword.value == "") {
          wrongFormat.value = true;
          wrongText.value = "⦁ The password can't be empty";
        } else {
          if (inputPassword.value.length < 6) {
            wrongFormat.value = true;
            wrongText.value = "⦁ The password must be at least 6 characters";
          } else {
            if (!firstInputEmail.value) {
              v$.value.$validate();
              if (v$.value.inputEmail.$error) {
                wrongFormat.value = true;
                wrongText.value = "⦁ The email format is incorrect";
              } else {
                wrongFormat.value = false;
              }
            }
          }
        }
      }
    };

    const signIn = async function () {
      if (inputEmail.value == "" || inputPassword.value == "") {
        wrongFormat.value = true;
        wrongText.value = "⦁ The email or password can't be empty";
      } else {
        if (!wrongFormat.value) {
          let data = {
            email: inputEmail.value,
            password: inputPassword.value,
          };
          let jsonData = JSON.stringify(data);

          console.log("login");
          try {
            const res = await axios.post(
              "http://127.0.0.1:10000/login",
              jsonData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            console.log(res.data.status);
            if (res.data.status == "success") {
              alert("登入成功");
            } else if (res.data.status == "invalid email") {
              alert("無效的信箱，請重新輸入");
            } else if (res.data.status == "verify yet") {
              alert("尚未驗證信箱，請至信箱收取驗證信");
            } else if (res.data.status == "wrong password") {
              alert("密碼錯誤");
            }
            // 處理 response
          } catch (error) {
            console.error(error.response.data);
            // 處理錯誤
          }
        }
      }
    };

    return {
      inputEmail,
      inputPassword,
      emailCheck,
      wrongFormat,
      wrongText,
      signIn,
      passwordCheck,
      v$,
    };
  },
  validations() {
    return {
      inputEmail: { email },
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

.add-account {
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  cursor: pointer;
  color: var(--main-color);
  transition: color 0.15s ease-in-out;
}

.add-account:hover {
  color: var(--main-hover-color);
}

.warn-text {
  margin-top: 15px;
  color: #b85c5c;
  font-weight: 600;
}

.mt-15 {
  margin-top: 15px;
}

input {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
  color: var(--main-hover-color);
  background-color: #fff;
  border: 1.5px solid var(--main-color);
  width: 100%;
}
input::placeholder {
  color: var(--main-color);
}

.password {
  margin-top: 25px;
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
