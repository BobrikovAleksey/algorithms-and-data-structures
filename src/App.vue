<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/sort">Sort</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </el-header>

    <el-container>
      <v-aside></v-aside>

      <el-container>
        <el-main>
          <router-view/>
        </el-main>

        <el-footer>Footer</el-footer>
      </el-container>

    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import vAside from '@/components/Aside/Aside.vue';

@Options({
  components: {
    vAside,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
