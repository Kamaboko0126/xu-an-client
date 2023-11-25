<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="title">verify</div>
        <div class="verify-text">{{ verifyStatus }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const route = useRoute();
    const verifyStatus = ref("");
    const email = ref(route.query.email);
    const key = ref(route.query.key);

    async function getVerifyStatus() {
      if (email.value == null && key.value == null) {
        verifyStatus.value = "請前往信箱進行驗證，謝謝";
      } else {
        let data = {
          email: email.value,
          key: key.value,
        };
        let jsonData = JSON.stringify(data);
        console.log(jsonData);
        try {
          const res = await axios.post(
            "http://127.0.0.1:10000/verify",
            jsonData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(res.data.status);
          if (res.data.status == "success") {
            verifyStatus.value = "驗證成功，請重新登入，謝謝";
          } else if (res.data.status == "verified") {
            verifyStatus.value = "已驗證過，請重新登入，謝謝";
          }
          // 處理 response
        } catch (error) {
          verifyStatus.value =
            "驗證失敗，請重新驗證，如有任何問題請聯絡客服，謝謝";

          console.error(error.response.data);
          // 處理錯誤
        }
      }
    }

    onMounted(() => {
      getVerifyStatus();
    });

    return {
      verifyStatus,
      email,
      key,
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

.verify-text {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  color: var(--main-color);
}
</style>
