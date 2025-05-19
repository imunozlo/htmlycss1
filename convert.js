const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "src/img"); // asegúrate que "img/" exista
const outputFile = path.join(outputDir, "alcachofa3-placeholder.jpg");

// Crear carpeta si no existe (por seguridad)
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

sharp("src/img/alcachofa3.jpg")
  .resize(10)
  .blur()
  .jpeg({ quality: 60, progressive: true })
  .toFile(outputFile, (err, info) => {
    if (err) {
      console.error("Error generando placeholder:", err);
    } else {
      console.log("✅ Placeholder generado correctamente:", info);
    }
  });
