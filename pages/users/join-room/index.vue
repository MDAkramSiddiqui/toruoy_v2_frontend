<template>
  <div>
    <JoinRoom />
  </div>
</template>

<script>
import JoinRoom from "@/components/JoinRoom";
export default {
  components: {
    JoinRoom
  },
  middleware: "auth"
};
</script>
