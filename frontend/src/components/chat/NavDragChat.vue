<template>
  <v-row class="d-flex flex-row justify-start">
    <v-card>
      <v-col col="4">
        <v-toolbar color="orange lighten-1">
          <v-list-item-avatar>
            <img src="https://picsum.photos/250/300?image=660" />
          </v-list-item-avatar>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-comment-text-outline</v-icon>
          </v-btn>
          <v-btn icon class="mx-3">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list>
          <template v-for="item in items">
            <v-list-item :key="item.title" ripple>
              <v-list-item-avatar>
                <img :src="item.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-card>
    <v-col col="8">
      <v-toolbar color="orange lighten-1">
        <v-list-item-avatar>
          <img src="https://picsum.photos/250/300?image=660" />
        </v-list-item-avatar>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-attachment</v-icon>
        </v-btn>
        <v-btn icon class="mx-3">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-toolbar color="blue-grey darken-3" dark height="550px">
        <v-text-field
          id="chat"
          label="Digite uma mensagem"
          name="chat"
          type="chat"
          outlined
          class="d-flex align-self-end"
        ></v-text-field>
      </v-toolbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NavDrag",
  data() {
    return {
      items: [
        {
          avatar: "https://picsum.photos/250/300?image=660",
          title: "Meeting @ Noon",
          subtitle:
            "<span class='font-weight-bold'>Spike Lee</span> &mdash; I'll be in your neighborhood"
        },
        {
          avatar: "https://picsum.photos/250/300?image=821",
          title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
          subtitle:
            "<span class='font-weight-bold'>to Operations support</span> &mdash; Wish I could come."
        },
        {
          avatar: "https://picsum.photos/250/300?image=783",
          title: "Yes yes",
          subtitle:
            "<span class='font-weight-bold'>Bella</span> &mdash; Do you have Paris recommendations"
        },
        {
          avatar: "https://picsum.photos/250/300?image=1006",
          title: "Dinner tonight?",
          subtitle:
            "<span class='font-weight-bold'>LaToya</span> &mdash; Do you want to hang out?"
        },
        {
          avatar: "https://picsum.photos/250/300?image=146",
          title: "So long",
          subtitle:
            "<span class='font-weight-bold'>Nancy</span> &mdash; Do you see what time it is?"
        },
        {
          avatar: "https://picsum.photos/250/300?image=1008",
          title: "Breakfast?",
          subtitle:
            "<span class='font-weight-bold'>LaToya</span> &mdash; Do you want to hang out?"
        },
        {
          avatar: "https://picsum.photos/250/300?image=839",
          title:
            'Winter Porridge <span class="grey--text text--lighten-1"></span>',
          subtitle:
            "<span class='font-weight-bold'>cc: Daniel</span> &mdash; Tell me more..."
        },
        {
          avatar: "https://picsum.photos/250/300?image=145",
          title: "Oui oui",
          subtitle:
            "<span class='font-weight-bold'>Nancy</span> &mdash; Do you see what time it is?"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
</style>
