/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon{
    constructor(s) { 
        this.s = s;
        


    }

    perimeter() {
        let peri = 0;
        for (var i in this.s) {

            peri += this.s[i];
        }
        return peri;
    }



}
