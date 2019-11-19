"use strict";

export default function getModule(s: string): any {
    const element: any = eval(`require("${s}")`);
    return element;
}
