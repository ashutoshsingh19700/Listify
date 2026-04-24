import { supabase } from "../config/supabase.js";

export const createBusiness = async (data) => {
  const { name, category, location } = data;

  const { data: business, error } = await supabase
    .from("businesses")
    .insert([{ name, category, location }])
    .select();

  if (error) throw new Error(error.message);

  return business[0];
};

export const getAllBusinesses = async () => {
  const { data, error } = await supabase
    .from("businesses")
    .select("*");

  if (error) throw new Error(error.message);

  return data;
};
export const getBusinessById = async (id) => {
  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};



// 🔥 GET BUSINESS DETAILS
export const getBusinessDetails = async (businessId) => {
  // 1️⃣ Get business
  const { data: business, error: bError } = await supabase
    .from("businesses")
    .select("*")
    .eq("id", businessId)
    .single();

  if (bError) throw new Error("Business not found");

  // 2️⃣ Get reviews
  const { data: reviews, error: rError } = await supabase
    .from("reviews")
    .select("*")
    .eq("business_id", businessId);

  if (rError) throw new Error(rError.message);

  // 3️⃣ Calculate avg rating
  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return {
    business,
    reviews,
    avgRating: Number(avgRating.toFixed(1)),
    totalReviews: reviews.length,
  };
};