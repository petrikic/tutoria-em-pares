<template>
  <v-row class="cyan accent-4">
    <v-flex xs12 sm12 md12 lg12 xl12>
      <img src="../../assets/SOSTUTORIA.png" 
      alt="IMAGE NOT A FOUND"
      class="imagem">
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
      <v-divider class="black my-3"></v-divider> 
      </v-flex>
       <v-flex xs12 sm6 md6 class="d-flex flex-wrap justify-center px-8 align-self-center">
         <div 
         style="width:50%;"
         >
        <h2 class="text-wrap display-2 font-weight-black color my-12"
        >Objetivos Gerais</h2>
        <v-divider class="white"></v-divider>
        <p class="text-wrap white--text headline my-12">
          Desenvolver uma plataforma de oferta e agendamento de tutoria
          presencial na universidade que proporcione sucesso academico por meio da aproximacao
          e do desenvolvimento dos cademicos entre si, por meio de uma relacao de estudo conjunto.
        </p>
         </div>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <img src="../../assets/content.png" alt="content"
        style="width: 100%; heigth:100%;"
        class="d-flex flex-wrap"
        > 
      </v-flex>
      <v-flex xs12 sm12 md12>
      <v-divider class="black mt-12"  ></v-divider> 
      </v-flex>
      <v-flex xs12 sm6 md6 class="my-12">
        <img src="../../assets/lapis.png" alt="content"
        style="width: 100%; heigth:100%;"
        class="d-flex flex-wrap"
        > 
      </v-flex>
       <v-flex xs12 sm6 md6 class="d-flex flex-wrap justify-center px-8 align-self-center">
         <div 
         style="width:50%;"
         >
        <h2 class="text-wrap display-2 font-weight-black color my-12">Objetivos Especificos</h2>
        <v-divider class="white"></v-divider>
        <p class="text-wrap white--text headline my-12">
          Fazer uso da plataforma para tambem publicizar as informacoes concernentes
          as ofertas de monitorias, assim como, se devidamente autorizado pelos(as)
          professores(as) coordenadores(as), os encontros dos Grupos do Programa de
          Educacao Tutorial - PET's e Ligas Academicas
        </p>
         </div>
      </v-flex>
      <v-flex xs12 sm12 md12>
      <v-divider class="black mb-1"></v-divider> 
      </v-flex>
    </v-row>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
    }
  }
};
</script>

<style>
.color{
  color: #311B92;
}
.imagem {
  background-size: 100%;
  width: 100%;
}
</style>
