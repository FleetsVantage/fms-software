/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Object} input
 * @param {Position} input.position — the position the positioner should be on.
 * @param {Object} input.dimensions — the dimensions of the positioner.
 * @param {Object} input.targetRect — the rect of the target.
 * @param {Number} input.targetOffset - offset from the target.
 * @param {Object} input.viewport - the width and height of the viewport.
 * @param {Number} input.viewportOffset - offset from the viewport.
 * @return {Object} - { rect: Rect, position: Position, transformOrigin: string }
 */
export default function getFittedPosition({ dimensions, position, targetOffset, targetRect, viewport, viewportOffset }: {
    position: {
        TOP: string;
        TOP_LEFT: string;
        TOP_RIGHT: string;
        BOTTOM: string;
        BOTTOM_LEFT: string;
        BOTTOM_RIGHT: string;
        LEFT: string;
        RIGHT: string;
    };
    dimensions: Object;
    targetRect: Object;
    targetOffset: number;
    viewport: Object;
    viewportOffset: number;
}): Object;
