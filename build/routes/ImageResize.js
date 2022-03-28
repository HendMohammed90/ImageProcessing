"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sarpFunctionality_1 = __importDefault(require("../utilities/sarpFunctionality"));
var path_1 = __importDefault(require("path"));
var router = express_1.default.Router();
void router.use('/api/images', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, width, height;
    return __generator(this, function (_a) {
        filename = req.query.filename;
        width = req.query.width;
        height = req.query.height;
        //Validate Our Query Parameters
        if (typeof (filename) !== "string" ||
            filename === undefined) {
            res.send("Invalid image Name for ".concat(filename));
        }
        else {
            next();
        }
        if (width <= 0 || width === undefined || isNaN(width)) {
            res.send("Invalid width value for ".concat(width));
        }
        else {
            next();
        }
        if (height <= 0 || height === undefined || isNaN(height)) {
            res.send("Invalid height value for ".concat(height));
        }
        else {
            next();
        }
        return [2 /*return*/];
    });
}); });
void router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, width, height, parameter, resizedImage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //Set Our Headers
                res.setHeader("Content-Type", "image/jpeg");
                res.setHeader("Content-Disposition", "inline;filename=yolo.jpeg");
                filename = req.query.filename;
                width = req.query.width;
                height = req.query.height;
                return [4 /*yield*/, JSON.parse("{\"filename\":\"".concat(filename, "\", \"width\":").concat(width, ", \"height\":").concat(height, "}"))];
            case 1:
                parameter = _a.sent();
                return [4 /*yield*/, (0, sarpFunctionality_1.default)(parameter.filename, parameter.width, parameter.height)];
            case 2:
                resizedImage = _a.sent();
                res.sendFile(path_1.default.resolve(__dirname, "../../public/resizedImage/".concat(resizedImage)));
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
