export const state = () => ({
  chatRoomCreatedList: [],
  chatRoomJoinedList: []
});

export const mutations = {
  UPDATE_CHATROOM_LIST(state, payload) {
    // for (chatRoom of payload) {
    //   if (chatRoom.owner.id === this.$auth.user.id) {
    //     state.chatRoomCreatedList.push(chatRoom);
    //   } else {
    //     state.chatRoomJoinedList.push(chatRoom);
    //   }
    // }
  }
};

export const actions = {
  async updateChatRoomList({ commit }) {
    const result = await this.$axios.$get("users/my-chatrooms");
    commit("UPDATE_CHATROOM_LIST", result);
  }
};

export const getters = {};
