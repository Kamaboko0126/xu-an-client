<template>
  <div>token驗證狀態：{{ isVerified }}</div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import axios from "axios";

export default {
  setup() {
    const isVerified = ref("驗證中");
    const route = useRoute();

    const verifiedCheck = async () => {
      console.log("verifiedCheck", sessionStorage.getItem("islogin"));
      if (sessionStorage.getItem("islogin") == "true") {
        try {
          const res = await axios.get("http://127.0.0.1:10000/verify-token", {
            params: {
              token: sessionStorage.getItem("token"),
              userid: sessionStorage.getItem("userid"),
            },
          });

          if (res.data.status === "Token success verified") {
            isVerified.value = "驗證成功";
          } else {
            isVerified.value = "驗證失敗";
          }
        } catch (error) {
          console.error(error.response.data);
          isVerified.value = "api error";
        }
      } else {
        isVerified.value = "尚未登入";
      }
    };

    watch(
      () => route.path,
      () => {
        verifiedCheck();
      }
    );

    onMounted(() => {
      verifiedCheck();
    });

    return { isVerified, verifiedCheck };
  },
};
</script>
