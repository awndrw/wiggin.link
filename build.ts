import fs from "fs";
import path from "path";
import { EMAIL, GITHUB, TWITTER, LINKEDIN, HOSTS } from "links";

const URL_PLACEHOLDER = "{{url}}";
const OUT_DIR = path.resolve(__dirname, "dist");
const LINKS = {
  EMAIL,
  GITHUB,
  TWITTER,
  LINKEDIN,
  wiggindev: "https://github.com/wiggindev/-wiggindev/tree/main/packages",
  enumer8: "https://www.npmjs.com/package/enumer8",
  vapeaware: "https://github.com/wiggindev/VapeAware",
};

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}

const template = `<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0; URL=${URL_PLACEHOLDER}" />
</head>
</html>`;

const indexContent = template.replace(URL_PLACEHOLDER, HOSTS.WIGGIN_DEV);
fs.writeFileSync(path.join(OUT_DIR, "index.html"), indexContent);

Object.entries(LINKS).forEach(([key, url]) => {
  const dir = path.join(OUT_DIR, key.toLowerCase());
  fs.mkdirSync(dir);
  const fileContent = template.replace(URL_PLACEHOLDER, url);
  fs.writeFileSync(path.join(dir, "index.html"), fileContent);
});
