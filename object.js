var toyRobot = { //toyRobot 
    productId: "123-12",
    name: "Robot",
    price: "25,000",
    madeIn: "korea",
    quantity: "10",
    showStock: function () { // showStock() func dec
        ducument.querySelector('#display').innerHTML = this.name + "제품은" + this.quantity + " left "
    }
};


toyRobot.showStock();