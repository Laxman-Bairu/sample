# Stage 1: Build Angular application
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Angular app in production mode
RUN ng build  --configuration=production

# Stage 2: Serve app with Nginx
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from the builder stage
COPY --from=builder /app/dist/* /usr/share/nginx/html

# Copy custom Nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port (default: 80)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
