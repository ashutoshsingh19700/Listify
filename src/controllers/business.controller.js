import {
  createBusiness,
  getAllBusinesses,
  getBusinessDetails,
} from "../services/business.service.js";

// ✅ ADD BUSINESS
export const addBusiness = async (req, res) => {
  try {
    const business = await createBusiness(req.body);

    res.status(201).json({
      message: "Business added",
      business,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

// ✅ GET ALL
export const getBusinesses = async (req, res) => {
  try {
    const data = await getAllBusinesses();
    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ✅ GET FULL DETAILS
export const getBusinessFullDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await getBusinessDetails(id);

    res.json(data);
  } catch (err) {
    res.status(404).json({
      error: err.message,
    });
  }
};