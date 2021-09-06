
for (var x = 100; x <= 200; x++) {
  //check if x is a multiple of 3
  if ((x%3 === 0) && (x%4 == 0)) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else if (x%4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(x)
  }

  
}