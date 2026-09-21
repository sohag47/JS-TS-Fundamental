import LOG from "./LOG";

globalThis.LOG = LOG;

declare global {
    var LOG: typeof import("./LOG").default;
}