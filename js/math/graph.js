class Graph {
    constructor(coordinates = [], lines = []) {
        this.lines = lines;
        this.coordinates = coordinates;
        this.reticle = new Reticle();
    }


    addCoor(coor) {
        this.coordinates.push(coor);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        for (const coor of this.coordinates) {
            coor.draw(ctx);
        }
        this.reticle.drawReticle(ctx);
    }

    dispose() {
        this.coordinates.length = 0;
        this.lines.length = 0;
    }
}