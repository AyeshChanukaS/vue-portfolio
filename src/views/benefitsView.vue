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
            
          <h1 class="white--text mid">Good thing from gardening</h1>
          <p class="grey--text mid">
            Garden is a place that gives relaxation to the mind and soul. Besides, gardening can be an interesting and productive hobby. Also, it teaches a person the value of patience, hard work, and love and affection. Because gardening takes a lot of effort in growing and maintaining. It also gives peace to the person who takes care of it.    
        </p>
          
  
            
          </v-col>
          <v-col>
                    <div class="form">
                      <div class="cont">
                        <feedBackForum />
                      </div>
                    </div>
                </v-col>
        </v-row>
    </div>
  </v-app>
  </template>
  
  
  <script>
  import feedBackForum from './feedBackForum.vue'
  
  export default{
      name:"HomeView",
      components: {
        feedBackForum,
      }
  };
  </script>
  
  
  
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
    padding: 1rem 1rem;
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
  
  a:visited{
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