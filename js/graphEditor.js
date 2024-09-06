class GraphEditor {
    constructor(viewport, graph) {
        this.canvas = viewport.canvas;
        this.graph = graph;
        this.mouse
        this.ctx = this.canvas.getContext("2d");
        this.measuring = false;
        this.constructing = false;
        this.geometry = null;
        this.keysPressed = {};
        this.#addEventListeners();
        this.searchedKeys = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight']
    }
    
    
    #addEventListeners() {
        this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));
        window.addEventListener("keydown", this.#handleKeyDown.bind(this));
        window.addEventListener("keyup", this.#handleKeyUp.bind(this));
        
    }

    #handleKeyDown(evt) {
        if (this.searchedKeys.includes(evt.key)) {
            this.keysPressed[evt.key] = true;
            this.#updateReticlePos();
        }
    }
    
    #handleKeyUp(evt) {
        this.keysPressed[evt.key] = false;
    }
    
    #updateReticlePos() {
        let step = 5;
        if(this.keysPressed['Shift']) {
            step = 10;
        }
        else {
            step = 5;
        }
        if(this.keysPressed['ArrowUp']) this.graph.reticle.y -= step;
        if(this.keysPressed['ArrowDown']) this.graph.reticle.y += step;
        if(this.keysPressed['ArrowLeft']) this.graph.reticle.x -= step;
        if(this.keysPressed['ArrowRight']) this.graph.reticle.x += step;
        this.graph.draw(this.ctx);
        }

    #handleMouseDown(evt) {
        if (evt.button == 0 & this.measuring) {
            switch(this.geometry) {
                case 'point':
                    this.graph.addCoor(new Coor(evt.offsetX, evt.offsetY));
                    this.measuring = false;
                    break;
                case 'line':
                    this.graph.addCoor(new Coor(evt.offsetX, evt.offsetY));
                    break;

            }
        }
    }

    display() {
        this.graph.draw(this.ctx)
    }
}