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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestSchedule = void 0;
const nest_distributed_schedule_1 = require("./nest-distributed.schedule");
class NestSchedule extends nest_distributed_schedule_1.NestDistributedSchedule {
    constructor() {
        super();
    }
    tryLock(method) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
}
exports.NestSchedule = NestSchedule;
