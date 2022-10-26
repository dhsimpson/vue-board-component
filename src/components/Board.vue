<template>
    <section>
        <header :class="[boardHead]">
            <div :class="['col', headerCol]" :style="{'max-width': data.maxWidth}" v-for="(data, idx) in columnList" :key="idx">
                {{data.name}}
            </div>
        </header>
        <div :class="['row', boardRow]" v-for="(data, idx) in boardList" :key="idx">
            <div :class="['col', rowCol]" :style="{'max-width': col.maxWidth}" v-for="(col, col_idx) in columnList" :key="col_idx">
                {{selectParam(data, col)}}
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface Col {
    param: String,
    name: String
}

export default defineComponent({
  name: 'boardComponent',
  props: {
    msg: String,
    boardList: Array,
    columnList: Array,
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

<style scoped>
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
