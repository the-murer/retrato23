import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function mediaUrl(key: string) {
  return `${process.env.NEXT_PUBLIC_MEDIA_URL}/${key}`
}

// Uploaded photos live at events/<id>.jpg with a sibling events/<id>_thumb.jpg.
// Keys outside that pattern (legacy uploads) have no thumbnail and map to themselves.
export function thumbKey(key: string) {
  return key.replace(/^(events\/[\w-]+)\.jpg$/, "$1_thumb.jpg")
}
