const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Por favor proporciona un nombre para el componente');
  process.exit(1);
}

const componentsDir = path.join(__dirname, 'src/app/');
const componentDir = path.join(componentsDir, componentName);
const jsxFile = path.join(componentDir, `${componentName}.jsx`);
const cssFile = path.join(componentDir, `${componentName}.module.css`);

// Verificar si ya existe
if (fs.existsSync(componentDir)) {
  console.error('❌ Ese componente ya existe');
  process.exit(1);
}

// Crear carpeta del componente
fs.mkdirSync(componentDir, { recursive: true });

// JSX boilerplate
const jsxTemplate = `import styles from './${componentName}.module.css';

export default function ${componentName}() {
  return (
    <div className={styles.container}>
      {/* ${componentName} component */}
    </div>
  );
}
`;

// CSS Module boilerplate
const cssTemplate = `.container {
  /* Estilos para ${componentName} */
}
`;

// Escribir archivos
fs.writeFileSync(jsxFile, jsxTemplate);
fs.writeFileSync(cssFile, cssTemplate);

console.log(`✅ Componente ${componentName} creado en /components/${componentName}`);
