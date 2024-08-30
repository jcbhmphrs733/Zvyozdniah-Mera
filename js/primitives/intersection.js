class Intersection {
    constructor(line1, line2) {
        let coefficients = [line1.coefficient, line2.coefficient];
        let solutions = [line1.solution, line2.solution];
        let product = math.multiply(math.inv(coefficients), solutions);
        return new Coor(product[0],product[1]);
    }
}