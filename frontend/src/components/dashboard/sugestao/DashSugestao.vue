<template>
<div class="altura">
  <h1 class="d-flex justify-center subheading grey--text">Envie sua sugestao</h1>

  <v-container class="my-4">
  <v-card
    max-width="100%"
    class="mx-auto"
  >
  <v-form method="POST" action="https://formspree.io/renato.re2012@hotmail.com">
    <input
      name="_subject"
      value="Novo contato!"
      type="hidden"
    />
    <input
      name="_next"
      value="https://www.rossener.com/contato/men"
      type="hidden"
    />
    <input
      name="_language"
      value="pt"
      type="hidden"
    />
    <v-text-field
      label="Seu nome"
      type="text"
      id="nome"
      outlined
      class="mx-10"
      v-model="fields.nome"
      required
    ></v-text-field>

    <v-text-field
      label="Email"
      type="email"
      id="email"
      outlined
      class="mx-10"
      v-model="fields.email"
      :rules="emailRules"
      required
    ></v-text-field>

    <v-textarea
      id="assunto"
      type="text"
      placeholder='Assunto'
      outlined
      v-model="fields.assunto"
      class="mx-10"
      required
    ></v-textarea>
  </v-form>
    <v-list class="d-flex flex-row">

    <v-btn class="mx-5" flat medium color='blue white--text'>Enviar
    </v-btn>
    <v-btn  flat medium color='white black--text'>Descartar
    </v-btn>
    <v-btn text flat color='grey' @click="loadingFile(file)">
      <v-icon size="30px">mdi-paperclip</v-icon>
    </v-btn>
    <q-uploader
      :factory="factoryFn"
      multiple
      style="max-width: 300px"
    />

    </v-list>
  </v-card>

  </v-container>

  </div>
</template>

<script>
export default {
  name: "DashSugestao",
    data: () => ({
      menu: false,
      fields: {},
       emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      loadingFile(file){
        console.log(file)
      },
      factoryFn (files) {
      console.log(files)

      return new Promise((resolve) => {
        // simulating a delay of 2 seconds
        setTimeout(() => {
          resolve({
            url: 'http://localhost:4444/upload'
          })
        }, 2000)
      })
    }
  },
}
</script>

<style>

</style>
