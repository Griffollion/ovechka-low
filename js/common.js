if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

function start() {
  var images = document.querySelectorAll("img");
  images.forEach(function (el) {
    el.ondragstart = function () {
      return false;
    };
  });
  var head = document.querySelector(".peppy__head");
  var bodyPeppy = document.querySelector(".peppy__body");
  var bodySlept = document.querySelector(".slept");
  var cursor = document.querySelector(".cursor");
  var blanket1 = document.querySelector(".blanket__off");
  var blanket2 = document.querySelector(".blanket__on");
  var btn = document.querySelector(".sub-text-3");
  var zzz = document.querySelectorAll(".zzz-img");
  var screen1 = document.querySelector(".screen-1");
  var screen2 = document.querySelector(".screen-2");
  var isSlept = false;
  var dragOn = false;
  var part3 = false;
  var eventStart = false;
  var isBtn = false;
  var creative = document.querySelector(".container");
  creative.classList.add("active");

  function headShake() {
    head.classList.add("shake");
  }

  function stopHeadShake() {
    head.classList.remove("shake");
  }

  function iron() {
    cursor.classList.add("iron");
  }

  function dragBlanket() {
    cursor.classList.add("dragBlanket");
  }

  function stopIron() {
    cursor.classList.remove("iron");
  }

  function stopDragBlanket() {
    cursor.classList.remove("dragBlanket");
  }

  function addInvisible(el) {
    document.querySelector(el).classList.add("invisible");
  }

  function removeInvisible(el) {
    document.querySelector(el).classList.remove("invisible");
  }

  function levitateStart() {
    document.querySelector(".sub-text-3").classList.add("levitate");
    document.querySelector(".sub-text-3").classList.add("enabled");
    document.querySelector(".screen-1").classList.add("disabled");
  }

  function changeBlanket() {
    blanket1.classList.add("invisible");
    blanket2.classList.add("visible");
  }

  function peppyStart() {
    head.classList.remove("invisible");
    bodyPeppy.classList.remove("invisible");
    bodySlept.classList.remove("visible");
  }

  function sleptStart() {
    head.classList.add("invisible");
    bodyPeppy.classList.add("invisible");
    bodySlept.classList.add("visible");
  }

  function zzzShow() {
    zzz.forEach(function (el) {
      el.classList.add("animated");
    });
  }

  function sowSecScreen() {
    screen1.classList.add("invisible");
    screen2.classList.add("visible");
  }

  function addClass(el, className) {
    document.querySelector(el).classList.add(className);
  }

  setTimeout(function () {
    addClass(".star--1", "bounceInDown");
  }, 100);
  setTimeout(function () {
    addClass(".star--2", "bounceInDown");
  }, 200);
  setTimeout(function () {
    addClass(".star--3", "bounceInDown");
  }, 300);
  setTimeout(function () {
    removeInvisible(".lamb");
  }, 2800);
  setTimeout(function () {
    headShake();
  }, 3300);
  setTimeout(function () {
    removeInvisible(".main-text");
  }, 4000);
  setTimeout(function () {
    removeInvisible(".sub-text-1");
    eventStart = true;
  }, 5500);
  setTimeout(function () {
    iron();
  }, 6000);

  function step1() {
    if (eventStart) {
      if (!isSlept) {
        stopIron();
        stopHeadShake();
        setTimeout(function () {
          sleptStart();
          addInvisible(".sub-text-1");
          addInvisible(".main-text");
          setTimeout(function () {
            peppyStart();
          }, 3500);
          setTimeout(function () {
            headShake();
          }, 5500);
          setTimeout(function () {
            removeInvisible(".main-text");
          }, 6500);
          setTimeout(function () {
            removeInvisible(".sub-text-2");
            dragBlanket();
            dragOn = true;
          }, 8000);
        }, 1800);
        isSlept = true;
      }

      if (isSlept && dragOn && !part3) {
        stopDragBlanket();
        stopHeadShake();
        sleptStart();
        changeBlanket();
        addInvisible(".sub-text-2");
        addInvisible(".main-text");
        setTimeout(function () {
          part3 = true;
          peppyStart();
          document.querySelector(".screen-1").classList.add("disabled");
        }, 3500);
        setTimeout(function () {
          headShake();
        }, 5500);
        setTimeout(function () {
          removeInvisible(".main-text");
        }, 6500);
        setTimeout(function () {
          removeInvisible(".sub-text-3");
          document.querySelector(".sub-text-3").classList.add("enabled");
        }, 8500);
        setTimeout(function () {
          levitateStart();
        }, 9500);
      }
    }
  }

  function step2() {
    if (!isBtn) {
      stopHeadShake();
      sleptStart();
      addInvisible(".main-text");
      addInvisible(".sub-text-3");
      setTimeout(function () {
        zzzShow();
      }, 1000);
      setTimeout(function () {
        removeInvisible(".main-text-2");
      }, 3500);
      setTimeout(function () {
        sowSecScreen();
      }, 5000);
      isBtn = true;
    }
  }

  screen1.addEventListener("mousedown", function () {
    step1();
  });
  screen1.addEventListener("touchstart", function () {
    step1();
  });
  btn.addEventListener("touchstart", function () {
    step2();
  });
  btn.addEventListener("mousedown", function () {
    step2();
  });
}

window.addEventListener("load", start);