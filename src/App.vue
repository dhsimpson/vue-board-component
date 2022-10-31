<template>
    <div class="board-wrapper">
        <board 
        :boardSection="'board-section'"
        :boardHead="'board-head'" 
        :boardRow="'board-row'" 
        :headerCol="'header-col'" 
        :rowCol="'row-col'"
        :boardList="boardList" :columnList="columnList"
        @goTo="goDetail"
        />
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
  },
  methods: {
      goDetail(event: any, data: any) {
          console.log(event)
          console.log(data)
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
    border: 1px solid black;
}
.board-row {
    background-color: gray;
    border: 1px solid red;
}
.header-col {
    border: 1px solid black;
}
.row-col {
    border-left: 1px solid blue;
}
</style>
