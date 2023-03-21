const fs = require('fs');

// Constants
const OUT_DIR = './dist';

const links = {
  index: 'https://wiggin.dev',
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

Object.entries(links).forEach(([path, url]) => {
  const fileContent = template.replace('{{url}}', url);
  fs.writeFileSync(`${OUT_DIR}/${path}.html`, fileContent);
});
