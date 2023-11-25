<template>
  <div>連線狀態：{{ isConnected ? "連線成功" : "連線失敗" }}</div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const isConnected = ref(false);

    const connectCheck = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:10000/health");
        isConnected.value = response.data ? true : false;
      } catch (err) {
        console.log("Error connect status:", err);
        isConnected.value = false;
      }
    };

    onMounted(() => {
      connectCheck();
    });

    return { isConnected, connectCheck };
  }
}
</script>