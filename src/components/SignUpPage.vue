<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="send">
        <div class="title">Sign up</div>
        <router-link to="/login">
          <div class="add-account">Already have one?</div>
        </router-link>
        <div class="warn-text" v-if="wrongNameFormat">⦁ Wrong format</div>
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
        <div class="warn-text" v-if="wrongEmailFormat">⦁ Wrong format</div>
        <input
          type="text"
          class="email"
          v-model="inputEmail"
          placeholder="Email"
        />
        <div class="warn-text" v-if="wrongPasswordFormat">⦁ Wrong format</div>
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
          <button type="submit">Send</button>
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

export default {
  setup() {
    const inputFirstName = ref(sessionStorage.getItem("inputFirstName") || "");
    const inputLastName = ref(sessionStorage.getItem("inputLastName") || "");
    const inputEmail = ref(sessionStorage.getItem("inputEmail") || "");
    const inputPassword = ref("");
    const inputConfirmPassword = ref("");
    const wrongNameFormat = ref(false);
    const wrongEmailFormat = ref(false);
    const wrongPasswordFormat = ref(false);
    const wrongConfirmPassword = ref(false);
    const nameRegex = /[^\u4e00-\u9fa5]/;
    const regex = /[^a-zA-Z0-9]/;

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
      if (inputFirstName.value === "" || inputLastName.value === "") {
        wrongNameFormat.value = true;
      } else {
        if (
          nameRegex.test(inputFirstName.value) ||
          nameRegex.test(inputLastName.value)
        ) {
          wrongNameFormat.value = true;
        } else {
          wrongNameFormat.value = false;
        }
      }

      v$.value.$validate();
      inputEmail.value = inputEmail.value.replace(/\s/g, "");
      if (v$.value.inputEmail.$error) {
        wrongEmailFormat.value = true;
      } else {
        wrongEmailFormat.value = false;
      }

      inputPassword.value = inputPassword.value.replace(/\s/g, "");
      if (inputPassword.value === "" || inputPassword.value.length < 6) {
        wrongPasswordFormat.value = true;
      } else {
        if (
          regex.test(inputPassword.value) ||
          regex.test(inputPassword.value)
        ) {
          wrongPasswordFormat.value = true;
        } else {
          wrongPasswordFormat.value = false;
        }
      }

      if (inputPassword.value != inputConfirmPassword.value) {
        wrongConfirmPassword.value = true;
        console.log(inputPassword.value, inputConfirmPassword.value);
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
            alert("Sign up success");
            window.location.href = "/verify";
          } else if (response.data.status === "already registered") {
            alert("Email already registered!");
          }
        } catch (error) {
          // 處理錯誤
          console.error(error.response.data);
        }
      }
    };

    return {
      inputFirstName,
      inputLastName,
      inputEmail,
      inputPassword,
      inputConfirmPassword,
      wrongNameFormat,
      wrongEmailFormat,
      wrongPasswordFormat,
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

.button-container {
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
