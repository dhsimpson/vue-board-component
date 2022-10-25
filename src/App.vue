<template>
    <board :boardList="boardList" :columnList="columnList"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from './components/Board.vue';
import boardList from '@/assets/boardList.json';

export default defineComponent({
  name: 'App',
  components: {Board},
  data() {
      const columnList = [
          {
              param: 'content_id',
              name: '번호'
          },
          {
              param: 'content_title',
              name: '제목'
          },
          {
              param: 'content_author',
              name: '작성자'
          },
          {
              param: 'view_count',
              name: '조회수'
          },
          {
              param: 'like_count',
              name: '좋아요수'
          },
          {
              param: 'comment_count',
              name: '댓글수'
          },
      ];
      return {
          boardList,
          columnList
        }
  }
})
</script>

<style>
</style>
