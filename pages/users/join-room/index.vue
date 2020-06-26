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
  middleware: "auth",
  data: () => {
    return {
      items: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime id aliquam voluptas nulla voluptatibus quis illum dignissimos tempore eaque! Aliquam omnis, atque obcaecati quae sit quas distinctio ea voluptas.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime id aliquam voluptas nulla voluptatibus quis illum dignissimos tempore eaque! Aliquam omnis, atque obcaecati quae sit quas distinctio ea voluptas.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime id aliquam voluptas nulla voluptatibus quis illum dignissimos tempore eaque! Aliquam omnis, atque obcaecati quae sit quas distinctio ea voluptas."
      ],
      title: "Join Room",
      form: {
        chatRoomPassword: "",
        chatRoomHandle: ""
      },
      load: false
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        this.load = true;
        const result = await this.$axios.$post(
          "/chat-room/join-room",
          this.form
        );
        this.load = false;

        let message = `ChatRoom Joined Successfully, ChatRoom Id/Name is ${result.data.chatRoomHandle}`;
        this.chatRoomHandle = result.data.chatRoomHandle;
        swal({
          title: "ChatRoom Joined Successfully!",
          text: message,
          icon: "success",
          buttons: {
            goToDashboard: {
              text: "Go to Dashboard",
              value: true
            },
            createMore: {
              text: "Join More Chatrooms.",
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
      } catch (err) {
        await swal({
          title: "ChatRoom Join",
          text: "Please check the password or chatRoom ID/Name again.",
          icon: "error",
          buttons: "Got it!!!"
        });
        this.load = false;
        this.form.chatRoomPassword = "";
        this.form.chatRoomHandle = "";
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
