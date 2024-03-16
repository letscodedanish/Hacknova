# Use the official Node.js image as base
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . .

# Expose port 3000 to allow communication to/from the container
EXPOSE 3000

# Define the command to run the application when the container starts
CMD ["npm", "start"]


# Run the following command to build the Docker image:
# docker build -t wecare-frontend .

# you can run a container using the following command:
# docker run -p 3000:3000 wecare-frontend
