"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offeredCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validatedRequest_1 = __importDefault(require("../../middleware/validatedRequest"));
const offredCourse_validation_1 = require("./offredCourse.validation");
const offredCourse_controller_1 = require("./offredCourse.controller");
const router = express_1.default.Router();
// router.get('/', OfferedCourseControllers.getAllOfferedCourses);
// router.get('/:id', OfferedCourseControllers.getSingleOfferedCourses);
router.post('/create-offered-course', (0, validatedRequest_1.default)(offredCourse_validation_1.OfferedCourseValidations.createOfferedCourseValidationSchema), offredCourse_controller_1.OfferedCourseControllers.createOfferedCourse);
// router.patch(
//   '/:id',
//   validateRequest(OfferedCourseValidations.updateOfferedCourseValidationSchema),
//   OfferedCourseControllers.updateOfferedCourse
// );
// router.delete('/:id', OfferedCourseControllers.deleteOfferedCourseFromDB);
exports.offeredCourseRoutes = router;
