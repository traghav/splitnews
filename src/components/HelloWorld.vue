<template>
  <v-container class ="fullapp">
    <v-row wrap justify-space-around>
          
          <v-flex xs10 wrap >
            <div class = "searchbox">
              <v-text-field :solo="true" v-model="search" placeholder="Enter a partisan search term" ></v-text-field>
              
            </div>
          </v-flex>
          <v-flex xs2 class="d-none d-lg-block">
            <div class = "pol">
              <v-btn
                color="primary"
                :height="48"
                large
                v-on:click="search = terms[Math.floor(Math.random() * terms.length)]">
              I am feeling political
              </v-btn>
            </div>
          </v-flex>
        
      
    </v-row>
    <div v-if="search">
      <v-row wrap justify-space-around>
        <v-flex xs12 md6>
          <div class="iframe-wrapper2">
            
            <iframe :src="leftUrl" frameborder="0"></iframe>
          </div>
        </v-flex>
        <v-flex xs12 md6>
          <div class="iframe-wrapper">
          
            
            <vue-friendly-iframe :src="rightUrl"></vue-friendly-iframe>
          </div>
        </v-flex>

      </v-row>
    </div>
    <div v-else>
      <div class = "story">
        <h1>Split Search is a small web experiment.</h1>
        <h1>Two custom Google Search engines have been setup.</h1>
        <h1>One engine points to only <b>liberal</b> news outlets and the other to only <b>conservative</b> news outlets.
        </h1>
        <h2>Read More: <a href="https://raghav.cc/federatedsearch">The case for federated search engines</a></h2>
        
        
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods: {
      onLoad(){
        console.log("trigger")
      }
    },
    data: () => ({
      left: "left.html?q=",
      right: "right.html?q=",
      search: "",
      terms: ["trump", "abortion", "gun rights", "biden", "voting", "covid", "supreme court", "green new deal", "medicare", "healthcare", "immigration"]
    }),
    computed: {
    leftUrl: function () {
      // `this` points to the vm instance
      return this.left+this.search
    },
    rightUrl: function () {
      // `this` points to the vm instance
      return this.right+this.search
    }

    
  }
  }
</script>
<style>
@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap);
.iframe-wrapper .vue-friendly-iframe iframe {
  height: calc(100vh - 15vh);
  width: 100%;
}
.iframe-wrapper2  iframe {
  height: calc(100vh - 15vh);
  width: 100%;
}
.searchbox {
  position: static;
  display: block;
  padding-left: 10px;
 
}
.pol {
  padding-left: 10px;
}
.story {
  height: 100vh;

}
@media screen and (min-width: 600px) {
  .story h1 {
  font-size: 4vw;
  color: aliceblue;
  font-family: 'Titillium Web', sans-serif;
  font-weight: normal;
  
}
.story h2 {
  font-size: 3vw;
  color: aliceblue;
  font-family: 'Titillium Web', sans-serif;
 } 
}
@media screen and (max-width: 600px) {
  .story h1 {
  font-size: 30px !important; 
  color: aliceblue;
  font-family: 'Titillium Web', sans-serif;
  font-weight: normal;
  
}
.iframe-wrapper .vue-friendly-iframe iframe {
  height: calc(100vh - 55vh);
  width: 100%;
}
.iframe-wrapper2  iframe {
  height: calc(100vh - 55vh);
  width: 100%;
}
.story h2 {
  font-size: 20px;
  color: aliceblue;
  font-family: 'Titillium Web', sans-serif;
 } 
}
.story a{
  color: aliceblue !important;
}

</style>