<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="send">
        <div class="title">Sign up</div>
        <router-link to="/login">
          <div class="add-account">Already have one?</div>
        </router-link>
        <div class="warn-text" v-if="signUpFail">{{ wranText }}</div>
        <div class="warn-text" v-if="wrongNameFormat">{{ wranNameText }}</div>
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
        <div class="warn-text" v-if="wrongEmailFormat">{{ wranEmailText }}</div>
        <input
          type="text"
          class="email"
          v-model="inputEmail"
          placeholder="Email"
        />
        <div class="warn-text" v-if="wrongPasswordFormat">
          {{ wranPasswrodText }}
        </div>
        <input
          type="password"
          class="password"
          v-model="inputPassword"
          placeholder="Password: at least 6 characters"
        />
        <div class="warn-text" v-if="wrongConfirmPassword">
          ⦁ Password and Confirm Password not same
        </div>
        <input
          type="password"
          class="confirmpassword"
          v-model="inputConfirmPassword"
          placeholder="Confirm Password"
        />
        <div class="button-container">
          <button type="submit" :disabled="isProcessing">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email } from "@vuelidate/validators";
import axios from "axios";
import router from "@/router";

export default {
  setup() {
    const inputFirstName = ref(sessionStorage.getItem("inputFirstName") || "");
    const inputLastName = ref(sessionStorage.getItem("inputLastName") || "");
    const inputEmail = ref(sessionStorage.getItem("inputEmail") || "");
    const inputPassword = ref("");
    const inputConfirmPassword = ref("");
    const isProcessing = ref(false);

    const wrongNameFormat = ref(false);
    const wranNameText = ref("");
    const wrongEmailFormat = ref(false);
    const wranEmailText = ref("");
    const wrongPasswordFormat = ref(false);
    const wranPasswrodText = ref("");
    const wrongConfirmPassword = ref(false);
    const nameRegex = /[^\u4e00-\u9fa5]/;
    const regex = /[^a-zA-Z0-9]/;

    const signUpFail = ref(false);
    const wranText = ref("");

    const v$ = useVuelidate();

    watch(inputFirstName, (newVal) => {
      sessionStorage.setItem("inputFirstName", newVal);
    });

    watch(inputLastName, (newVal) => {
      sessionStorage.setItem("inputLastName", newVal);
    });

    watch(inputEmail, (newVal) => {
      sessionStorage.setItem("inputEmail", newVal);
    });

    onMounted(() => {
      inputFirstName.value = sessionStorage.getItem("inputFirstName") || "";
      inputLastName.value = sessionStorage.getItem("inputLastName") || "";
      inputEmail.value = sessionStorage.getItem("inputEmail") || "";
    });

    const send = async function () {
      inputFirstName.value = inputFirstName.value.replace(/\s/g, "");
      inputLastName.value = inputLastName.value.replace(/\s/g, "");

      isProcessing.value = true;

      if (inputFirstName.value === "" || inputLastName.value === "") {
        isProcessing.value = false;
        wrongNameFormat.value = true;
        wranNameText.value = "⦁ First Name and Last Name cannot be empty!";
      } else {
        if (
          nameRegex.test(inputFirstName.value) ||
          nameRegex.test(inputLastName.value)
        ) {
          isProcessing.value = false;
          wrongNameFormat.value = true;
          wranNameText.value =
            "⦁ First Name and Last Name can only contain Chinese characters!";
        } else {
          wrongNameFormat.value = false;
        }
      }

      v$.value.$validate();
      inputEmail.value = inputEmail.value.replace(/\s/g, "");
      if (inputEmail.value === "") {
        wrongEmailFormat.value = true;
        wranEmailText.value = "⦁ Email cannot be empty!";
        isProcessing.value = false;
      } else {
        if (v$.value.inputEmail.$error) {
          wrongEmailFormat.value = true;
          wranEmailText.value = "⦁ Email format is wrong!";
          isProcessing.value = false;
        } else {
          wrongEmailFormat.value = false;
        }
      }

      inputPassword.value = inputPassword.value.replace(/\s/g, "");
      if (inputPassword.value === "" || inputPassword.value.length < 6) {
        isProcessing.value = false;
        wrongPasswordFormat.value = true;
        wranPasswrodText.value =
          "⦁ Password must be at least 6 characters long!";
      } else {
        if (
          regex.test(inputPassword.value) ||
          regex.test(inputPassword.value)
        ) {
          isProcessing.value = false;
          wrongPasswordFormat.value = true;
          wranPasswrodText.value =
            "⦁ Password can only contain letters and numbers!";
        } else {
          wrongPasswordFormat.value = false;
        }
      }

      if (inputPassword.value != inputConfirmPassword.value) {
        isProcessing.value = false;
        wrongConfirmPassword.value = true;
      } else {
        wrongConfirmPassword.value = false;
      }
      console.log(
        inputFirstName.value,
        inputLastName.value,
        inputEmail.value,
        inputPassword.value
      );

      if (
        !wrongNameFormat.value &&
        !wrongEmailFormat.value &&
        !wrongPasswordFormat.value &&
        !wrongConfirmPassword.value
      ) {
        console.log("send data");
        let data = {
          firstName: inputFirstName.value,
          lastName: inputLastName.value,
          email: inputEmail.value,
          password: inputPassword.value,
        };
        let jsonData = JSON.stringify(data);
        try {
          const response = await axios.post(
            "http://127.0.0.1:10000/adduser",
            jsonData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          ); // 處理響應
          if (response.data.status === "Success") {
            alert("註冊成功");
            sessionStorage.setItem("inputFirstName", "");
            sessionStorage.setItem("inputLastName", "");
            sessionStorage.setItem("inputEmail", "");
            router.push("/verify");
          } else if (response.data.status === "already registered") {
            signUpFail.value = true;
            wranText.value = "⦁ Email already registered!";
            isProcessing.value = false;
          }
        } catch (error) {
          // 處理錯誤
          console.error(error.response.data);
          isProcessing.value = false;
          signUpFail.value = true;
          wranText.value = "⦁ Something wrong!";
        }
      }
    };

    return {
      inputFirstName,
      inputLastName,
      inputEmail,
      inputPassword,
      inputConfirmPassword,
      isProcessing,

      signUpFail,
      wranText,

      wrongNameFormat,
      wranNameText,
      wrongEmailFormat,
      wranEmailText,
      wrongPasswordFormat,
      wranPasswrodText,
      wrongConfirmPassword,
      send,
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

.name-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name {
  width: 48%;
}

.warn-text {
  margin-bottom: -15px;
  margin-top: 15px;
  color: #b85c5c;
  font-weight: 600;
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
