<template>
  <el-container>
    {{ sort }}
  </el-container>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { insertionSort } from '@/libs/sort/insertion-sort';

export default class Sort extends Vue {
  numList = [5, 8, 2, 4, 8, 1, 2, 9, 10, 3];

  sort = insertionSort(this.numList);
}
</script>
