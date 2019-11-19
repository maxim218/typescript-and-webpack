"use strict";

import getGlobalArr from "./../getGlobalArr";

export default function apiAll(request: any, response: any): any {
    const arr: number[] = getGlobalArr();

    const arrString: string = JSON.stringify(arr, null, 4);

    const resultString: string = arrString;

    response.end(resultString);
}
