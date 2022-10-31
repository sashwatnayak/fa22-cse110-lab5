// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  let currImg = document.querySelector("img");
  let select = document.querySelector("#horn-select");
  let index;
  let imgCode;

  select.addEventListener('change', function() {
    index = select.selectedIndex;
    imgCode = select[index].value;
    currImg.src = `https://raw.githubusercontent.com/sashwatnayak/fa22-cse110-lab5/642f68489e41bb4aad3d73b44c9e956c30261da0/assets/images/${imgCode}.svg`
  })

  let slider = document.querySelector("input");
  let speaker = document.querySelector("img[alt='Volume level 2']");
  let range;

  slider.addEventListener('input', function() {
    range = slider.value;

    if (slider.value == 0) {
      speaker.src = `https://raw.githubusercontent.com/sashwatnayak/fa22-cse110-lab5/642f68489e41bb4aad3d73b44c9e956c30261da0/assets/icons/volume-level-0.svg`
    }

    else if (1 <= slider.value && slider.value < 33) {
      speaker.src = `https://raw.githubusercontent.com/sashwatnayak/fa22-cse110-lab5/642f68489e41bb4aad3d73b44c9e956c30261da0/assets/icons/volume-level-1.svg`
    }

    else if (33 <= slider.value && slider.value < 67) {
      speaker.src = `https://raw.githubusercontent.com/sashwatnayak/fa22-cse110-lab5/642f68489e41bb4aad3d73b44c9e956c30261da0/assets/icons/volume-level-2.svg`
    }

    else {
      speaker.src = `https://raw.githubusercontent.com/sashwatnayak/fa22-cse110-lab5/642f68489e41bb4aad3d73b44c9e956c30261da0/assets/icons/volume-level-3.svg`
    }

    currAudio.volume = range/100;

  })



  let press = document.querySelector("button");
  let currAudio = document.querySelector("audio");
  const jsConfetti = new JSConfetti();
  

  press.addEventListener('click', function() {
    currAudio.src = `assets\\audio\\${imgCode}.mp3`
    currAudio.play();
    if (imgCode == "party-horn") {
      jsConfetti.addConfetti();
    }
  })
}