# Website Preloader Feature

## Overview

A custom website preloader has been added to the Nakpro website that displays before the main content loads.

## Features

- **Progress Bar**: Animated progress bar with percentage display
- **Nakpro Logo**: Centered logo with subtle pulse animation
- **Brown Color Scheme**: Uses the project's custom brown color palette
- **Smooth Animations**: Fade-out transition when loading completes
- **Realistic Loading**: Simulates actual loading progress with varying speeds

## Components

### Preloader.jsx

- Located in `src/components/Preloader.jsx`
- Manages loading state and progress
- Handles fade-out animation
- Uses custom CSS animations

### App.jsx

- Modified to include preloader state management
- Shows preloader until loading completes
- Integrates seamlessly with existing GSAP animations

## CSS Classes Added

- `.preloader-fade-out`: Fade-out animation
- `.preloader-logo`: Logo pulse animation
- `.preloader-progress`: Progress bar glow effect
- `.preloader-bg`: Subtle background pattern

## Color Scheme

- **Progress Bar**: `--color-mid-brown` (#a26833)
- **Text**: `--color-dark-brown` (#523122)
- **Background**: Subtle white gradient with brown accents

## Animation Details

- **Logo Pulse**: 2-second gentle scale and opacity animation
- **Progress Bar**: Smooth width transitions with glow effect
- **Fade Out**: 0.5-second fade-out when loading completes
- **Loading Speed**: Realistic progress simulation (2-10% increments)

## Usage

The preloader automatically displays when the app loads and disappears when the progress reaches 100%. No additional configuration is required.
