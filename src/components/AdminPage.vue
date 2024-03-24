<template>
    <div class="container">
      <div class="row">
        <form @submit.prevent="signIn">
          <div class="title">Admin Login</div>
          <div class="warn-text" v-if="wrongFormat">{{ wrongText }}</div>
          <input
            type="text"
            class="email"
            :class="{ 'mt-25': !wrongFormat }"
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
            <button type="submit" :disabled="isProcessing">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useVuelidate } from "@vuelidate/core";
  import { email } from "@vuelidate/validators";
  import axios from "axios";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const inputEmail = ref();
      const inputPassword = ref("");
      const wrongFormat = ref(false);
      const wrongText = ref("");
      const firstInputEmail = ref(true);
      const firstInputPassword = ref(true);
      const router = useRouter();
      const isProcessing = ref(false);
  
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
        isProcessing.value = true;
  
        if (inputEmail.value == "" || inputPassword.value == "") {
          wrongFormat.value = true;
          wrongText.value = "⦁ The email or password can't be empty";
          isProcessing.value = false;
        } else {
          wrongFormat.value = false;
          if (!wrongFormat.value) {
            let data = {
              email: inputEmail.value,
              password: inputPassword.value,
            };
            let jsonData = JSON.stringify(data);
  
            console.log("login");
            try {
              const res = await axios.post(
                "http://127.0.0.1:10000/adminlogin",
                jsonData,
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              console.log(res.data.status);
              if (res.data.status == "success") {
                sessionStorage.setItem("islogin", true);
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("userid", res.data.userid);
                sessionStorage.setItem("userfirstname", res.data.firstname);
                sessionStorage.setItem("userlastname", res.data.lastname);
                sessionStorage.setItem("useremail", res.data.useremail);
                sessionStorage.setItem("username", "");
                router.push("/");
              } else if (res.data.status == "invalid email") {
                wrongFormat.value = true;
                wrongText.value = "⦁ Invalid email";
                isProcessing.value = false;
              } else if (res.data.status == "verify yet") {
                wrongFormat.value = true;
                wrongText.value = "⦁ Email verify yet";
                isProcessing.value = false;
              } else if (res.data.status == "wrong password") {
                wrongFormat.value = true;
                wrongText.value = "⦁ Wrong password";
                isProcessing.value = false;
              }
              // 處理 response
            } catch (error) {
              if(error.response.data.status == "too many times"){
                wrongFormat.value = true;
                wrongText.value = "⦁ Too many times, please try again later";
                isProcessing.value = false;
              }else{
                console.log(error.response.data);
              }
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
        isProcessing,
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
    margin-bottom: 10px;
    color: #b85c5c;
    font-weight: 600;
  }
  
  .mt-25 {
    margin-top: 25px;
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
  