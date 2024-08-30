class Coor {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw(ctx, {size = 8, color = 'white', outline = false, fill = false} = {}) {
        const radius = size * 0.5;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}