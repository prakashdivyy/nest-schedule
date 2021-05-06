"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectSchedule = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const InjectSchedule = () => common_1.Inject(constants_1.NEST_SCHEDULE_PROVIDER);
exports.InjectSchedule = InjectSchedule;
