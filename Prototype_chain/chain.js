var car = {
    move: function() {
        console.log('my car is moving');
    },
}

var benz = {
    reverse: function() {
        console.log('reverse this mercedes benz');
    },
}

var fourmatic = Object.create(benz);
fourmatic.reverse();

var benz = Object.create(car);
benz.move();

car.move()


