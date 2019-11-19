"use strict";

import apiSum from "./api/apiSum";
import apiPush from "./api/apiPush";
import apiAll from "./api/apiAll";

import apiPostSum from "./api/apiPostSum";

export default function route(app: any): any {
    console.log("Start routing");

    app.get("/api/sum", apiSum);
    app.get("/api/push", apiPush);
    app.get("/api/all", apiAll);

    app.post("/api/post/sum", apiPostSum);
}
