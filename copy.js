class User {
    // Обов'язкове оголошення приватних властивостей
     #someValue;
     constructor({ someValue }) {
           this.#someValue = someValue;
        }
    }
    const Client = function (name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.bodyMassIndex = function () {
          const index = this.weight / (this.height * this.height * 0.1);
          return `Client ${this.name} has body mass index ${index.toFixed(3)}`;
        };
      };
      const john = new Client("John", 80, 170);
      john.bodyMassIndex(); // Client John has body mass index 0.028
      const mary = new Client("Mary", 50, 165);
      mary.bodyMassIndex(); // Client Mary has body mass index 0.018
console.log(new Client);

    //   const Client = function (name, weight, height) {
    //     this.name = name;
    //     this.weight = weight;
    //     this.height = height;
    //     this.bodyMassIndex = function () {
    //       const index = this.weight / (this.height * this.height * 0.1);
    //       return `Client ${this.name} has body mass index ${index.toFixed(3)}`;
    //       }; return { client: "New client of the fitness club"
    //     };
    //   };
      
    //   const john = new Client("John", 80, 170);
    //   console.log(john); // {client: "New client of the fitness club"}