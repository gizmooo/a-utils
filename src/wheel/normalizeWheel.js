const PIXEL_STEP = 10;
const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;
export const normalizeWheel = (event) => {
    let sX = 0, sY = 0, pX, pY;
    if (event.detail !== undefined)
        sY = event.detail;
    if (event.wheelDelta !== undefined)
        sY = -event.wheelDelta / 120;
    if (event.wheelDeltaY !== undefined)
        sY = -event.wheelDeltaY / 120;
    if (event.wheelDeltaX !== undefined)
        sX = -event.wheelDeltaX / 120;
    if (event.axis !== undefined && event.axis === event.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaX' in event)
        pX = event.deltaX;
    if ('deltaY' in event)
        pY = event.deltaY;
    if ((pX || pY) && event.deltaMode) {
        if (event.deltaMode === 1) {
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
        }
        else {
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
        }
    }
    if (pX && !sX)
        sX = (pX < 1) ? -1 : 1;
    if (pY && !sY)
        sY = (pY < 1) ? -1 : 1;
    return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
    };
};
