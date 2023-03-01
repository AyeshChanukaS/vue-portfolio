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
          <h5 class="red--text text-darken-4 top">Hello I'm XXX XXX,</h5>
          <h1 class="white--text mid">Fullstack Developer</h1>
          <p class="grey--text mid">
            I am passionate about using my skills and knowledge to create
            functional, user-friendly websites. <br />
            With a strong foundation in HTML, CSS and JavaScript, I have the
            skills and ability to bring my clients vision to life. I am also
            commited to staying up-to-date with the latest technologies and best
            practices in the field, and I'm always looking for opportunities to
            learn and grow as a programmer.
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
  background-color: #ce1d2a;
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