<template>
  <v-app
    id="id"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
  <nav-bar></nav-bar>
  <div class="about">
    <v-row>
    <v-col cols="6">
          <v-img src="1.png" contain max-height="500"></v-img>
        </v-col>
    <v-col cols="4">
          <h5 class="green--text text-darken-4 top">Hello I'm XXX XXX,</h5>
          <h1 class="white--text mid">My favourite Hobby</h1>
          <p class="grey--text mid">
            My hobby is gardening that I enjoy tremendously and like from the heart. I feel naturally attached to the world of Nature. Outdoor life is surely better than our indoor life of modern comforts and luxuries. It is only when the weather is extremely hot or cold that I like to stay indoors. But when the weather is fine and pleasant, I rush out to stay in the open atmosphere and natural surroundings. (That is, in fine weather, I desire to stay outdoors).
          </p>
          <p class="grey--text mid">
            Gardening keeps us in two worlds at the same time (simultaneously)—the home and nature, that is, the world of our family and its joys and problems and the world of the trees, bushes, plants, and flowers and their charms. There is quite a big garden in our house. I go there early in the morning and work on the plants for an hour. On holidays, I work in the “green world” in the evening too. My work in the garden changes with the season. I plant new trees in the rainy season. I look after my small plants and protect them against the sun. At the end of the summer, I plant vegetables for the winter. At the end of the winter, I plant vegetables for the summer. I sow seeds of vegetables and flowers at the end of the summer. I do not work much in the autumn.
          </p>
          <p class="grey--text mid">
            Truly speaking, physical work in a garden or field gives us physical exercise and mental satisfaction. Both the body and mind get strengthened (or invigorated) in the fresh, natural. atmosphere. It is, thus, natural that I feel stronger and happier when I move back from my small garden to everyday activities. Resultingly, I understand my lessons better, move and walk at greater ease and eat the foods and fruits with greater desire.  
          </p>

        </v-col>
      </v-row>
  </div>
</v-app>
</template>



<style scoped>
.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #0f824d;
}
.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>