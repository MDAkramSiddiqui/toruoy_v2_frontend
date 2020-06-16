<template>
  <div>
    <b-card
      style="max-width: 20rem;"
      class="position-absolute h-100 d-flex justify-content-center align-items-center"
      :bg-variant="status"
    >
      <b-button @click="closeAlert" variant="danger">Cross</b-button>
      <b-card-text>
        {{ message }}
      </b-card-text>

      <b-button href="#" variant="primary">Go To Dashboard</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["message", "status", "closeAlert"]
};
</script>
