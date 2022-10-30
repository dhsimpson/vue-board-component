import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, Fragment, renderList, normalizeStyle, toDisplayString } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "boardComponent",
  props: {
    boardList: Array,
    columnList: Array,
    boardSection: String,
    boardHead: String,
    boardRow: String,
    headerCol: String,
    rowCol: String
  },
  methods: {
    selectParam(data, col) {
      const param = col["param"];
      let res = "";
      Object.keys(data).find((key) => {
        if (param == key)
          res = data[key];
      });
      return res;
    }
  },
  mounted() {
    const boardSection = document.getElementById("board-section");
    {
      boardSection.style.display = "table";
      boardSection.style.width = "100%";
      boardSection.style.borderCollapse = "collapse";
    }
    const columnList = Array.from(document.getElementsByClassName("col"));
    columnList.forEach((col) => {
      col.style.display = "table-cell";
      col.style.overflow = "hidden";
      col.style.textOverflow = "ellipsis";
      col.style.whiteSpace = "nowrap";
    });
    const rowList = Array.from(document.getElementsByClassName("row"));
    rowList.forEach((row) => {
      row.style.display = "table-row";
    });
  }
});
const _hoisted_1 = { id: "board-section" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    createElementVNode("header", {
      class: normalizeClass(["row", _ctx.boardHead])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columnList, (data, idx) => {
        return openBlock(), createElementBlock("div", {
          class: normalizeClass(["col", _ctx.headerCol]),
          style: normalizeStyle({ "max-width": data.maxWidth }),
          key: idx
        }, toDisplayString(data.name), 7);
      }), 128))
    ], 2),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.boardList, (data, idx) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["row", _ctx.boardRow]),
        key: idx
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columnList, (col, col_idx) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["col", _ctx.rowCol]),
            style: normalizeStyle({ "max-width": col.maxWidth }),
            key: col_idx
          }, toDisplayString(_ctx.selectParam(data, col)), 7);
        }), 128))
      ], 2);
    }), 128))
  ]);
}
var Board = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var ViewerPlugin = {
  install: (app, options = { name: "" }) => {
    app.component(options.name || "board", Board);
  }
};
export { Board, ViewerPlugin as default };
