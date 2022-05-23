# PASSO 1 - npm init -y

# PASSO 2 - npm install typescript@latest

# PASSO 3 - npm install @types/node

# PASSO 4 - Criar Pasta src

# PASSO 5 - Criar Pasta dist

# PASSO 6 - npx tsc --init

# PASSO 7 - editar o tsconfig -> rootDir "./src" e outDir "./dist"

# PASSO 8 - npm install ts-node-dev

# PASSO 9 - criar os scripts necessários no package.json

# "dev": "ts-node-dev --ignore-watch node_modules src/index.ts",

# "build": "npx tsc",

# "start": "node ./dist/index.js"

# PASSO 10 - criar o arquivo .ts (typescript) na pasta src

# RODAR OS SCRIPTS

npm run dev - executa o arquivo typescript
npm run build - compila e transforma o arquivo TS em JS
npm run start - executa o arquivo javascript gerado após o build
