import dimensions from "@/data/image-dimensions.json";

// Intrinsic sizes recorded from the actual local assets. Output uploads should
// add their dimensions here; the fallback still reserves an explicit layout box.
export function getImageDimensions(src: string) {
  return (dimensions as Record<string, { width: number; height: number }>)[src]
    ?? { width: 1200, height: 900 };
}
