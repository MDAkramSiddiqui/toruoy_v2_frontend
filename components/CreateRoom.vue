<template>
  <div>
    <b-overlay :show="show" rounded="lg">
      <b-container>
        <b-row>
          <h2 class="display-4">
            <b-badge> Create Your Personal ChatRooms </b-badge>
          </h2>
        </b-row>
        <b-row>
          <b-col sm="6">
            <b-list-group>
              <b-list-group-item>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                maxime id aliquam voluptas nulla voluptatibus quis illum
                dignissimos tempore eaque! Aliquam omnis, atque obcaecati quae
                sit quas distinctio ea voluptas.
              </b-list-group-item>
              <b-list-group-item>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate magnam aliquid harum, ratione quod minus ullam labore
                consequatur. Illo similique tempore neque iusto exercitationem
                nobis, corporis laudantium architecto nam soluta.
              </b-list-group-item>
              <b-list-group-item>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores, fugiat ipsa! Optio reprehenderit deserunt pariatur
                itaque sit tenetur asperiores, quasi omnis incidunt mollitia,
                quo perspiciatis perferendis voluptates debitis minima maxime.
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col sm="6">
            <!--  -->

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
import swal from "sweetalert";
export default {
  data: () => {
    return {
      form: {
        chatRoomPassword: "",
        chatRoomHandle: ""
      },
      show: false
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      this.show = true;
      const result = await this.$axios.$post(
        "/chat-room/create-room",
        this.form
      );
      this.show = false;

      if (result.status === "success") {
        let message = `ChatRoom Created Successfully, ChatRoom Id/Name is ${result.data.chatRoomHandle}`;
        this.chatRoomHandle = result.data.chatRoomHandle;
        swal({
          title: "ChatRoom Created Successfully!",
          text: message,
          icon: "success",
          buttons: {
            goToDashboard: {
              text: "Go to Dashboard",
              value: true
            },
            createMore: {
              text: "Create More Chatrooms.",
              value: false
            }
          }
        }).then(value => {
          if (value) this.$router.push("/");
          else {
            this.form.chatRoomPassword = "";
            this.form.chatRoomHandle = "";
          }
        });
      } else {
        swal({
          title: "ChatRoom Create",
          text: "Some Problem occured, Please try again.",
          icon: "error",
          buttons: ["Got it!!!"]
        });
      }
    },
    onReset(e) {
      e.preventDefault();
      this.form.chatRoomPassword = "";
      this.form.chatRoomHandle = "";
    }
  }
};
</script>
