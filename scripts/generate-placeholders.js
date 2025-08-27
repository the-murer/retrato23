const fs = require('fs');
const { createCanvas } = require('canvas');

// Create showcase images
const showcaseImages = [
  { name: 'portrait-1.jpg', text: 'Portrait', color: '#ed7a4a' },
  { name: 'couple-1.jpg', text: 'Couple', color: '#e0d5c8' },
  { name: 'fashion-1.jpg', text: 'Fashion', color: '#d1c2b1' },
  { name: 'corporate-1.jpg', text: 'Corporate', color: '#b8a593' }
];

// Create photographer image
const photographerImage = { name: 'photographer-portrait.jpg', text: 'Photographer', color: '#ed7a4a' };

// Create hero image
const heroImage = { name: 'hero-portrait.jpg', text: 'Hero Portrait', color: '#e0d5c8' };

function createPlaceholderImage(filename, text, color, width = 500, height = 625) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, '#f5f1eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Add subtle pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  for (let i = 0; i < width; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/${filename}`, buffer);
  console.log(`Created: ${filename}`);
}

// Generate all images
console.log('Generating placeholder images...');

// Create directories if they don't exist
if (!fs.existsSync('public/showcase')) {
  fs.mkdirSync('public/showcase', { recursive: true });
}
if (!fs.existsSync('public/photographer')) {
  fs.mkdirSync('public/photographer', { recursive: true });
}

// Generate showcase images
showcaseImages.forEach(img => {
  createPlaceholderImage(`showcase/${img.name}`, img.text, img.color);
});

// Generate photographer image
createPlaceholderImage(`photographer/${photographerImage.name}`, photographerImage.text, photographerImage.color);

// Generate hero image
createPlaceholderImage(heroImage.name, heroImage.text, heroImage.color);

console.log('All placeholder images generated successfully!');
