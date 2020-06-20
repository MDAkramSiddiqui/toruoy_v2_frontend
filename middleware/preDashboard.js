export default async function({ store }) {
  if (store.state.loaded)
    await this.$store.dispatch("chatroom/updateChatRoomList");
}
