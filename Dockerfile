# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Install serve globally for serving the build
RUN npm install -g serve

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the application
COPY . .
RUN npm run build

# Serve the application on port 5173
EXPOSE 5173
CMD ["npm", "run", "dev"]
