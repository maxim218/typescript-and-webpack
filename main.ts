"use strict";

import getModule from "./scripts/getModule";
import route from "./scripts/route";

const express: any = getModule("express");
const app: any = express();
const port: number = 5000;
app.listen(port);
console.log("Server on port: " + port);

route(app);
