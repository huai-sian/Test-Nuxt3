# 使用 node 長期支援版
FROM node:lts-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 至工作目錄
COPY package*.json ./

# 依照指定版本安裝依賴
RUN npm ci

# 複製所有
COPY . .

# 建立生產版本
RUN npm run build

# 暴露的連接埠
EXPOSE 3000

# 啟動應用程式
CMD ["node", ".output/server/index.mjs"]