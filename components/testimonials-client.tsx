"use client";

import { useEffect, useMemo, useState } from "react";

type ReviewData = {
  name: string;
  role: string;
  rating: number;
  features: string[];
  review: string;
  createdAt?: string;
  updatedAt?: string;
};

const STORAGE_KEY = "nbp-testimonial-name";
const featureOptions = ["Easy to learn", "AI support", "Practical tasks", "Course structure"];

export function TestimonialsClient() {
  const [formData, setFormData] = useState<ReviewData>({
    name: "",
    role: "",
    rating: 5,
    features: [],
    review: ""
  });
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [currentName, setCurrentName] = useState("");
  const [status, setStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedName = window.localStorage.getItem(STORAGE_KEY);
    if (storedName) {
      setCurrentName(storedName);
    }
  }, []);

  useEffect(() => {
    const loadReviews = async () => {
      const response = await fetch("/api/testimonials");
      if (!response.ok) return;
      const data = (await response.json()) as ReviewData[];
      setReviews(data);
    };

    loadReviews();
  }, []);

  useEffect(() => {
    if (!currentName) return;
    const existing = reviews.find((review) => review.name.toLowerCase() === currentName.toLowerCase());
    if (existing) {
      setFormData(existing);
    }
  }, [currentName, reviews]);

  const isEditMode = Boolean(
    currentName && reviews.find((review) => review.name.toLowerCase() === currentName.toLowerCase())
  );
  const canSubmit = formData.name.trim().length > 0 && formData.review.trim().length > 0;

  const ratingStars = useMemo(() => {
    return Array.from({ length: 5 }, (_, index) => index + 1);
  }, []);

  const handleToggleFeature = (feature: string) => {
    setFormData((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists ? prev.features.filter((item) => item !== feature) : [...prev.features, feature]
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    const response = await fetch("/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      setStatus("Unable to submit review. Please try again.");
      window.setTimeout(() => setStatus(""), 2400);
      return;
    }

    const updatedReviews = (await response.json()) as ReviewData[];
    setReviews(updatedReviews);
    window.localStorage.setItem(STORAGE_KEY, formData.name.trim());
    setCurrentName(formData.name.trim());
    setIsEditing(false);
    setStatus(isEditMode ? "Review updated successfully." : "Review submitted successfully.");
    window.setTimeout(() => setStatus(""), 2400);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setStatus("You can update your review now.");
    window.setTimeout(() => setStatus(""), 2000);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-12">
      <section className="site-panel space-y-6 rounded-2xl px-6 py-8 sm:px-10">
        <div className="space-y-2">
          <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">User Reviews</p>
          <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
            Testimonials & Ratings
          </h1>
          <p className="theme-text-secondary max-w-2xl text-sm leading-7 sm:text-base">
            Share your experience with our Web Development with AI course. One user can submit one review. You can edit
            it anytime.
          </p>
        </div>

        {!isEditMode || isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="theme-text-secondary text-sm font-semibold" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder="Shobhit Verma"
                  className="theme-input w-full rounded-xl px-4 py-3 text-sm outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="theme-text-secondary text-sm font-semibold" htmlFor="role">
                  Role (Optional)
                </label>
                <input
                  id="role"
                  value={formData.role}
                  onChange={(event) => setFormData({ ...formData, role: event.target.value })}
                  placeholder="Student / Developer"
                  className="theme-input w-full rounded-xl px-4 py-3 text-sm outline-none"
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="theme-text-secondary text-sm font-semibold">Rating</p>
              <div className="flex flex-wrap items-center gap-2">
                {ratingStars.map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      formData.rating >= star ? "bg-[#f59e0b] text-white" : "theme-button theme-soft-hover"
                    }`}
                  >
                    {star} ★
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="theme-text-secondary text-sm font-semibold">What did you like?</p>
              <div className="flex flex-wrap gap-2">
                {featureOptions.map((feature) => {
                  const active = formData.features.includes(feature);
                  return (
                    <button
                      key={feature}
                      type="button"
                      onClick={() => handleToggleFeature(feature)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                        active ? "bg-[#0f766e] text-white" : "theme-button theme-soft-hover"
                      }`}
                    >
                      {feature}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label className="theme-text-secondary text-sm font-semibold" htmlFor="review">
                Your Review
              </label>
              <textarea
                id="review"
                value={formData.review}
                onChange={(event) => setFormData({ ...formData, review: event.target.value })}
                placeholder="Share your learning experience..."
                className="theme-input min-h-[140px] w-full rounded-xl px-4 py-3 text-sm outline-none"
                required
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="hero-cta inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white"
                disabled={!canSubmit}
              >
                {isEditMode ? "Update Review" : "Submit Review"}
              </button>
              {status ? <span className="theme-text-muted text-sm">{status}</span> : null}
            </div>
          </form>
        ) : (
          <div className="theme-surface rounded-2xl border border-dashed border-[#eadfce] px-6 py-8 text-center">
            <p className="theme-text-secondary text-sm">Thanks! Your review is live below.</p>
          </div>
        )}
      </section>

      <section className="space-y-5">
        <h2 className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold">
          Rating Card
        </h2>
        {reviews.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviews.slice(0, 3).map((review) => {
              const isOwner = currentName && review.name.toLowerCase() === currentName.toLowerCase();
              return (
                <div key={review.name} className="tool-card space-y-4 rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="theme-text-primary text-xl font-bold">{review.name}</h3>
                      <p className="theme-text-muted text-sm">{review.role || "Learner"}</p>
                    </div>
                    {isOwner ? (
                      <button
                        type="button"
                        onClick={handleEdit}
                        className="theme-button theme-soft-hover inline-flex h-10 w-10 items-center justify-center rounded-full"
                        aria-label="Edit review"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                      </button>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2 text-[#f59e0b]">
                    {ratingStars.map((star) => (
                      <span key={star} className={review.rating >= star ? "" : "opacity-30"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="theme-text-secondary text-sm leading-7">{review.review}</p>
                  {review.features.length ? (
                    <div className="flex flex-wrap gap-2">
                      {review.features.map((feature) => (
                        <span
                          key={feature}
                          className="theme-surface theme-text-muted rounded-full px-3 py-1 text-xs font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="theme-text-secondary text-sm">No reviews yet. Be the first to submit.</p>
        )}
      </section>
    </div>
  );
}
