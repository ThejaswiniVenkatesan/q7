# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Expose port 5000 for the backend
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
