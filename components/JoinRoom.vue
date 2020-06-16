<template>
  <div>
    <b-container>
      <b-row>
        <h2 class="display-4">
          <b-badge> Join ChatRooms </b-badge>
        </h2>
      </b-row>
      <b-row>
        <b-col sm="6">
          <b-list-group>
            <b-list-group-item>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              maxime id aliquam voluptas nulla voluptatibus quis illum
              dignissimos tempore eaque! Aliquam omnis, atque obcaecati quae sit
              quas distinctio ea voluptas.
            </b-list-group-item>
            <b-list-group-item>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate magnam aliquid harum, ratione quod minus ullam labore
              consequatur. Illo similique tempore neque iusto exercitationem
              nobis, corporis laudantium architecto nam soluta.
            </b-list-group-item>
            <b-list-group-item>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, fugiat ipsa! Optio reprehenderit deserunt pariatur
              itaque sit tenetur asperiores, quasi omnis incidunt mollitia, quo
              perspiciatis perferendis voluptates debitis minima maxime.
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col sm="6">
          <b-card bg-variant="dark" text-variant="white">
            <b-form>
              <b-form-group
                label-cols-sm="3"
                label="Room ID/Name:"
                label-align-sm="right"
                label-for="nested-roomId"
              >
                <b-form-input id="nested-roomId"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Password:"
                label-align-sm="right"
                label-for="nested-password"
              >
                <b-form-input id="nested-password"></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary" class="mr-2"
                >Submit</b-button
              >
              <b-button type="reset" variant="danger" class="ml-2"
                >Reset</b-button
              >
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
