<template>
<div class="altura">
  <h1 class="d-flex justify-center subheading grey--text">Envie sua sugestao</h1>

  <v-container class="my-5">
    <v-card
    max-width="100%"
    class="mx-auto"
  >
    <v-system-bar></v-system-bar>

    <v-row
      class="px-6 py-3"
      align="center"
    >
      <span class="mr-4">To</span>
      <v-menu
        v-model="menu"
        bottom
        right
        transition="scale-transition"
        origin="top left"
      >
        <template v-slot:activator="{ on }">
          <v-chip
            pill
            v-on="on"
          >
            <v-avatar left>
              <v-img src="../../../assets/51562006_1426376510831490_5197592748139479040_n.jpg"></v-img>
            </v-avatar>
            Renato Tomio
          </v-chip>
        </template>
        <v-card width="300">
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="../../../assets/51562006_1426376510831490_5197592748139479040_n.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Renato Tomio</v-list-item-title>
                <v-list-item-subtitle>renato.re2012@hotmail.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  @click="menu = false"
                >
                  <v-icon>mdi-close-circle</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-action>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-action>
              <v-list-item-subtitle>renato.re2012@hotmail.com</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-row>

    <v-divider></v-divider>

    <v-text-field
      full-width
      value="Re: "
      label="Subject"
      single-line
    ></v-text-field>

    <v-textarea
      full-width
      single-line
      placeholder='Message'
    ></v-textarea>
  </v-card>


  </v-container>

  </div>
</template>

<script>
export default {
  name: "DashSugestao",
    data: () => ({
      menu: false,
    }),

}
</script>

<style>

</style>
