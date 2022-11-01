<template>
    <div class="board-wrapper">
        <card-list-board
         :boardList="boardList" @goTo="goDetail"
         :wrapper="'card-board-wrapper'"
         :rowItem="'card-row-item'">
            <template v-slot="card">
                <div class="card-slot">
                    <span>제목 : {{card.data.content_title}} | </span>
                    <span>작성자 : {{card.data.content_author}} | </span>
                    <span>조회수 : {{card.data.view_count}} | </span>
                    <span>좋아요 수 : {{card.data.like_count}} | </span>
                    <span>댓글 수 : {{card.data.comment_count}}</span>
                </div>
            </template>
        </card-list-board>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import boardList from '@/assets/boardList.json';
import CardListBoard from './components/CardListBoard.vue';

export default defineComponent({
  name: 'App',
  components: {CardListBoard},
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
.card-board-wrapper {
    background-color: yellow;
    color: gray;
    /* width: 500px; */
}
.card-row-item {
    background-color: yellow;
}
.card-slot {
    overflow: hidden;
}
</style>
