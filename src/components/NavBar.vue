<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
      <v-icon color="white">fas fa-cat</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('hobby')">Hobby</v-btn>
    <v-btn text @click="scroll('interest')">interest</v-btn>
    <v-btn text @click="scroll('interest')">skill</v-btn>
    <v-btn text @click="scroll('about')">about</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
