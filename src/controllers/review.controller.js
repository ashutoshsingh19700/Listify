import {
  addReview,
  getReviewsByBusiness,
} from "../services/review.service.js";

// ✅ ADD REVIEW
export const createReview = async (req, res) => {
  try {
    const userId = req.user.id; // 🔥 from token
    const { businessId, rating, comment } = req.body;

    const review = await addReview(
      userId,
      businessId,
      rating,
      comment
    );

    res.json({
      message: "Review added",
      review,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ GET REVIEWS
export const getReviews = async (req, res) => {
  try {
    const { businessId } = req.params;

    const reviews = await getReviewsByBusiness(businessId);

    res.json(reviews);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};