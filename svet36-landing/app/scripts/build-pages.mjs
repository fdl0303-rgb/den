import { rmSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs'
import { resolve, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const app = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const root = resolve(app, '..')

rmSync(resolve(root, 'index.html'), { force: true })
rmSync(resolve(root, 'assets'), { recursive: true, force: true })
rmSync(resolve(root, 'public'), { recursive: true, force: true })
rmSync(resolve(root, 'vite.svg'), { force: true })

const result = spawnSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['vite', 'build', '--base', '/den/svet36-landing/', '--outDir', '../', '--emptyOutDir', 'false'],
  { cwd: app, stdio: 'inherit', shell: process.platform === 'win32' },
)

if (result.status !== 0) process.exit(result.status ?? 1)

const publicDir = resolve(app, 'public')
const outPublicDir = resolve(root, 'public')
mkdirSync(outPublicDir, { recursive: true })
for (const file of readdirSync(publicDir)) {
  copyFileSync(resolve(publicDir, file), resolve(outPublicDir, basename(file)))
}

console.log('Pages build ready at:', root)