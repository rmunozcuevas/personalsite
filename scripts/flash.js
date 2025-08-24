const words = ["Motivated", "Determined", "Focused", "Driven", "Passion", "Creativity"]

let i = 0;

setInterval(() => {
    console.log(words[i]);
    i++;
    if(index >= words.length) {
        i = 0;
    }
}, 2000);



// creating the object
let user = {
    name: "Jared",
    age: 20,
    major: "Computer Science"
};

// let clone means im assigning all the object properties from the og user object into clone obj
// alert(clone.major) testing to see if clone has the properites

let clone = Object.assign({}, user);

alert(clone.major)



let pet = {
    species: "Cat",
    age: 2,
    claws: True,
    sound: "Meow",

    speak() {
        alert(pet.sound);
    }
};

let artist = {
    name: "LUV",
    listeners: 10,
    catchphrase: "yeaaa",

    slang() {
        alert(this.catchphrase);
    }
};


// exercise to practice chaining


let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0





function Teacher(name) {
    this.name = name;
    this.isAdmin = false;

}

let u = new Teacher("Jarold");
let l = new Teacher("Amanda");

alert(u.name);
alert(u.isAdmin);



let user_one = {
    name: "Raymundo",
    sayWhat: function() {
        alert("Whatup bro");
    }
};

user_one.sayWhat();







