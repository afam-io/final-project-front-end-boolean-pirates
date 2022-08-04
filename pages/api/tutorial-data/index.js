// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const tutorialData = [
  {
    id: 1,
    title: 'Wind Turbine',
    likes: 200,
    youtubeUrl:
      'https://cdn.vox-cdn.com/thumbor/AF96Bp-HCWW5FZtfLxtHsUTrnaM=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66546655/acastro_180403_1777_youtube_0002.0.jpg',
    level: 'Beginner',
    materials: 'Aluminium, Steel',
    instructions:
      "Step 1: Take an aluminium sheet and measure a box 42cm x 48cm. Draw a line half way up the 48cm length so you have two boxes measuring 42cm x 24cm. Score the outer lines with the Stanley knife and straight edge. You're not trying to cut through the metal, just create a line that can then be popped out later. A good method is to score once lightly, then a second time a bit deeper. Do not score the 24cm halfway line.",
  },
  {
    id: 2,
    title: 'Solar fan',
    likes: 215,
    youtubeUrl:
      'https://cdn.vox-cdn.com/thumbor/AF96Bp-HCWW5FZtfLxtHsUTrnaM=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66546655/acastro_180403_1777_youtube_0002.0.jpg',
    level: 'Intermediate',
    materials: 'Aluminium, Steel',
    instructions:
      "Step 1: Take an aluminium sheet and measure a box 42cm x 48cm. Draw a line half way up the 48cm length so you have two boxes measuring 42cm x 24cm. Score the outer lines with the Stanley knife and straight edge. You're not trying to cut through the metal, just create a line that can then be popped out later. A good method is to score once lightly, then a second time a bit deeper. Do not score the 24cm halfway line.",
  },
  {
    id: 3,
    title: 'Solar Cooker',
    likes: 3000,
    youtubeUrl:
      'https://cdn.vox-cdn.com/thumbor/AF96Bp-HCWW5FZtfLxtHsUTrnaM=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66546655/acastro_180403_1777_youtube_0002.0.jpg',
    level: 'Expert',
    materials: 'Aluminium, Steel',
    instructions:
      "Step 1: Take an aluminium sheet and measure a box 42cm x 48cm. Draw a line half way up the 48cm length so you have two boxes measuring 42cm x 24cm. Score the outer lines with the Stanley knife and straight edge. You're not trying to cut through the metal, just create a line that can then be popped out later. A good method is to score once lightly, then a second time a bit deeper. Do not score the 24cm halfway line.",
  },
];

export default function handler(req, res) {
  res.status(200).json(tutorialData);
}
