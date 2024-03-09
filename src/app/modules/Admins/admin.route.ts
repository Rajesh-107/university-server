import express from 'express';
import middleware from '../../middleware/validatedRequest';
import { AdminControllers } from './admin.controller';
import { updateAdminValidationSchema } from './admin.validation';

const router = express.Router();

router.get('/', AdminControllers.getAllAdmins);

router.get('/:id', AdminControllers.getSingleAdmin);

router.patch(
  '/:id',
  middleware(updateAdminValidationSchema),
  AdminControllers.updateAdmin
);

router.delete('/:adminId', AdminControllers.deleteAdmin);

export const AdminRoutes = router;
