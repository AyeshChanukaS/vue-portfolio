<template>
   <body>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
 
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="1.png" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="4">
          <h5 class="green--text text-darken-4 top"> </h5>
          <h1 class="white--text mid">My favourite Hobby</h1>
          <p class="grey--text mid">
            <i>“Gardening brings me to God’s nature, plants, flowers, seeds, vegetables, fruits, on mother Earth.”</i> <br />
          </p>
          <v-btn tile color="#0f824d" dark><a href="/about">About Gardening</a></v-btn>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first" id="project">
            <v-row>
              <v-col cols="10">
                <div class="child bgColor1">
                  <h3 class="white--text ml-3 mt-4">About Gardening</h3>
                  <p class="grey--text ml-3 mt-6">
                    My hobby is gardening that I enjoy ... <br />
                  </p>
                  <v-btn dark text>
                    <a href="/about"> know more </a>
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor2">
                  <h3 class="white--text ml-3 mt-4">Tree Types</h3>
                  <p class="grey--text ml-3 mt-6">
                    My hobby is gardening that I enjoy ... <br />
                  </p>
                  <v-btn dark text>
                    <a href="/treetype"> know more </a>
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor1">
                  <h3 class="white--text ml-3 mt-4">gardening technics</h3>
                  <p class="grey--text ml-3 mt-6">
                    My hobby is gardening that I enjoy ... <br />
                  </p>
                  <v-btn dark text>
                    <a href="/technics"> know more </a>
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor2">
                  <h3 class="white--text ml-3 mt-4">Good thing from gardening</h3>
                  <p class="grey--text ml-3 mt-6">
                    My hobby is gardening that I enjoy ... <br />
                  </p>
                  <v-btn dark text>
                    <a href="/benefits"> know more </a>
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                
              </v-col>
            </v-row>
          
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</body>
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
  height: 250px;
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
  margin-top: 500px;
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

a:visited{
  color:white;

}
a:link{
  color:white;

}

.form{
  width: auto;
  height: auto;
  margin-top: 50px;
  margin-left: 500px;
  margin-right: 500px;
  margin-bottom: 100px;
  background-color:#0f824d;

}

.cont{
  margin: 50;
  margin-bottom: 100px;
}

body {background-color: #111111;}

</style>
