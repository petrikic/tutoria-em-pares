<template>
  <v-container fluid>
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
      <template v-slot:header>
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title>Rank do Tutoria</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.title" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Nome:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.nome }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Projeto:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.projeto }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Disciplina:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.disciplina }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Avaliacao:</v-list-item-content>
                  <v-list-item-content class="mr-6">
                    <v-rating v-model="rating"   ></v-rating>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Data:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.data }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar class="mt-2" color="indigo" dark flat>
          <v-toolbar-title class="subheading">
            {{ new Date().getFullYear()}} -
            <strong>Tutoria em Pares</strong>
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: "Rank",
  data: () => ({
    rating: 3,
    itemsPerPage: 4,
    items: [
      {
        name: "Tutores",
        nome: "Renato",
        projeto: 6.0,
        disciplina: 24,
        carga: 4.0,
        data: 87
      },
      {
        name: "Tutores",
        nome: "Joao",
        projeto: 9.0,
        disciplina: 37,
        carga: 4.3,
        data: 129
      },
      {
        name: "Tutores",
        nome: "Pedro",
        projeto: 16.0,
        disciplina: 23,
        carga: 6.0,
        data: 337
      },
      {
        name: "Tutores",
        nome: "Jose",
        projeto: 3.7,
        disciplina: 67,
        carga: 4.3,
        data: 413
      }
    ]
  })
};
</script>

<style>
</style>
