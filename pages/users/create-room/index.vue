<template>
  <div>
    <Room
      :items="items"
      :title="title"
      :onSubmit="onSubmit"
      :onReset="onReset"
      :form="form"
      :show="load"
    />
  </div>
</template>

<script>
import swal from "sweetalert";
import Room from "@/components/Room";
export default {
  components: {
    Room
  },
  data: () => {
    return {
      items: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime id aliquam voluptas nulla voluptatibus quis illum dignissimos tempore eaque! Aliquam omnis, atque obcaecati quae sit quas distinctio ea voluptas.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime id aliquam voluptas nulla voluptatibus quis illum dignissimos tempore eaque! Aliquam omnis, atque obcaecati quae sit quas distinctio ea voluptas.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime id aliquam voluptas nulla voluptatibus quis illum dignissimos tempore eaque! Aliquam omnis, atque obcaecati quae sit quas distinctio ea voluptas."
      ],
      title: "Create Room",
      form: {
        chatRoomPassword: "",
        chatRoomHandle: ""
      },
      load: false
    };
  },
  middleware: "auth",
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      this.load = true;
      const result = await this.$axios.$post(
        "/chat-room/create-room",
        this.form
      );

      this.load = false;

      if (result.status === "success") {
        this.$socket.client.emit("joinRoom", result.data.chatRoomHandle);

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
          if (value) this.$router.push("/users/dashboard");
          else {
            this.form.chatRoomPassword = "";
            this.form.chatRoomHandle = "";
          }
        });
      } else {
        await swal({
          title: "ChatRoom Create",
          text: "Some Problem occured, Please try again.",
          icon: "error",
          buttons: "Got it!!!"
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
