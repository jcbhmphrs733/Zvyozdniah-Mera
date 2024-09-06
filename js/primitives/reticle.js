class Reticle {
    constructor(x = myCanvas.width/2, y = myCanvas.height/2, size = 20) {
        this.x = x;
        this.y = y;
        this.size = size; // Size of the reticle
    }

    // Function to draw the reticle
    drawReticle(ctx) {
        // // Draw circle
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(this.x, this.y, 1.65 * this.size, 0, 2 * Math.PI);
        ctx.stroke()

        // Draw horizontal line
        ctx.beginPath();
        ctx.moveTo(this.x - this.size, this.y);
        ctx.lineTo(this.x + this.size, this.y);
        ctx.stroke();

        // Draw vertical line
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.size);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.stroke();
    }

    
}