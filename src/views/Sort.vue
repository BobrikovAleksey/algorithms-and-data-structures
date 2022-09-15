<template>
  <el-container>
    {{ sort }}
  </el-container>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { selectionSort } from '@/libs/sort/selectionSort';

export default class Sort extends Vue {
  numList = [5, 8, 2, 4, 8, 1, 2, 9, 10, 3];

  sort = selectionSort(this.numList);
}
</script>
