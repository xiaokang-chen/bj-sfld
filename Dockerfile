# 使用 Node.js 官方镜像作为构建环境
FROM node:16 AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install --legacy-peer-deps

# 复制项目文件
COPY . .

# 构建应用
RUN npm run build

# 使用 nginx 镜像作为运行环境
FROM nginx:alpine

# 从构建阶段复制构建好的文件
COPY --from=builder /app/.output/public /usr/share/nginx/html

# 复制自定义 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]