declare const _default: import("vue").DefineComponent<{}, {}, {
    boardList: {
        content_id: string;
        content_title: string;
        content_author: string;
        view_count: number;
        like_count: number;
        comment_count: number;
    }[];
    columnList: {
        param: string;
        name: string;
        maxWidth: string;
    }[];
}, {}, {
    goDetail(event: any, data: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
