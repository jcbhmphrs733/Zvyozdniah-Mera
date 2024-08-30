class Viewport {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

    }

    getMouse(evt) {
        const p = new Coor(evt.offsetX,evt.offsetY);
        return p;
    }
}
