# MIGRATION_TO_WINDOWS — oacc-react

**Prioritet: lav/sekundær.**
Vite + React-prosjekt, commit 9 dager siden. Ingen aktive prosesser, ingen `.env`, ingen database. Lett å migrere.

## Stack

- **Vite** (vite.config.ts)
- React + TypeScript
- ESLint
- Kjøres: `npm run dev` → http://localhost:5173 (typisk Vite-port)

## Kritiske filer og mapper

### MÅ kopieres

- `src/` — kildekode
- `public/` — statiske assets
- `index.html` (Vite-entry)
- `package.json`, `package-lock.json`
- `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `eslint.config.js`
- `README.md`

### IKKE kopier

- `node_modules/` — regenereres
- `dist/` — build-output, regenereres

## Installer på Windows

1. **Node.js 20+**

## Start på Windows

```powershell
cd C:\Users\<brukernavn>\oacc-react
npm install
npm run dev
```

## Mac-spesifikke problemer

Ingen.

## Forventede problemer

Ingen. Ren Vite-setup er maksimalt portabel.

## Sjekkliste

- [ ] `projects/oacc-react/` pakket (unntatt `node_modules`, `dist`)
