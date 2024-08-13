import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function syncVersionNumbers(packageSource, packageTarget) {
  // Read package-a version
  const packageA = JSON.parse(readFileSync(join(__dirname, packageSource), 'utf8'));
  const version = packageA.version;

  // Update package-b version
  const packageB = JSON.parse(readFileSync(join(__dirname, packageTarget), 'utf8'));
  packageB.version = version;

  // Write updated package.json for package-b
  writeFileSync(join(__dirname, packageTarget), JSON.stringify(packageB, null, 2) + '\n');

  console.log(`Updated ${packageTarget} version to ${version}`);
}

function updateDependencyVersionNumbers(packageSource, packageTarget, dependency) {
  // Read package-a version
  const packageA = JSON.parse(readFileSync(join(__dirname, packageSource), 'utf8'));
  const version = packageA.version;

  // Update package-b version
  const packageB = JSON.parse(readFileSync(join(__dirname, packageTarget), 'utf8'));
  packageB.dependencies[dependency] = version;

  // Write updated package.json for package-b
  writeFileSync(join(__dirname, packageTarget), JSON.stringify(packageB, null, 2) + '\n');

  console.log(`Updated ${packageTarget} dependency ${dependency} version to ${version}`);
}

syncVersionNumbers('package.json', 'nuxt-module/package.json');
updateDependencyVersionNumbers('package.json', 'nuxt-module/package.json', 'usemods');