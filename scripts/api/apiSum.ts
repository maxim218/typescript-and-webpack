"use strict";

export default function apiSum(request: any, response: any): any {
    const aParam: string = request.query["a"];
    const bParam: string = request.query["b"];

    const aNumber: number = parseInt(aParam);
    const bNumber: number = parseInt(bParam);

    const sum: number = aNumber + bNumber;

    const resultString: string = JSON.stringify({
        result: sum,
    });

    response.end(resultString);
}
