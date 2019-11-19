"use strict";

export default function loadBody(request: any, response: any, callback: any): any {
    const bodyArr: string[] = [];
    request.on('data', (data: string) => {
        bodyArr.push(data);
    }).on('end', () => {
        const bodyString: string = bodyArr.join("");
        try {
            const bodyObj: any = JSON.parse(bodyString);
            callback(bodyObj);
        } catch (err) {
            response.end(JSON.stringify({
                result: "ERROR",
            }));
        }
    });
}
