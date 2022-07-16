for (let i = 0; i < document.querySelectorAll(".js").length; i++) {
  document.querySelectorAll(".js")[i].addEventListener("click", function () {
    let a = this.innerHTML;
    sounds(a);
  });
}

document.addEventListener("keydown", function (event) {
  sounds(event.key);
  animation(event.key);
});

function sounds(key) {
  switch (key) {
    case "a":
      let doo = new Audio("newSound/key01.mp3");
      doo.play();
      break;

    case "q":
      let doDiyez = new Audio("newSound/key02.mp3");
      doDiyez.play();
      break;

    case "s":
      let re = new Audio("newSound/key03.mp3");
      re.play();
      break;

    case "w":
      let reDiyez = new Audio("newSound/key04.mp3");
      reDiyez.play();
      break;

    case "d":
      let mi = new Audio("newSound/key05.mp3");
      mi.play();
      break;

    case "f":
      let fa = new Audio("newSound/key06.mp3");
      fa.play();
      break;

    case "e":
      let faDiyez = new Audio("newSound/key07.mp3");
      faDiyez.play();
      break;

    case "g":
      let sol = new Audio("newSound/key08.mp3");
      sol.play();
      break;

    case "r":
      let solDiyez = new Audio("newSound/key09.mp3");
      solDiyez.play();
      break;

    case "h":
      let lya = new Audio("newSound/key10.mp3");
      lya.play();
      break;

    case "t":
      let lyaDiyez = new Audio("newSound/key11.mp3");
      lyaDiyez.play();
      break;

    case "j":
      let si = new Audio("newSound/key12.mp3");
      si.play();
      break;

    case "z":
      let do2 = new Audio("newSound/key13.mp3");
      do2.play();
      break;

    case "y":
      let doDiyez2 = new Audio("newSound/key14.mp3");
      doDiyez2.play();
      break;

    case "x":
      let re2 = new Audio("newSound/key15.mp3");
      re2.play();
      break;

    case "u":
      let reDiyez2 = new Audio("newSound/key16.mp3");
      reDiyez2.play();
      break;

    case "c":
      let mi2 = new Audio("newSound/key17.mp3");
      mi2.play();
      break;

    case "v":
      let fa2 = new Audio("newSound/key18.mp3");
      fa2.play();
      break;

    case "i":
      let faDiyez2 = new Audio("newSound/key19.mp3");
      faDiyez2.play();
      break;

    case "b":
      let sol2 = new Audio("newSound/key20.mp3");
      sol2.play();
      break;

    case "o":
      let solDiyez2 = new Audio("newSound/key21.mp3");
      solDiyez2.play();
      break;

    case "n":
      let lya2 = new Audio("newSound/key22.mp3");
      lya2.play();
      break;

    case "p":
      let lyaDiyez2 = new Audio("newSound/key23.mp3");
      lyaDiyez2.play();
      break;

    case "m":
      let si2 = new Audio("newSound/key24.mp3");
      si2.play();
      break;
    default:
      console.log(a);
      break;
  }
}

// animation
function animation(currentkey) {
  let white = document.querySelector(".w" + currentkey);
  let black = document.querySelector(".b" + currentkey);

  if (white) {
    white.classList.add("pressed");
    setTimeout(function () {
      white.classList.remove("pressed");
    }, 400);
  } else {
    black.classList.add("blackPress");
    setTimeout(function () {
      black.classList.remove("blackPress");
    }, 400);
  }
}
