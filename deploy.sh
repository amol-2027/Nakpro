#!/bin/bash

# Nakpro Protein - Deployment Script
echo "🚀 Starting deployment process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

# Build project
echo "🔨 Building project..."
yarn build

# Verify build
if [ -d "dist" ]; then
    echo "✅ Build successful! dist/ directory created."
    echo "📁 Build contents:"
    ls -la dist/
else
    echo "❌ Build failed! dist/ directory not found."
    exit 1
fi

echo "🎉 Deployment ready! Push to GitHub to trigger Vercel deployment."
