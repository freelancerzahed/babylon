function updateMorphTargetMultiple(morphTargets, target, value) {
    morphTargets.forEach(morphTarget => {
        updateMorphTarget(morphTarget, target, value);
    });
}

function skinnyModeler() {
    const morphTargets = [
        'Shape_average_petite:High-poly_primitive0',
        'Shape_average_petite:High-poly_primitive1',
        'Shape_average_petite:High-poly_primitive2'
    ];

    sliders.headSize.addEventListener('change', function () {
        const value = sliders.headSize.value >= 0.5 ? 1 : 0;
        updateMorphTargetMultiple(morphTargets, 'reconsile_lg_head', value);
    });

    sliders.neckHeight.addEventListener('change', function () {
        const neckHeight = sliders.neckHeight.value;
        updateMorphTargetMultiple(morphTargets, 'neck_layers', neckHeight);
    });

    // Attach the trapezoid update function to the sliders
    [sliders.shoulderWidth, sliders.shoulderHeight, sliders.neckWidth].forEach(slider => {
        slider.addEventListener('change', updateTrapezoidShape);
    });

    function updateTrapezoidShape() {
        const shoulderWidth = sliders.shoulderWidth.value;
        const shoulderHeight = sliders.shoulderHeight.value;
        const neckWidth = sliders.neckWidth.value;
        let trapezoid = 0; // Default trapezoid value

        console.log('Shoulder Width:', shoulderWidth, 'Shoulder Height:', shoulderHeight, 'Neck Width:', neckWidth);

        // Simplified trapezoid calculations based on conditions
        if (shoulderHeight === 0) {
            if (neckWidth <= 0.5) {
                trapezoid = shoulderWidth <= 0.375 ? 0.75 : shoulderWidth <= 0.75 ? 0.875 : 1.0;
            } else if (neckWidth <= 0.75) {
                if (shoulderWidth <= 0.25) trapezoid = 0.5;
                else if (shoulderWidth <= 0.625) trapezoid = 0.625;
                else if (shoulderWidth <= 0.875) trapezoid = 0.75;
                else trapezoid = 1.0;
            } else {
                if (shoulderWidth <= 0.125) trapezoid = 0.375;
                else if (shoulderWidth <= 0.375) trapezoid = 0.5;
                else if (shoulderWidth <= 0.75) trapezoid = 0.625;
                else trapezoid = 0.75;
            }
        } else if (shoulderHeight >= 0.49 && shoulderHeight <= 0.51) {
            if (neckWidth <= 0.25) {
                trapezoid = shoulderWidth <= 0.375 ? 0.5 : shoulderWidth <= 0.75 ? 0.625 : 0.75;
            } else if (neckWidth <= 0.5) {
                trapezoid = shoulderWidth <= 0.25 ? 0.25 : shoulderWidth <= 0.625 ? 0.5 : 0.625;
            } else if (neckWidth <= 0.75) {
                trapezoid = shoulderWidth <= 0.25 ? 0.375 : shoulderWidth <= 0.625 ? 0.5 : 0.625;
            } else {
                trapezoid = shoulderWidth <= 0.25 ? 0.25 : shoulderWidth <= 0.625 ? 0.375 : 0.5;
            }
        } else if (shoulderHeight >= 0.99 && shoulderHeight <= 1.01) {
            trapezoid = neckWidth <= 0.5 ? (shoulderWidth <= 0.375 ? 0.375 : 0.5) : (neckWidth === 0.75 || neckWidth === 1.0 ? 0.0 : trapezoid);
        }

        console.log('Trapezoid:', trapezoid);
        updateMorphTargetMultiple(morphTargets, 'trapezoid', trapezoid);
    }
}

function averageModeler() {
    const morphTargets = [
        'Shape_average_petite:High-poly_primitive0',
        'Shape_average_petite:High-poly_primitive1',
        'Shape_average_petite:High-poly_primitive2'
    ];

    sliders.headSize.addEventListener('change', function () {
        const value = sliders.headSize.value >= 0.75 ? 1 : 0;
        updateMorphTargetMultiple(morphTargets, 'reconsile_lg_head', value);
    });

    sliders.neckHeight.addEventListener('change', function () {
        const neckHeight = sliders.neckHeight.value;
        console.log('Neck Height:', neckHeight);

        let neckLayerValue;
        if (neckHeight === 0) {
            neckLayerValue = 1;
        } else if (neckHeight <= 0.2) {
            neckLayerValue = 0.8;
        } else if (neckHeight <= 0.4) {
            neckLayerValue = 0.6;
        } else if (neckHeight <= 0.6) {
            neckLayerValue = 0.4;
        } else if (neckHeight >= 0.8) {
            neckLayerValue = 0.2;
        } else {
            neckLayerValue = 0;
        }

        updateMorphTargetMultiple(morphTargets, 'neck_layers', neckLayerValue);
    });

    // Attach the trapezoid update function to the sliders
    [sliders.shoulderWidth, sliders.shoulderHeight, sliders.neckWidth].forEach(slider => {
        slider.addEventListener('change', updateTrapezoidShape);
    });

    function updateTrapezoidShape() {
        const neckWidth = sliders.neckWidth.value;
        const shoulderWidth = sliders.shoulderWidth.value;
        const shoulderHeight = sliders.shoulderHeight.value;
        let trapezoid = 0;

        // Trapezoid conditions based on shoulder and neck values
        if (shoulderWidth <= 0.25 && shoulderHeight === 0 && neckWidth <= 0.5) {
            trapezoid = 0.5;
        } else if (shoulderWidth <= 0.625 && shoulderHeight === 0 && neckWidth <= 0.5) {
            trapezoid = 0.75;
        } else if (shoulderWidth > 0.625 && shoulderHeight === 0 && neckWidth <= 0.5) {
            trapezoid = 1.0;
        } else if (shoulderWidth <= 0.25 && shoulderHeight === 0 && neckWidth == 0.75) {
            trapezoid = 0.375;
        } else if (shoulderWidth <= 0.625 && shoulderHeight === 0 && neckWidth == 0.75) {
            trapezoid = 0.625;
        } else if (shoulderWidth > 0.625 && shoulderHeight === 0 && neckWidth == 0.75) {
            trapezoid = 0.875;
        } else if (shoulderWidth <= 0.25 && shoulderHeight === 0 && neckWidth == 1.0) {
            trapezoid = 0.25;
        } else if (shoulderWidth <= 0.625 && shoulderHeight === 0 && neckWidth == 1.0) {
            trapezoid = 0.5;
        } else if (shoulderWidth > 0.625 && shoulderHeight === 0 && neckWidth == 1.0) {
            trapezoid = 0.75;
        } else if (shoulderWidth <= 0.125 && shoulderHeight === 0.5 && neckWidth <= 0.25) {
            trapezoid = 0.25;
        } else if (shoulderWidth <= 0.5 && shoulderHeight === 0.5 && neckWidth <= 0.25) {
            trapezoid = 0.5;
        } else if (shoulderWidth <= 1.0 && shoulderHeight === 0.5 && neckWidth <= 0.25) {
            trapezoid = 0.625;
        } else if (shoulderWidth <= 0.25 && shoulderHeight === 0.5 && neckWidth == 0.5) {
            trapezoid = 0.25;
        } else if (shoulderWidth <= 0.625 && shoulderHeight === 0.5 && neckWidth == 0.5) {
            trapezoid = 0.5;
        } else if (shoulderWidth > 0.625 && shoulderHeight === 0.5 && neckWidth == 0.5) {
            trapezoid = 0.625;
        } else if (shoulderWidth <= 0.125 && shoulderHeight === 0.5 && neckWidth == 0.75) {
            trapezoid = 0.125;
        } else if (shoulderWidth <= 0.5 && shoulderHeight === 0.5 && neckWidth == 0.75) {
            trapezoid = 0.375;
        } else if (shoulderWidth > 0.625 && shoulderHeight === 0.5 && neckWidth == 0.75) {
            trapezoid = 0.5;
        }

        updateMorphTargetMultiple(morphTargets, 'trapezoid', trapezoid);
    }
}
