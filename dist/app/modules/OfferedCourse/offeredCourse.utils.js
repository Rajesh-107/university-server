"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasTimeConflict = void 0;
const hasTimeConflict = (assignedSchedules, newSchedule) => {
    for (const schedule of assignedSchedules) {
        const existingStartime = new Date(`1970-01-01T${schedule.startTime}`);
        const existingEndtime = new Date(`1970-01-01T${schedule.endTime}`);
        const newStartTime = new Date(`1970-01-01T${newSchedule.startTime}`);
        const newEndTime = new Date(`1970-01-01T${newSchedule.endTime}`);
        if (newStartTime < existingEndtime && newEndTime > existingStartime) {
            return true;
        }
    }
    return false;
};
exports.hasTimeConflict = hasTimeConflict;
