// constructor
let Car = function(color, make){
    this.color = color;
    this.make = make;
    
    // prototype
    Car.prototype.getColor = function(){
        console.log(this.color)
    }
}

let ford = new Car('red', 'ford focus');
ford.getColor()