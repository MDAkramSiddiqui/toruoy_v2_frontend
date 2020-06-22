<template>
  <div class="container mt-4">
    <b-overlay :show="load" rounded="lg">
      <b-container>
        <b-row>
          <h2 class="display-4">
            <b-badge> Some Points to rememeber </b-badge>
          </h2>
        </b-row>
        <b-row>
          <b-col sm="8">
            <b-list-group>
              <b-list-group-item>
                No need to create any ID or use some authentic gmail id, just
                click on
                <b-badge variant="info"> create-handle </b-badge>
                button and voila your id will be created.
              </b-list-group-item>
              <b-list-group-item>
                After creating your ID, you can either create chat rooms and ask
                your friends to join or you can join their custom chat rooms.
              </b-list-group-item>
              <b-list-group-item>
                Each and every message is encrypted and thus all your secret
                chats are protected. The thing is you can only use text here.
                Still in the developement phase, Peace.
              </b-list-group-item>
              <b-list-group-item>
                Your handle will be remain activated for about a day after that
                your handle will be destroyed. During your login period
                everytime you open the website, your pre-created handle will
                open. To use new handle either use Incognito or logout from this
                handle, but after logging out all your chat room will be
                destroyed immediately as well as all your chats.
              </b-list-group-item>
              <b-list-group-item>
                All chat rooms are active for about 15 minutes only, after that
                it will be destroyed along with its chats, so keep tight and
                join and text quickly. Peace
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col sm="4">
            <div
              class=" h-100 d-flex justify-content-center align-items-center"
            >
              <span>
                <b-button
                  pill
                  size="lg"
                  variant="outline-info"
                  @click="createHandle"
                >
                  Create Handle
                </b-button>
              </span>
            </div>
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
      load: false
    };
  },
  methods: {
    async createHandle() {
      this.load = true;
      await this.$auth.loginWith("local", {
        data: {}
      });
      this.load = false;
      let message = `Voila, your handle has been created successfully, and your handle is ${this.$auth.user.handle}`;
      const result = await swal({
        title: "User Handle Created Successfully!",
        text: message,
        icon: "success",
        buttons: {
          goToDashboard: {
            text: "Go To Dashboard",
            value: true
          },
          createChatRoom: {
            text: "Create ChatRoom",
            value: false
          }
        }
      });
      if (result) this.$router.push({ path: "/users/dashboard" });
      else this.$router.push({ path: "/users/create-room" });
    }
  },
  middleware: "postLogin"
};
</script>
