class LineSegment {
    constructor(p1, p2) {
        this.m = (p1.y - p2.y) / (p1.x - p2.x);
        this.mp = new Coor((p1.x + p2.x) * 0.5, (p1.y + p2.y) * 0.5);
        this.m_perp = -(this.m ** -1);
        this.coefficient = [this.m * -1, 1]
        this.solution = -(this.m * p1.x) + p1.y
    }
}

class PointSlopeLine {
    constructor(p1, _m) {
        this.m = _m
        this.m_perp = -(this.m ** -1);
        this.coefficient = [this.m * -1, 1]
        this.solution = -(this.m * p1.x) + p1.y
    }
}