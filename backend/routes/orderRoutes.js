const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");
const {
  createOrder,
  getAllOrders,
  getMyOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/").post(protect, createOrder).get(protect, admin, getAllOrders);
router.route('/getmyorders').get(protect,getMyOrders)
router
  .route("/:id/status")
  .put(protect, admin, updateOrderStatus);

module.exports = router;
  