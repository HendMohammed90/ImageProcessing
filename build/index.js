"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import path from "path";
// create a server
var app = (0, express_1.default)();
//import our routers
var ImageResize_1 = __importDefault(require("./routes/ImageResize"));
//import Some utilities
var morgan_1 = __importDefault(require("morgan"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
//Use Some Of Middleware
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("tiny"));
}
//define our Port
var port = process.env.PORT || 8080;
//Mount Our Route
app.use("/api/images", ImageResize_1.default);
//set The listening
app.listen(port, function () {
    console.log("App Running in ".concat(process.env.NODE_ENV, " mode at localhost:").concat(port, " "));
});
exports.default = app;
