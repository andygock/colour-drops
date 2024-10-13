# Interactive Colour Drops Effect

This is an interactive web-based application that creates a visually stunning, smooth, continuous flow of colour drops that follow the user's mouse movement.

The app is customisable, allowing users to control various aspects of the visual effect in real time through a set of adjustable sliders, such as the size of the colour "drops", their speed, decay rate and hue change speed.
## Features

- **Fluid Colour Flow**: As the mouse moves, smooth, swirling drops of colour follow the cursor, blending into a continuous flow that resembles mixing food dye and oil.
- **User-Controlled Parameters**:
  - **Drop Size**: Adjust the size of the drops created by mouse movements.
  - **Speed**: Control how fast the drops move across the viewport.
  - **Opacity Decay**: Set how quickly the drops fade away after being created.
  - **Hue Change Rate**: Change how fast the colours transition as you move your mouse, affecting the overall visual dynamics.
- **Responsive Design**: The app adapts to any screen size and dynamically adjusts when the browser window is resized.

## Demo

To see the effect in action, simply open the app in your browser, move your mouse around, and adjust the sliders to experiment with different visual effects.

[Live demo](andygock.github.io/colour-drops/)

https://github.com/user-attachments/assets/635b4325-f54e-48e7-91c5-87b1e0048048

## How It Works

1. **HTML5 Canvas**: The entire visual effect is rendered on a canvas element, which covers the entire viewport.
2. **JavaScript and CSS**: Mouse movements are tracked via JavaScript, which generates colourful "drops" that follow the cursor. The drops are rendered using radial gradients with smooth transitions of hue and opacity.
3. **User Inputs**: A set of sliders is provided to allow the user to customise the parameters affecting the drops' behaviour and appearance. These inputs are captured in real-time, and the visual effect is updated immediately.

## Getting Started

### Requirements

- A modern browser (Chrome, Firefox, Edge, Safari) that supports HTML5 and JavaScript.

### Running the App

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in your browser to run the app.
3. Move the mouse around to see the effect, and use the sliders to customise the behaviour of the drops and the background colour.

## Customisation

Feel free to tweak the code to further customise the effect to suit your preferences. You can modify parameters such as the default values for size, speed, decay, and hue in the JavaScript section of the app.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.
