class Graph {
    constructor(coordinates = [], lines = []) {
        this.lines = lines;
        this.coordinates = coordinates;
    }


    addCoor(coor) {
        this.coordinates.push(coor);
    }

    draw(ctx) {
        // for (const line of this.lines) {
        //     line.draw(ctx);
        // }
        for (const coor of this.coordinates) {
            coor.draw(ctx);
        }
    }
}