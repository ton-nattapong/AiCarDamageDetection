import mongoose, { Schema, model, Document } from "mongoose";

interface ICustomerInsurance extends Document {
  customer_ins: number;
  user_id: mongoose.Schema.Types.ObjectId;
  policy_number: string;
  insurance_type: string;
  policy_start_date: Date;
  policy_end_date: Date;
  car_brand: string;
  car_model: string;
  car_year: number;
  license_plate: string;
  claim_limit: mongoose.Types.Decimal128;
  coverage_details?: string;
  status: "pending" | "approved" | "rejected";
  rejection_reason?: string;
  registered_car_image?: string; 
  firstName: string;
  lastName: string;
}

const customerInsuranceSchema = new Schema<ICustomerInsurance>({

  customer_ins: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  policy_number: { type: String, required: true, unique: true },
  insurance_type: { type: String, required: true },
  policy_start_date: { type: Date, required: true },
  policy_end_date: { type: Date, required: true },
  car_brand: { type: String, required: true },
  car_model: { type: String, required: true },
  car_year: { type: Number, required: true },
  license_plate: { type: String, required: true, unique: true },
  claim_limit: { type: mongoose.Types.Decimal128, required: true },
  coverage_details: { type: String },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  rejection_reason: { type: String },
  registered_car_image: { type: String }, // ✅ เพิ่มตรงนี้
}, {
  timestamps: true,
});

const CustomerInsurance =
  mongoose.models.CustomerInsurance || model<ICustomerInsurance>("CustomerInsurance", customerInsuranceSchema);

export default CustomerInsurance;