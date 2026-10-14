import mongoose from "mongoose";

export interface Event extends mongoose.Document {
  name: string;
  description: string;
  image: string;
  photos: string[];
  link: string;
  slug: string;
  showOnLanding: boolean;
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
  // R2 key of the main photo
  image: {
    type: String,
    required: true,
  },
  // R2 keys of the extra photos, in display order
  photos: {
    type: [String],
    default: [],
  },
  link: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  showOnLanding: {
    type: Boolean,
    default: false,
    index: true,
  },
}, { timestamps: true, collection: "events" });

export default mongoose.models.Event ||
  mongoose.model<Event>("Event", EventSchema);
