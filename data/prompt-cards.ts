export type PromptCardData = {
  slug: string;
  title: string;
  image: string;
  prompt: string;
  tags: string[];
  tryUrl: string;
};

export const promptCards: PromptCardData[] = [
  {
    slug: "dark-cyberpunk-portrait",
    title: "Dark Cyberpunk Portrait",
    image: "/posts/image1.png",
    prompt:
      "Dark moody portrait of a mysterious person in low light, neon glow highlights, cinematic shadows, cyberpunk atmosphere, ultra detailed, high contrast, 4K wallpaper style",
    tags: ["#cinematic", "#cyberpunk", "#moody"],
    tryUrl: "https://www.bing.com/images/create"
  },
  {
    slug: "golden-hour-riverside",
    title: "Golden Hour Riverside",
    image: "/posts/thamnial.png",
    prompt:
      "Warm golden hour portrait by a riverside camp, soft bokeh forest background, cinematic light, 85mm lens look, natural skin tones, high detail.",
    tags: ["#portrait", "#goldenhour", "#outdoor"],
    tryUrl: "https://leonardo.ai"
  },
  {
    slug: "studio-headshot",
    title: "Clean Studio Headshot",
    image: "/posts/chat-blog.png",
    prompt:
      "Clean studio portrait, neutral background, soft key light, subtle rim light, sharp eyes, natural skin texture, professional headshot look.",
    tags: ["#professional", "#studio", "#clean"],
    tryUrl: "https://firefly.adobe.com"
  },
  {
    slug: "devotional-krishna",
    title: "Devotional Krishna Scene",
    image: "/posts/matarani-banner.png",
    prompt:
      "Lord Krishna in a serene temple courtyard, soft golden light, gentle aura, peacock feather crown, flute in hand, warm bokeh lanterns, respectful devotional tone.",
    tags: ["#devotional", "#spiritual", "#temple"],
    tryUrl: "https://www.bing.com/images/create"
  },
  {
    slug: "vegetable-market",
    title: "Vegetable Market Still Life",
    image: "/posts/jpg-png.png",
    prompt:
      "Fresh vegetable market still life, tomatoes, bell peppers, leafy greens, carrots, and onions on a rustic wooden table, natural window light, vibrant colors, shallow depth of field.",
    tags: ["#food", "#stilllife", "#market"],
    tryUrl: "https://leonardo.ai"
  },
  {
    slug: "futuristic-urban",
    title: "Futuristic Urban Glow",
    image: "/posts/3d-image-banner.png",
    prompt:
      "Futuristic urban street at night, neon reflections, rain-soaked pavement, cinematic lighting, high contrast, ultra detailed, 4K scene.",
    tags: ["#neon", "#urban", "#cinematic"],
    tryUrl: "https://firefly.adobe.com"
  }
];
