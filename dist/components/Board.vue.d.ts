import { PropType } from 'vue';
import type { Col } from '@/shared/types/Col';
declare const _default: import("vue").DefineComponent<{
    boardList: ArrayConstructor;
    columnList: PropType<Col[]>;
    boardSection: StringConstructor;
    commonRow: StringConstructor;
    commonCol: StringConstructor;
    boardHead: StringConstructor;
    boardRow: StringConstructor;
    headerCol: StringConstructor;
    rowCol: StringConstructor;
}, void, unknown, {}, {
    selectParam(data: any, col: Col): String;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    boardList: ArrayConstructor;
    columnList: PropType<Col[]>;
    boardSection: StringConstructor;
    commonRow: StringConstructor;
    commonCol: StringConstructor;
    boardHead: StringConstructor;
    boardRow: StringConstructor;
    headerCol: StringConstructor;
    rowCol: StringConstructor;
}>>, {}>;
export default _default;
