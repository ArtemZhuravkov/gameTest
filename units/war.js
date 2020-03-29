var Warriors = [
  (war1 = {
    coast: 200,
    name: "Legolas",
    srong: 500,
    magic: true
  }),
  (war2 = {
    coast: 300,
    name: "Aragorn",
    srong: 700,
    magic: false
  })
];

console.log(Warriors, "war");

function war() {
  Warriors.map(item => {
    console.log(war1.coast, "ss");
  });
}
console.log(war());
