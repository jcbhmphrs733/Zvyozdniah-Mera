class GraphEditor {
    constructor(viewport, graph) {
        this.canvas = myCanvas;
        this.graph = graph;
        this.mouse
        this.ctx = myCanvas.getContext("2d");
        this.#addEventListeners();
    }

    #addEventListeners() {
        this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));

    }

    #handleMouseDown(evt) {
        if (evt.button == 0) {
            this.graph.addCoor(this.mouse);
            console.log(this.mouse)
        }
    }

    display() {
        this.graph.draw(this.ctx)
    }
}