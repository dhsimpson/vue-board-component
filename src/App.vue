<template>
    <div class="board-wrapper">
        <board :boardHead="'board-head'" :boardRow="'board-row'" :boardList="boardList" :columnList="columnList"/>
    </div>
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
              name: '번호',
              maxWidth: '100px'
          },
          {
              param: 'content_title',
              name: '제목',
              maxWidth: '100px'
          },
          {
              param: 'content_author',
              name: '작성자',
              maxWidth: '100px'
          },
          {
              param: 'view_count',
              name: '조회수',
              maxWidth: '100px'
          },
          {
              param: 'like_count',
              name: '좋아요수',
              maxWidth: '100px'
          },
          {
              param: 'comment_count',
              name: '댓글수',
              maxWidth: '100px'
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
.board-wrapper {
    width: 200px;
}
.board-head {
    background-color: blue;
}
.board-row {
    background-color: gray;
}
</style>
