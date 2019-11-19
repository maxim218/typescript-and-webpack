"use strict";

import getGlobalArr from "./../getGlobalArr";

export default function apiPush(request: any, response: any): any {
    const aParam: string = request.query["a"];
    const aNumber: number = parseInt(aParam);

    const arr: number[] = getGlobalArr();
    arr.push(aNumber);

    const resultString: string = JSON.stringify({
        result: "OK",
    });

    response.end(resultString);
}
