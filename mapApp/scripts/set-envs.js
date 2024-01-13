require("dotenv").config();
const { mkdirSync, writeFileSync } = require("fs");

const targetPath = "./src/environments/environments.ts";
const envFileContents = `
export const environments = {
  mapbox_key: "${process.env["MAPBOX_KEY"]}"
}
`;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContents);
