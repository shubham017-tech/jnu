# Stage 1: Build Frontends
FROM node:20-slim AS builder
WORKDIR /app

# Copy manifests
COPY client/package*.json ./client/
COPY admin/package*.json ./admin/

# Install frontend deps
RUN npm install --prefix client && npm install --prefix admin

# Copy frontend source
COPY client/ ./client/
COPY admin/ ./admin/

# Build frontends
# Note: Production API URLs should be set via build args or .env files during this stage
RUN npm run build --prefix client && npm run build --prefix admin

# Stage 2: Production Server
FROM python:3.11-slim
WORKDIR /app

# Install Node.js
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Copy backend manifests
COPY server/package*.json ./server/
RUN npm install --prefix server --production

# Copy built frontend assets from builder stage
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/admin/dist ./admin/dist

# Copy backend source
COPY server/ ./server/

# Copy python dependencies and scripts
COPY python_rec/ ./python_rec/
RUN pip install --no-cache-dir -r python_rec/requirements.txt

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start command
CMD ["npm", "run", "start", "--prefix", "server"]