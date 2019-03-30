/* eslint-disable prettier/prettier */
<template>
  <div>
    <h1>The User Page</h1>
    <button class="btn btn-primary" @click="gotoHome">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    gotoHome() {
      this.$router.push("/");
    }
  }
};
</script>
