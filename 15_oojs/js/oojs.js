'use strict';
(function(){
    // play with classes and constructors
    var Phone = function (brand, price, color, make) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.make = make;
    };

    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". Made in " + this.make + ".");
    };

    var phone_01 = new Phone('Samsung Galaxy S6', 2000.00, 'Darkblue', 'Korea');
    var phone_02 = new Phone('iPhone 6s', 4000.00, 'Goldrush', 'China');
    var phone_03 = new Phone('OnePlus One', 1000.00, 'White', 'Taiwan');

    phone_01.printInfo();
    phone_02.printInfo();
    phone_03.printInfo();

    // play with context
    function Button(text) {
        this.text = text || 'Hello';
    }

    Button.prototype = {
        create: function() {
            // pass 'this' cotnext to a new variable to use it in alerting function
            // otherwise, alerting function won't recognize the context properly
            var self = this;
            this.element = document.createElement('button');
            this.element.innerText = this.text;
            this.element.addEventListener('click', function() {
                alert(self.text);
            });
            document.body.appendChild(this.element);
        }
    };

    var btn1 = new Button('Hello!');
    var btn2 = new Button('A drudzy będą na samym dole.');

    btn1.create();
    btn2.create();

})();
