const Profile = {
    name: "Minhazul Islam Sohag",
    age: 23,
    height: 5.6,
    about: function (){
        return `My name is ${this.name}, Age ${this.age}, Height: ${this.height}`;
    }
}

console.log(Profile.about());