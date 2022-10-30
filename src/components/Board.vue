<template>
    <section style="
        display: table;
        width: 100%;
        border-collapse: collapse;
    ">
        <header
        style="display: table-row"
         :class="[boardHead]">
            <div style="
                display: table-cell;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap
            "
            :style="{'max-width': data.maxWidth as string}"
             :class="['col', headerCol]" v-for="(data, idx) in columnList" :key="idx">
                {{data.name}}
            </div>
        </header>
        <div style="display: table-row" 
        :class="['row', boardRow]" v-for="(data, idx) in boardList" :key="idx">
            <div style="
                display: table-cell;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap
            "
            :style="{'max-width': col.maxWidth as string}"
            :class="['col', rowCol]" v-for="(col, col_idx) in columnList" :key="col_idx">
                {{selectParam(data, col)}}
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { CSSProperties } from 'vue'
import type {Col} from '@/shared/types/Col';

export default defineComponent({
  name: 'boardComponent',
  props: {
    boardList: Array,
    columnList: Array as PropType<Array<Col>>,
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
  }
})
</script>
