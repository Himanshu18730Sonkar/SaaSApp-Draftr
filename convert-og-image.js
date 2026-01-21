import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/assets/heroScreen.avif');
const outputPath = path.join(__dirname, 'public/og-image.jpg');

sharp(inputPath)
  .resize(1200, 630, {
    fit: 'cover',
    position: 'center'
  })
  .jpeg({ quality: 90 })
  .toFile(outputPath)
  .then(() => {
    console.log('✅ OG image created successfully at public/og-image.jpg');
    console.log('Size: 1200x630 pixels (optimal for LinkedIn/Facebook)');
  })
  .catch(err => {
    console.error('Error converting image:', err);
  });
