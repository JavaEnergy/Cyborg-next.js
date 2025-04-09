// Script to move images from src/public to public
const fs = require('fs');
const path = require('path');

// Function to copy a file
function copyFile(source, destination) {
  // Create directory if it doesn't exist
  const dir = path.dirname(destination);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    // Copy the file
    fs.copyFileSync(source, destination);
    console.log(`Copied: ${source} to ${destination}`);
  } catch (err) {
    console.error(`Error copying ${source}: ${err.message}`);
  }
}

// Function to recursively copy a directory
function copyDirectory(source, destination) {
  // Check if source directory exists
  if (!fs.existsSync(source)) {
    console.error(`Source directory does not exist: ${source}`);
    return;
  }

  // Create destination if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read all files/directories in the source
  const items = fs.readdirSync(source);

  // Process each item
  for (const item of items) {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);
    
    // Get item stats
    const stats = fs.statSync(sourcePath);
    
    if (stats.isDirectory()) {
      // Recursively copy directories
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy files
      copyFile(sourcePath, destPath);
    }
  }
}

// Main function
function main() {
  const srcPublicDir = path.join(__dirname, 'src', 'public');
  const publicDir = path.join(__dirname, 'public');

  console.log('Starting to copy files from src/public to public...');
  copyDirectory(srcPublicDir, publicDir);
  console.log('Copy operation completed.');
}

main(); 