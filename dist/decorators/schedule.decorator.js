"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cron = exports.Timeout = exports.Interval = void 0;
require("reflect-metadata");
const constants_1 = require("../constants");
const metadata_util_1 = require("../utils/metadata.util");
const Interval = (milliseconds, config = {}) => createSchedule(Object.assign({ interval: milliseconds }, config));
exports.Interval = Interval;
const Timeout = (milliseconds, config = {}) => createSchedule(Object.assign({ timeout: milliseconds }, config));
exports.Timeout = Timeout;
const Cron = (cron, config = {}) => createSchedule(Object.assign({ cron }, config));
exports.Cron = Cron;
const createSchedule = (config) => (target, key, descriptor) => {
    const identity = config.key ? config.key : key;
    metadata_util_1.extendMetadata(constants_1.NEST_SCHEDULE_JOB_KEY, Object.assign(Object.assign({}, config), { key: identity, method: key }), target);
};
