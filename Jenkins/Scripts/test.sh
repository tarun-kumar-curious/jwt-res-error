#!/usr/bin/env sh

echo 'The following "npm" command (if executed) installs any testing dependencies'
echo 'into the local "node_modules" directory, which will ultimately'
echo 'be stored in the Jenkins home directory. You can customize this command to'
echo 'install the testing dependencies specific to your Vite application.'
set -x
# npm install --save-dev your-testing-dependencies
set +x

echo 'The following "npm" command tests your React/Vite application.'
set -x

# Modify this line with the actual test command for your Vite application
npm run test

set +x

echo 'Tests completed.'
