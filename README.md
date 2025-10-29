### WordPress + Gutenberg Code Sample

**Overview:**
This sample demonstrates a modern WordPress development workflow with Gutenberg, React, and SCSS, focusing on flexibility, performance, and clean design. Note: Tested on Twenty Twenty-Five default theme.

**Included:**
1. A full-site editing template using a dynamic PHP date.
2. A SCSS file showing advanced responsive and animated styling within Gutenberg block Banner.
3. A React Gutenberg block (`Hero Gradient`) with alignment-based animations, color controls, and customizable hero height.
4. Custom PHP functions optimizing performance by removing emoji scripts and modifying the excerpt length.

**Technical Decisions:**
- Used SCSS for maintainability, nested styling, and reusable variables.
- Implemented keyframe animations (`fadeInUp`, `slideInRight`) for dynamic content transitions.
- Used `BlockControls`, `InspectorControls`, `ColorPalette`, `RangeControl`, and `MediaUpload` in React for interactive customization.
- Applied inline styles dynamically based on user-selected attributes for real-time editing.
- Simplified PHP logic for clarity and real-world optimization relevance.
- Added `excerpt_length` filter to demonstrate content output control in WordPress.

**Possible Improvements:**
- Add color and gradient picker controls to the block inspector.
- Implement accessibility features (e.g., ARIA roles, focus states).
- Convert animations to CSS variables for theme customization or add in block settings.
- Extend support for dark/light mode themes.
