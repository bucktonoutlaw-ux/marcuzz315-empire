# 🚀 DEPLOY GUIDE — $marcuzz315 Empire

## All Sites & Netlify Project IDs

| Site | Netlify ID | URL | Repo Folder |
|---|---|---|---|
| AI Tool Hub | `9053434b-6991-4292-b226-7aa454943299` | ai-toolhub.netlify.app | `ai-toolhub/` |
| Digital Store | `40c7b2c8-2de0-4eca-8c53-d847d7908236` | marcuzz-store.netlify.app | `marcuzz-store/` |
| SEO Blog | `59ee3ef2-a175-4acf-a724-599b09cbac8d` | outlaw-built-blog.netlify.app | `outlaw-blog/` |
| Link-in-Bio | `9ae99a71-d182-47ad-bf50-a51a63318cbc` | marcuzz-links.netlify.app | `marcuzz-links/` |

## Deploy Commands (for Claude Code)

Each site deploys from its subfolder. Run from the repo root:

### AI Tool Hub
```bash
cd ai-toolhub
npx -y netlify-cli deploy --prod --dir=. --site=9053434b-6991-4292-b226-7aa454943299
```

### Digital Store
```bash
cd marcuzz-store
npx -y netlify-cli deploy --prod --dir=. --site=40c7b2c8-2de0-4eca-8c53-d847d7908236
```

### SEO Blog
```bash
cd outlaw-blog
npx -y netlify-cli deploy --prod --dir=. --site=59ee3ef2-a175-4acf-a724-599b09cbac8d
```

### Link-in-Bio
```bash
cd marcuzz-links
npx -y netlify-cli deploy --prod --dir=. --site=9ae99a71-d182-47ad-bf50-a51a63318cbc
```

## Quick Deploy All (one script)
```bash
#!/bin/bash
for dir in ai-toolhub marcuzz-store outlaw-blog marcuzz-links; do
  echo "Deploying $dir..."
  cd $dir
  npx -y netlify-cli deploy --prod --dir=.
  cd ..
done
echo "All sites deployed!"
```

## GitHub Repo
https://github.com/bucktonoutlaw-ux/marcuzz315-empire

All site files are in the repo. Clone it, then deploy each subfolder.
