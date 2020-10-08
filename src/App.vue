<template>
  <v-app>
    <div class = "ss">
      <h1 align="center">Split Search</h1>
      <!-- <v-app-bar
        app
        color="white"
        dark
      >
        <div class="d-flex align-center">
          <h1>Split Search</h1>

          
        </div>

        <v-spacer></v-spacer>

        <v-btn
          href="https://raghav.cc"
          target="_blank"
          text
        >
          <span class="mr-2"></span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar> -->

      <v-main>
        <HelloWorld/>
      </v-main>
    </div>
  </v-app>
    
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.boo {
  background-color: blue;

}
.ss {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}
.ss h1 {
  font-size: 4vw;
  color: white;
  font-family: 'Titillium Web', sans-serif;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
