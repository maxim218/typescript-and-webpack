"use strict";

import loadBody from "./../loadBody";

export default function apiPostSum(request: any, response: any): any {
    loadBody(request, response, function(bodyObject: any) {
        const paramsObject: any = bodyObject;

        let a: number = paramsObject.a;
        let b: number = paramsObject.b;

        let sum: number = a + b;

        const resultString: string = JSON.stringify({
            result: sum,
        });

        response.end(resultString);
    });
}
