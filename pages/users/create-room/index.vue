<template>
  <div>
    <CreateRoom />
  </div>
</template>

<script>
import CreateRoom from "@/components/CreateRoom";
export default {
  components: {
    CreateRoom
  },
  middleware: "auth"
};
</script>
