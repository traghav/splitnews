<template>
  <v-container>
    <v-row wrap class="">
      <v-col cols="12">
        <v-flex>
          <v-text-field v-model="search"></v-text-field>
        </v-flex>
        
      </v-col>

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
      search: ""
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
.iframe-wrapper .vue-friendly-iframe iframe {
  height: calc(100vh - 15vh);
  width: 100%;
}
.iframe-wrapper2  iframe {
  height: calc(100vh - 15vh);
  width: 100%;
}
</style>