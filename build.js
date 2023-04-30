const fs = require('fs');

const links = {
  wiggindev: 'https://github.com/wiggindev/-wiggindev/tree/main/packages',
  enumer8: 'https://www.npmjs.com/package/enumer8',
  vapeaware: 'https://github.com/wiggindev/VapeAware',
  linkedin: 'https://linkedin.com/in/wiggindev',
  github: 'https://github.com/wiggindev',
  mail: 'mailto:andrew@wiggin.dev',
  twitter: 'https://twitter.com/wiggindev',
};

const redirects = [{
  "source": "/",
  "destination": "https://wiggin.dev",
  "permanent": true
}];

Object.entries(links).forEach(([key, url]) => {
  redirects.push({
    "source": `/${key}`,
    "destination": url,
    "permanent": true
  });
});

fs.writeFileSync("vercel.json", JSON.stringify({
  redirects,
}));
