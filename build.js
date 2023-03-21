const fs = require('fs');
const path = require('path');

// Constants
const OUT_DIR = './dist';

const links = {
  wiggindev: 'https://github.com/wiggindev/-wiggindev/tree/main/packages',
  enumer8: 'https://www.npmjs.com/package/enumer8',
  vapeaware: 'https://github.com/wiggindev/VapeAware',
  linkedin: 'https://linkedin.com/in/wiggindev',
  github: 'https://github.com/wiggindev',
  mail: 'mailto:andrew@wiggin.dev',
  twitter: 'https://twitter.com/wiggindev',
};

// Setup
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}

// Build
const template = fs.readFileSync('./template.html', 'utf8');

const indexContent = template.replace('{{url}}', 'https://wiggin.dev');
fs.writeFileSync(path.join(OUT_DIR, 'index.html'), indexContent);

Object.entries(links).forEach(([key, url]) => {
  fs.mkdirSync(path.join(OUT_DIR, key));
  const fileContent = template.replace('{{url}}', url);
  fs.writeFileSync(path.join(OUT_DIR, key, 'index.html'), fileContent);
});
