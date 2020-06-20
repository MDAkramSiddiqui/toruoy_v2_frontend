<template>
  <div class="m-4">
    <b-overlay :show="show" rounded="lg">
      <b-row>
        <b-col sm="3">
          <h2><b-badge>ChatRooms Created</b-badge></h2>
          <b-list-group
            v-for="room in chatRoomCreatedList"
            :key="room.chatRoomId"
            ref="keyTag"
          >
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              {{ room.chatRoomHandle }}

              <b-button variant="danger" size="sm" pill> Delete </b-button>
            </b-list-group-item>
          </b-list-group>
          <h2 class="mt-3"><b-badge>ChatRooms Joined</b-badge></h2>
          <b-list-group
            v-for="room in chatRoomJoinedList"
            :key="room.chatRoomId"
          >
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              {{ room.chatRoomHandle }}

              <b-button
                variant="info"
                size="sm"
                pill
                :id="room.chatRoomId"
                @click="onLeave(room._id)"
              >
                Leave
              </b-button>
            </b-list-group-item>
          </b-list-group>
          <div class="mt-4" style="text-align:center">
            <b-button variant="light">
              Drop Everything
            </b-button>
          </div>
        </b-col>
        <b-col sm="8"></b-col>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
export default {
  props: ["show", "chatRoomCreatedList", "chatRoomJoinedList", "onLeave"]
};
</script>
