<template>
  <div>
    <b-overlay :show="load" rounded="lg">
      <b-container>
        <b-row>
          <div>
            <h2 class="display-4">
              <b-badge> {{ title }} </b-badge>
            </h2>
          </div>
        </b-row>
        <b-row>
          <b-col sm="6">
            <b-list-group>
              <b-list-group-item v-for="(item, i) in items" :key="i">
                {{ item }}
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col sm="6">
            <b-card bg-variant="dark" text-variant="white">
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                  label-cols-sm="3"
                  label="Room ID/Name:"
                  label-align-sm="right"
                  label-for="nested-roomId"
                >
                  <b-form-input
                    id="nested-roomId"
                    v-model="form.chatRoomHandle"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Password:"
                  label-align-sm="right"
                  label-for="nested-password"
                >
                  <b-form-input
                    id="nested-password"
                    v-model="form.chatRoomPassword"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary" class="mr-2"
                  >Submit</b-button
                >
                <b-button type="reset" variant="danger" class="ml-2"
                  >Reset</b-button
                >
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-overlay>
  </div>
</template>

<script>
export default {
  props: ["items", "title", "onSubmit", "onReset", "form", "load"]
};
</script>

<style></style>
