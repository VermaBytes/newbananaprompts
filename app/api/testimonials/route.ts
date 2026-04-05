import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type ReviewRecord = {
  name: string;
  role: string;
  rating: number;
  features: string[];
  review: string;
  createdAt: string;
  updatedAt: string;
};

const dataFilePath = path.join(process.cwd(), "data", "testimonials.json");

async function readReviews(): Promise<ReviewRecord[]> {
  try {
    const file = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(file) as ReviewRecord[];
  } catch {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(dataFilePath, "[]", "utf-8");
    return [];
  }
}

async function writeReviews(reviews: ReviewRecord[]) {
  await fs.writeFile(dataFilePath, JSON.stringify(reviews, null, 2), "utf-8");
}

export async function GET() {
  const reviews = await readReviews();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Omit<ReviewRecord, "createdAt" | "updatedAt">;
  const name = payload.name?.trim();
  const review = payload.review?.trim();

  if (!name || !review) {
    return NextResponse.json({ message: "Name and review are required." }, { status: 400 });
  }

  const reviews = await readReviews();
  const now = new Date().toISOString();
  const existingIndex = reviews.findIndex(
    (entry) => entry.name.trim().toLowerCase() === name.toLowerCase()
  );

  if (existingIndex >= 0) {
    reviews[existingIndex] = {
      ...reviews[existingIndex],
      ...payload,
      updatedAt: now
    };
  } else {
    reviews.unshift({
      ...payload,
      createdAt: now,
      updatedAt: now
    });
  }

  await writeReviews(reviews);
  return NextResponse.json(reviews);
}
