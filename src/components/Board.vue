<template>
    <section :id="boardSection">
    <button>click me</button>
        <header :class="[commonRow, boardHead]">
            <div :class="[commonCol, headerCol]" :style="{'max-width': data.maxWidth as string}" v-for="(data, idx) in columnList" :key="idx">
                {{data.name}}
            </div>
        </header>
        <div :class="[commonRow, boardRow]" v-for="(data, idx) in boardList" :key="idx">
            <div :class="[commonCol, rowCol]" :style="{'max-width': col.maxWidth as string}" v-for="(col, col_idx) in columnList" :key="col_idx">
                {{selectParam(data, col)}}
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType, useCssModule } from 'vue'
import type { CSSProperties } from 'vue'
import type {Col} from '@/shared/types/Col';

export default defineComponent({
  name: 'boardComponent',
  props: {
    boardList: Array,
    columnList: Array as PropType<Array<Col>>,
    boardSection: String,
    commonRow: String,
    commonCol: String,
    boardHead: String,
    boardRow: String,
    headerCol: String,
    rowCol: String,
  },
  methods: {
      selectParam(data: any, col: Col): String {
          const param = col['param'];
          let res: String = '';
          Object.keys(data).find(key => {if(param ==key) res = data[key]});
          return res;
      }
  },
  setup() {
      console.log('hello!!!')
  },
  mounted() {
    //   const boardSection = document.getElementById('board-section') as HTMLElement;
    //   {
    //       boardSection.style.display = 'table';
    //       boardSection.style.width = '100%';
    //       boardSection.style.borderCollapse = 'collapse';
    //   }
    //   console.log('boardSection')
    //   console.log(boardSection)

    //   const columnList = Array.from(document.getElementsByClassName('col') as HTMLCollectionOf<HTMLElement>);
    
    //   columnList.forEach((col: HTMLElement) => {
    //       col.style.display = 'table-cell';
    //       col.style.overflow = 'hidden';
    //       col.style.textOverflow = 'ellipsis';
    //       col.style.whiteSpace = 'nowrap';
    //   });

    //   const rowList = Array.from(document.getElementsByClassName('row') as HTMLCollectionOf<HTMLElement>);
    
    //   rowList.forEach((row: HTMLElement) => {
    //       row.style.display = 'table-row';
    //   });
  }
})
</script>

<style>
section {
    display: table;
    width: 100%;
    border-collapse: collapse;
}

section > * {
    display: table-row;
}

section .col {
    display: table-cell;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>