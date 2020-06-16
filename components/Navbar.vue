<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand @click="goToHome" style="cursor:pointer">
        <h4>Toruoy</h4>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown
            v-if="this.$auth.loggedIn"
            :text="this.$auth.user.handle"
            left
          >
            <b-dropdown-item href="#">My ChatRooms</b-dropdown-item>
            <b-dropdown-item @click="logoutHandle">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else @click="createHandle">Create Handle</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="createRoom">Create Room</b-nav-item>
          <b-nav-item @click="joinRoom">Join Room</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  methods: {
    createHandle() {
      this.$router.push({ path: "/login" });
    },
    goToHome() {
      this.$router.push({ path: "/" });
    },
    logoutHandle() {
      this.$auth.logout();
    },
    createRoom() {
      this.$router.push({ path: "/users/create-room" });
    },
    joinRoom() {
      this.$router.push({ path: "/users/join-room" });
    }
  }
};
</script>
