export const state = () => ({
  messages: []
});

export const mutations = {
  SET_CHATROOM_CHAT(state, payload) {
    state.messages = payload;
  },

  UPDATE_CHATROOM_CHAT(state, payload) {
    state.messages.push(payload);
  }
};

export const actions = {
  async getChatRoomChat({ commit }, chatRoomHandle) {
    const result = await this.$axios.$get(
      `/chats/${chatRoomHandle}/get-all-chats`
    );
    commit("SET_CHATROOM_CHAT", result.data.messages);
  },

  async postMessage({ commit }, data) {
    console.log(data);
    const result = await this.$axios.$post("/chats/post-message", data);
    commit("UPDATE_CHATROOM_CHAT", result.data.currentMessage);
  }
};

export const getters = {};
