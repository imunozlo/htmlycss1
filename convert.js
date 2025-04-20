const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'src/img';
const outputDir = 'dist/img';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [
  { suffix: 'small', width: 480 },
  { suffix: 'medium', width: 768 },
  { suffix: 'large', width: 1280 }
];

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);

  if (ext === '.jpg' || ext === '.jpeg') {
    const inputPath = path.join(inputDir, file);

    // Imagen original → WebP
    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${baseName}.webp`))
      .then(() => console.log(`✔ ${file} → WebP`))
      .catch(err => console.error(err));

    // Versión responsive en JPEG y WebP
    sizes.forEach(({ suffix, width }) => {
      // JPEG responsive
      sharp(inputPath)
        .resize(width)
        .jpeg({ quality: 80 })
        .toFile(path.join(outputDir, `${baseName}-${suffix}.jpg`))
        .then(() => console.log(`✔ ${file} → ${suffix}.jpg`))
        .catch(err => console.error(err));

      // WebP responsive
      sharp(inputPath)
        .resize(width)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${baseName}-${suffix}.webp`))
        .then(() => console.log(`✔ ${file} → ${suffix}.webp`))
        .catch(err => console.error(err));
    });
  }
});
