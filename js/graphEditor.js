class GraphEditor {
    constructor(viewport, graph) {
        this.canvas = viewport.canvas;
        this.graph = graph;
        this.mouse
        this.ctx = this.canvas.getContext("2d");
        this.#addEventListeners();
    }

    #addEventListeners() {
        this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));

    }

    #handleMouseDown(evt) {
        if (evt.button == 0) {
            this.graph.addCoor(new Coor(evt.offsetX, evt.offsetY));
        }
    }

    display() {
        this.graph.draw(this.ctx)
    }
}