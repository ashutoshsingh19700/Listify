import { supabase } from "../config/supabase.js";

// ✅ ADD REVIEW
export const addReview = async (userId, businessId, rating, comment) => {
  // 🔥 VALIDATION
  if (!rating || rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }

  // 🔥 PREVENT DUPLICATE REVIEW
  const { data: existing } = await supabase
    .from("reviews")
    .select("*")
    .eq("user_id", userId)
    .eq("business_id", businessId)
    .maybeSingle();

  if (existing) {
    throw new Error("You already reviewed this business");
  }

  // ✅ INSERT REVIEW
  const { data, error } = await supabase
    .from("reviews")
    .insert([
      {
        user_id: userId,
        business_id: businessId,
        rating,
        comment,
      },
    ])
    .select();

  if (error) throw new Error(error.message);

  // 🔥 UPDATE RATING
  await updateBusinessRating(businessId);

  return data[0];
};

// ✅ GET REVIEWS
export const getReviewsByBusiness = async (businessId) => {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("business_id", businessId);

  if (error) throw new Error(error.message);

  return data;
};

// 🔥 UPDATE AVG RATING (SAFE VERSION)
const updateBusinessRating = async (businessId) => {
  const { data, error } = await supabase
    .from("reviews")
    .select("rating")
    .eq("business_id", businessId);

  if (error) throw new Error(error.message);

  if (!data || data.length === 0) return;

  const avg =
    data.reduce((sum, r) => sum + r.rating, 0) / data.length;

  await supabase
    .from("businesses")
    .update({ rating: Number(avg.toFixed(1)) }) // 🔥 rounded
    .eq("id", businessId);
};