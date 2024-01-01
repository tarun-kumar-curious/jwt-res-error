# Bug fix on folder structure
#!/usr/bin/env sh

# Define the path to the "Frontend-assets" directory
frontend_assets_dir="C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\React JS - Alpha\\Frontend-Assets\\"

# Check if the directory exists
if [ ! -d "$frontend_assets_dir" ]; then
  echo "Error: The 'Frontend-assets' directory does not exist."
  exit 1
fi

# Change the working directory to "Frontend-assets"
cd "$frontend_assets_dir"

# Build the React/Vite application for production
echo 'Building your React/Vite application for production...'
if npm run build; then
  echo 'Build successful.'
else
  echo 'Error: Build failed.'
  exit 1
fi

# Run the React/Vite application in development mode
echo 'Starting your React/Vite application in development mode...'
npm run dev -- --host & sleep 1

# Save the process ID (PID) to a file
echo $! > .pidfile

echo 'Now...'
echo 'Visit http://localhost:3000 to see your React/Vite application in action.'
echo '(This assumes that your Vite application is configured to run on port 3000 by default.)'
