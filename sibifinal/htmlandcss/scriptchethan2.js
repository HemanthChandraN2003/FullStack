"use strict"; //This is used to detect if any errors are present in the javascript code, checkout the errors in console log

/************************************ */
//************Accordion**************/
/************************************ */
const item = document.querySelectorAll(".item");

let prevAcc = 0,
  curAcc = 0,
  index = 0;
item.forEach(function (ele, i1) {
  ele.addEventListener("click", function () {
    const icon = ele.querySelector(".fa-solid");
    if (curAcc === 0 && prevAcc === 0) {
      openAcc(ele, icon);
      curAcc = 1;
      prevAcc = 1;
      index = i1;
    } else if (curAcc === 1 && index === i1) {
      closeAcc(ele, icon);
      curAcc = 0;
      prevAcc = 0;
      index = 0;
    }
    if (prevAcc === 1 && curAcc === 1) switchAcc(ele, icon, i1, item);
  });
});

function openAcc(ele, icon) {
  ele.lastElementChild.classList.add("active");
  ele.classList.add("active-color");
  icon.classList.replace("fa-plus", "fa-minus");
}
function closeAcc(ele, icon, i1, item) {
  ele.lastElementChild.classList.remove("active");
  ele.classList.remove("active-color");
  icon.classList.replace("fa-minus", "fa-plus");
}
function switchAcc(acc1, icon, i1, item) {
  item.forEach(function (acc2, i2) {
    const icon2 = acc2.querySelector(".fa-solid");
    if (i1 !== i2) {
      closeAcc(acc2, icon2);
    } else if (i1 === i2) {
      openAcc(acc1, icon);
      curAcc = 1;
      prevAcc = 1;
      index = i1;
    }
  });
}
/*************************************/
//*********Playlist Generator*********/
/*************************************/
const searchbar = document.querySelector(".search-bar");
const searchbar2 = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const playlist = document.querySelector(".playlist");
const songCover = document.querySelector(".song-cover");
const playlistSection = document.querySelector(".playlist-section");


document.querySelector(".logo").addEventListener("mouseover",()=>{
  console.log(allSongs);
});





 


// console.log(passval);
// export {passval,passval2};