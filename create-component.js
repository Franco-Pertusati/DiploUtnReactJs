const fs = require("fs");
const path = require("path");

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("❌ Por favor proporciona un nombre/ruta para el componente");
  process.exit(1);
}

// Normalizar ruta
const parts = inputPath.split("/").filter(Boolean);
const rawName = parts.pop(); // último segmento
const componentName =
  rawName.charAt(0).toUpperCase() + rawName.slice(1); // PascalCase
const relativeDir = parts.join("/");

// Directorio base (ajústalo a tu estructura, ej: src/components/)
const baseDir = path.join(__dirname, "src");
const componentDir = path.join(baseDir, relativeDir, componentName.toLocaleLowerCase());

const jsxFile = path.join(componentDir, `${componentName.toLowerCase()}.jsx`);

// Verificar si ya existe
if (fs.existsSync(componentDir)) {
  console.error("❌ Ese componente ya existe");
  process.exit(1);
}

// Crear carpeta
fs.mkdirSync(componentDir, { recursive: true });

// JSX boilerplate
const jsxTemplate = `import "@/app/globals.css";

const ${componentName} = () => {
  return (
    <div className={styles.container}>
      <span>${componentName} works!</span>
    </div>
  );
};

export default ${componentName};
`;

// CSS boilerplate
const cssTemplate = `.container {
  /* Styles for ${componentName} */
}
`;

// Crear archivos
fs.writeFileSync(jsxFile, jsxTemplate);

console.log(`✅ Componente ${componentName} creado en ${componentDir}`);
