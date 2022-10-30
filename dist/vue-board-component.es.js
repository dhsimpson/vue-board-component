import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, Fragment, renderList, normalizeStyle, toDisplayString } from "vue";
var Board_vue_vue_type_style_index_0_lang = "";
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
    commonRow: String,
    commonCol: String,
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
  setup() {
    console.log("hello!!!");
  },
  mounted() {
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("button", null, "click me", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", { id: _ctx.boardSection }, [
    _hoisted_2,
    createElementVNode("header", {
      class: normalizeClass([_ctx.commonRow, _ctx.boardHead])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columnList, (data, idx) => {
        return openBlock(), createElementBlock("div", {
          class: normalizeClass([_ctx.commonCol, _ctx.headerCol]),
          style: normalizeStyle({ "max-width": data.maxWidth }),
          key: idx
        }, toDisplayString(data.name), 7);
      }), 128))
    ], 2),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.boardList, (data, idx) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.commonRow, _ctx.boardRow]),
        key: idx
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columnList, (col, col_idx) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass([_ctx.commonCol, _ctx.rowCol]),
            style: normalizeStyle({ "max-width": col.maxWidth }),
            key: col_idx
          }, toDisplayString(_ctx.selectParam(data, col)), 7);
        }), 128))
      ], 2);
    }), 128))
  ], 8, _hoisted_1);
}
var Board = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var ViewerPlugin = {
  install: (app, options = { name: "" }) => {
    app.component(options.name || "board", Board);
  }
};
export { Board, ViewerPlugin as default };
