<template>
    <li class="board-head">
        <div v-for="(data, idx) in columnList" :key="idx">
            {{data.name}}
        </div>
    </li>
    <ol>
        <li v-for="(data, idx) in boardList" :key="idx">
            <div v-for="(col, col_idx) in columnList" :key="col_idx">
                {{selectParam(data, col)}}
            </div>
        </li>
    </ol>
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
    columnList: Array
  },
  methods: {
      selectParam(data: any, col: Col): String {
          const param = col['param'];
          let res: String = '';
          Object.keys(data).find(key => {if(param ==key) res = data[key]})
          return res;
      }
  }
})
</script>

<style scoped>
li {
    display: flex;
}
ol li {
    list-style: none;
}
</style>
