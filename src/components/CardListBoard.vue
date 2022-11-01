<template>
    <ol id="card-board-list" :class="[wrapper]">
        <a v-for="(data, idx) in boardList" :class="['card-row', rowItem]" href="javascript:void(0);" @click="$emit('goTo', $event, data)" :key="idx">
            <slot :data="data"></slot>
        </a>
    </ol>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        boardList: Array,
        wrapper: String,
        rowItem: String
    },
    mounted() {
        const cardBoardList = document.getElementById('card-board-list') as HTMLElement;
        {
            cardBoardList.style.listStyle = 'none';
            cardBoardList.style.padding = '0';
            cardBoardList.style.margin = '0';
        }

        const rowList = Array.from(document.getElementsByClassName('card-row') as HTMLCollectionOf<HTMLElement>);
        rowList.forEach((row: HTMLElement) => {
            row.style.textDecoration = 'none';
            row.style.color = 'black';
            row.style.backgroundColor = 'white';
            row.style.margin = '10px 0';
            row.style.padding = '10px 0';
            row.style.display = 'block';
        });
    }

})
</script>