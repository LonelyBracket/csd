FROM node:20-alpine

WORKDIR /app

# Install build dependencies for native modules (sharp, etc.)
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev

# Copy package files and install
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build admin panel
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]
