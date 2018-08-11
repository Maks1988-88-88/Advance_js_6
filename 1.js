class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];

    try {
      if (this.size === undefined) {
        throw new Error(`no size given`);
      }
      if (this.size !== "Small" && this.size !== "Large") {
        throw new Error(`Wrong name size`);
      }
    } catch (e) {
      this.HamburgerException(e.message);
    }

    try {
      if (this.stuffing === undefined) {
        throw new Error(`no stuffing given`);
      }
      if (
        this.stuffing.name !== "CHEESE" &&
        this.stuffing.name !== "MEAT" &&
        this.stuffing.name !== "SALAD"
      ) {
        throw new Error(`Wrong name stuffing:`);
      }
    } catch (e) {
      this.HamburgerException(e.message);
    }
  }

  static get SIZE_SMALL() {
    return "Small";
  }
  static get SIZE_LARGE() {
    return "Large";
  }

  static get STUFFING_CHEESE() {
    return {
      name: "CHEESE",
      price: 15,
      calories: 20
    };
  }

  static get STUFFING_MEAT() {
    return {
      name: "MEAT",
      price: 35,
      calories: 15
    };
  }

  static get STUFFING_SALAD() {
    return {
      name: "SALAD",
      price: 20,
      calories: 5
    };
  }

  static get TOPPING_SPICE() {
    return {
      name: "SPICE",
      price: 10,
      calories: 0
    };
  }

  static get TOPPING_SAUCE() {
    return {
      name: "SAUCE",
      price: 15,
      calories: 5
    };
  }

  addTopping(topping) {
    let checkTopping = false;
    this.topping.forEach(topp => {
      if (topp.name === topping.name) {
        checkTopping = true;
        //console.log('You allready have this kind of topping');
      }
    });
    try {
      if (checkTopping) {
        throw new Error(`You allready have this kind of topping`);
      }
    } catch (e) {
      this.HamburgerException(e.message);
    }
    if (!checkTopping) {
      this.topping.push(topping);
    }
  }

    removeTopping(topping) {
        let checkRemoveTopping = false;
        this.topping.forEach(topp => {
            if (topp.name === topping.name) {
                this.topping.splice(this.topping.indexOf(1),1)
                checkRemoveTopping = true;
            }
        });
        try {
            if (!checkRemoveTopping) {
                throw new Error('Не могу удалить того чего нет');
            }
        } catch (e) {
            this.HamburgerException(e.message);
        }
    }

    getToppings() {
        return this.topping;
     }

    getSize() {
        return this.size;

     }

    getStuffing() {
        return this.stuffing.name;
     }

    calculatePrice() {
        let totalPrice = this.stuffing.price;
        this.topping.forEach(item => totalPrice += item.price);
        if (this.size === 'Large') {
            return totalPrice * 2;
        }
        else {
            return totalPrice;
        }
     }

    calculateCalories() {
        let totalCalories = this.stuffing.calories;
        this.topping.forEach(col => totalCalories += col.price);
        if (this.size === 'Large') {
            return totalCalories * 2
        }
        else {
            return totalCalories;
        }
     }


  HamburgerException(exception) {
    console.log(`HamburgerException: ${exception}`);
  }
}


// Маленький гамбургер с начинкой из сыра

const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1


console.log(hamburger);
