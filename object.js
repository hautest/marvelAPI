const key = "marvel";
const value = "is awesome";
const obj = {
  // marvel: 'is awesome'
  aaa: "bbb",
  console: function () {
    console.log(this.aaa);
  },
};
obj.aaa = "aaa";
obj[key] = "aaaaaaaa";
const arr = ["1", "vvv", "bbb"];
obj.console();
obj["console"]();
