import mongoose, { Types } from "mongoose";

export interface Event extends mongoose.Document {
  name: string;
  description: string;
  image: string;
  link: string;
  slug: string;
}

const EventSchema = new mongoose.Schema<Event>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
}, { timestamps: true, collection: "events" });

export default mongoose.models.Event ||
  mongoose.model<Event>("Event", EventSchema);
