const menu = document.querySelector(".ham_menu");
const menuItems = document.querySelectorAll(".menu_item");
const hamburger = document.querySelector(".ham_click");
const closeIcon = document.querySelector(".close_icon");
const menuIcon = document.querySelector(".menu_icon");

const width_state = document.querySelector("#width");

const folder_grid_size = document.querySelector(".grid_container");
const secondary_tab_collective = document.querySelector(
  ".secondary_nav .secondary_nav_tab"
);

let widthMedia = window.matchMedia("(max-width:1024px)");

let web_switch = document.getElementById("web_switch");
let an_switch = document.getElementById("an_switch");
let qa_switch = document.getElementById("qa_switch");
let duq_switch = document.getElementById("duq_switch");

// let checkbox = document.querySelector('input[class=checkbox]');

function toggle_switch(switch_count) {
  let web_con = document.getElementById("web_con");
  let an_con = document.getElementById("an_con");
  let qa_con = document.getElementById("qa_con");
  let duq_con = document.getElementById("duq_con");

  switch (switch_count) {
    case 1:
      if (web_con.style.zIndex != 3) {
        web_con.style.zIndex = 3;
      } else {
        web_con.style.zIndex = 1;
      }

      break;

    case 2:
      if (an_con.style.zIndex != 3) {
        an_con.style.zIndex = 3;
      } else {
        an_con.style.zIndex = 1;
      }

      break;

    case 3:
      if (qa_con.style.zIndex != 3) {
        qa_con.style.zIndex = 3;
      } else {
        qa_con.style.zIndex = 1;
      }

      break;

    case 4:
      if (duq_con.style.zIndex != 3) {
        duq_con.style.zIndex = 3;
      } else {
        duq_con.style.zIndex = 1;
      }

      break;
  }
}

function toggle_menu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

menuItems.forEach(function (menuItems) {
  menuItems.addEventListener("click", toggle_menu);
});

function mobile_changes() {
  let web_dev_title = document.querySelectorAll(".folder_title");

  let web_dev_title_web = document.getElementsByClassName("folder_title")[0];
  let web_dev_title_qa = document.getElementsByClassName("folder_title")[2];
  let duq_major = document.querySelector(".duq_major");

  if (media_change.matches <= 1024) {
    web_dev_title_web.textContent = "Web Dev.";
    web_dev_title_qa.textContent = "QA";

    web_dev_title_qa.style.fontSize = "1.5rem";
    web_dev_title_web.style.fontSize = "1.5rem";

    for (let i = 0; i <= web_dev_title.length; i++) {
      web_dev_title[i].style.lineHeight = "7rem";
      web_dev_title[i].style.verticalAlign = "middle";
    }
  } else {
    web_dev_title_web.textContent = "Web Devloper";
    web_dev_title_qa.textContent = "Quality Engineer";

    web_dev_title_qa.style.fontSize = "1.5rem";
    web_dev_title_web.style.fontSize = "1.5rem";

    for (let i = 0; i <= web_dev_title.length; i++) {
      web_dev_title[i].style.lineHeight = "7rem";
      web_dev_title[i].style.verticalAlign = "middle";
    }
  }
}

hamburger.addEventListener("click", toggle_menu);
widthMedia.addEventListener("change", mobile_changes);

web_switch.addEventListener("change", function () {
  toggle_switch(1);
});
an_switch.addEventListener("change", function () {
  toggle_switch(2);
});
qa_switch.addEventListener("change", function () {
  toggle_switch(3);
});
duq_switch.addEventListener("change", function () {
  toggle_switch(4);
});
