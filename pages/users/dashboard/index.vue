<template>
  <div>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard";
export default {
  components: {
    Dashboard
  },
  middleware: ["auth", "preDashboard"]
};
</script>
