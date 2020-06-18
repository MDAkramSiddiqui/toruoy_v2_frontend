<template>
  <div class="m-4">
    <b-row>
      <b-col sm="3">
        <h2><b-badge>ChatRooms Created</b-badge></h2>
        <b-list-group>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Cras justo odio

            <b-button variant="danger" size="sm" pill> Delete </b-button>
          </b-list-group-item>
        </b-list-group>
        <h2 class="mt-3"><b-badge>ChatRooms Joined</b-badge></h2>
        <b-list-group>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Cras justo odio

            <b-button variant="info" size="sm" pill> Leave </b-button>
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
  </div>
</template>
