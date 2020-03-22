<template>
  <div class="altura">
    <h1 class="d-flex justify-center subheading grey--text">Perfil</h1>

  <v-container class="my-5">
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="cyan darken-1">
          <span class="headline white--text">Renato Tomio</span>

          <v-spacer></v-spacer>

          <v-btn

            fab
            small
            @click="isEditing = !isEditing"
          >
            <v-icon v-if="isEditing">mdi-close</v-icon>
            <v-icon v-else>mdi-pencil</v-icon>
          </v-btn>
        </v-card-title>

        <v-list >
          <v-list-item >
            <v-list-item-action>
              <v-icon>mdi-face</v-icon>
            </v-list-item-action>


               <v-text-field
                :disabled="!isEditing"
                color="white"
                label="Nome"
              ></v-text-field>

            <v-list-item-action>

              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>


          <v-list-item >
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>


              <v-text-field
                :disabled="!isEditing"
                color="white"
                label="Telefone"
              ></v-text-field>


            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>



          <v-list-item >
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>


              <v-text-field
                :disabled="!isEditing"
                color="white"
                label="Email"
              ></v-text-field>

          </v-list-item>



          <v-list-item >
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>


              <v-text-field
                :disabled="!isEditing"
                color="white"
                label="Endereco"
              ></v-text-field>
          </v-list-item>
            <v-spacer></v-spacer>

          <v-card-actions class="d-flex justify-end">
            <v-btn
              :disabled="!isEditing"
              color="success"
              @click="save"
              large
            >
              Salvar
            </v-btn>
          </v-card-actions>
        </v-list>

        <v-img
          src="../../../assets/silhueta-interrogação.jpg"
          height="500px"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</div>
</template>




<script>
export default {
  name: "DashPerfil",
  data() {
    return {
      hasSaved: false,
      isEditing: null
    }
  },
  methods: {
    save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
  }
}
</script>

<style>
.altura {
  margin-top: 5%;
}
</style>
