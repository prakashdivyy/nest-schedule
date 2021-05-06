"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseLocker = void 0;
require("reflect-metadata");
const metadata_util_1 = require("../utils/metadata.util");
const constants_1 = require("../constants");
const UseLocker = (Locker) => (target, key, descriptor) => {
    metadata_util_1.extendMetadata(constants_1.NEST_SCHEDULE_LOCKER, { Locker, key }, target);
    metadata_util_1.extendMetadata(constants_1.GUARDS_METADATA, Locker, descriptor.value);
};
exports.UseLocker = UseLocker;
