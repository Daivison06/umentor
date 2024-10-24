# Use uma imagem Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta em que o Vite irá rodar
EXPOSE 5173

# Comando para rodar o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]
