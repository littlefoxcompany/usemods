// updateVersion.bun.js
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

function copyVersioNumberToPackage(packageSource: string, packageTarget: string) {
  // Read package-a version
  const packageA = JSON.parse(readFileSync(join(process.cwd(), packageSource), 'utf8'))
  const version = packageA.version

  // Update package-b version
  const packageB = JSON.parse(readFileSync(join(process.cwd(), packageTarget), 'utf8'))
  packageB.version = version

  // Write updated package.json for package-b
  writeFileSync(join(process.cwd(), packageTarget), JSON.stringify(packageB, null, 2) + '\n')

  console.log(`Updated ${packageTarget} version to ${version}`)
}

copyVersioNumberToPackage('package.json', 'nuxt-module/package.json')
