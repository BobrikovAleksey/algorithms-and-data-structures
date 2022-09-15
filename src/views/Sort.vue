<template>
  <el-container>
    {{ bubbleSort }}
  </el-container>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { bubbleSort } from '@/libs/sort/bubble-sort';

export default class Sort extends Vue {
  numList = [5, 8, 2, 4, 8, 1, 2, 9, 10, 3];

  bubbleSort = bubbleSort(this.numList, true);
}
</script>
