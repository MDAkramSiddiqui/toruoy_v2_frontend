<template>
  <div>
    <b-list-group v-for="room in chatRoomList" :key="room.chatRoomId">
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        style="cursor: pointer"
        :class="{ currentActive: isActive === room.chatRoomHandle }"
        @click="setActive(room.chatRoomHandle)"
      >
        {{ room.chatRoomHandle }}

        <b-button variant="danger" size="sm" pill @click="func(room._id)">
          {{ type }}
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: ["chatRoomList", "func", "type", "setActive", "isActive"]
};
</script>
<style>
.currentActive {
  background-image: linear-gradient(to right, #333, #eee);
  border-color: #fff;
  color: #eeeeee;
}
</style>
