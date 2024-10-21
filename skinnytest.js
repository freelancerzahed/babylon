// Function to update the trapezoid value based on inputs
function updateTrapezoidShape(shoulderWidth, shoulderHeight, neckWidth) {
    let shoulderWidth = sliders.shoulderWidth.value;
    let shoulderHeight = sliders.shoulderHeight.value;
    let neckWidth = sliders.neckWidth.value;
    let trapezoid = 0; // Default trapezoid value
    


    // Check conditions based on shoulderWidth, shoulderHeight, and neckWidth
    if (shoulderHeight === 0.0) {
        if (neckWidth <= 0.5) {
            if (shoulderWidth <= 0.375) {
                trapezoid = 0.75;
            } else if (shoulderWidth <= 0.75) {
                trapezoid = 0.875;
            } else {
                trapezoid = 1.0;
            }
        } else if (neckWidth <= 0.75) {
            if (shoulderWidth <= 0.25) {
                trapezoid = 0.5;
            } else if (shoulderWidth <= 0.625) {
                trapezoid = 0.625;
            } else if (shoulderWidth <= 0.875) {
                trapezoid = 0.75;
            } else if (shoulderWidth == 1.0) {
                trapezoid = 1.0;
            }
        } else if (neckWidth <= 1.0) {
            if (shoulderWidth <= 0.125) {
                trapezoid = 0.375;
            } else if (shoulderWidth <= 0.375) {
                trapezoid = 0.5;
            } else if (shoulderWidth <= 0.75) {
                trapezoid = 0.625;
            } else if (shoulderWidth <= 1.0) {
                trapezoid = 0.75;
            }
        }
    } else if (shoulderHeight === 0.5) {
        if (neckWidth <= 0.25) {
            if (shoulderWidth <= 0.375) {
                trapezoid = 0.5;
            } else if (shoulderWidth <= 0.75) {
                trapezoid = 0.625;
            } else {
                trapezoid = 0.75;
            }
        } else if (neckWidth <= 0.5) {
            if (shoulderWidth <= 0.25) {
                trapezoid = 0.25;
            } else if (shoulderWidth <= 0.625) {
                trapezoid = 0.5;
            } else if (shoulderWidth <= 1.0) {
                trapezoid = 0.625;
            }
        } else if (neckWidth <= 0.75) {
            if (shoulderWidth <= 0.25) {
                trapezoid = 0.375;
            } else if (shoulderWidth <= 0.625) {
                trapezoid = 0.5;
            } else if (shoulderWidth <= 1.0) {
                trapezoid = 0.625;
            }
        } else if (neckWidth == 1.0) {
            if (shoulderWidth <= 0.25) {
                trapezoid = 0.25;
            } else if (shoulderWidth <= 0.625) {
                trapezoid = 0.375;
            } else if (shoulderWidth <= 1.0) {
                trapezoid = 0.5;
            }
        }
    } else if (shoulderHeight === 1.0) {
        if (neckWidth <= 0.5) {
            if (shoulderWidth <= 0.375) {
                trapezoid = 0.375;
            } else if (shoulderWidth > 0.375) {
                trapezoid = 0.5;
            }
        } else if (neckWidth == 0.75 || neckWidth == 1.0) {
            trapezoid = 0.0;
        }
    }

    // Update the morph target or the UI with the calculated trapezoid value
    updateMorphTarget('Shape_average_petite:High-poly_primitive0', 'trapezoid', trapezoid);
    updateMorphTarget('Shape_average_petite:High-poly_primitive1', 'trapezoid', trapezoid);
    updateMorphTarget('Shape_average_petite:High-poly_primitive1', 'trapezoid', trapezoid);
}

// Example usage: Update trapezoid based on shoulder and neck dimensions
sliders.shoulderWidth.addEventListener('change', updateTrapezoidShape);
sliders.shoulderHeight.addEventListener('change', updateTrapezoidShape);
sliders.neckWidth.addEventListener('change', updateTrapezoidShape);
