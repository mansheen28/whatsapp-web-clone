// import insertText from "https://cdn.jsdelivr.net/npm/insert-text-at-cursor@0.3.0/index.js";
import insertText from 'https://cdn.jsdelivr.net/npm/insert-text-at-cursor@0.3.0/index.js';
var array = [
  {
    name: "Mansheen Kaur",
    image: "https://assets.rbl.ms/26144683/origin.jpg",
    last_msg: "ttyl",
  },
  {
    name: "Astha Ishita",
    image: "https://pbs.twimg.com/media/EiLU5zSU8AUtDm9.jpg:large",
    last_msg: "By",
  },
  {
    name: "Hathi",
    image:
      "https://static.independent.co.uk/2022/06/13/14/newFile-5.jpg?quality=75&width=640&auto=webp",
    last_msg: "Good night",
  },
  {
    name: "Chabbri",
    image:
      "https://image.shutterstock.com/image-photo/14-year-old-girl-600w-241799281.jpg",
    last_msg: "will get back to you soon.",
  },
  {
    name: "sidhi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3Oq6BUB-OFdHBzDgdt0QvvVU20hhe2BLaw&usqp=CAU",
    last_msg: "BBHH",
  },
  {
    name: "piddi",
    image:
      "https://i.pinimg.com/736x/6f/59/d0/6f59d0412dbe92bfd341e61370a4e041.jpg",
    last_msg: "hahaha",
  },
  {
    name: "vishal",
    image:
      "https://i.pinimg.com/474x/1f/f0/0e/1ff00e6cc49779d55a204afbade60d14--little-black-boy-haircuts-eric-lafforgue.jpg",
    last_msg: "Oho",
  },
  {
    name: "anirudh",
    image:
      "https://assets3.thrillist.com/v1/image/3010676/792x1056/flatten;scale;webp=auto;jpeg_quality=60.jpg",
    last_msg: "missing guys",
  },
];

// chat container - multiple chats (image1,image2)

for (var i = 0; i < array.length; i++) {
  const chatcontainerchildren = document.createElement("div");
  chatcontainerchildren.innerHTML = `<div class="chat-1 chat_list">
    <img src=${array[i].image} id="image${i}">  
    <div class="chat_ib">
        <h5>${array[i].name}</h5>
        <p id="last_msg${i}">${array[i].last_msg}</p>
    </div>

    </div>`;
  document.getElementById("chat_container").appendChild(chatcontainerchildren);
  chatcontainerchildren.style.backgroundColor = "white";
  document.getElementById("image" + i).style.height = "7vh";
  document.getElementById("image" + i).style.maxWidth = "7vh";
  document.getElementById("image" + i).style.borderRadius = "5vh";
  document.getElementById("last_msg" + i).style.marginTop = "0.8vh";
}

// -------------- emoji pasted into searchbox
document
  .querySelector("emoji-picker")
  .addEventListener("emoji-click", (event) => {
    insertText(document.getElementById("searchbox"), event.detail.unicode);
  });

// ---------------------------toggle emoji board
document
  .getElementById("emoticon")
  .addEventListener("click", ShowHideDiv, true);
function ShowHideDiv() {
  var emoji_div = document.getElementById("emoji_div");
  if (emoticon.value == "Yes") {
    emoji_div.style.display = "none";
    emoticon.value = "No";
  } else {
    emoji_div.style.display = "block";
    emoticon.value = "Yes";
  }
}

// ----------------------------profile page
document.getElementById("user_icon").addEventListener("click", slideProfileDiv, true);
function slideProfileDiv() {
  var element = document.getElementById('profile_page');
  var left_container = document.getElementById('left_container');
    element.style.display =  "block";
    // left_container.style.display = "none";
  
}

document.getElementById('arrow_icon').addEventListener("click", slideBackProfileDiv , true);
 function slideBackProfileDiv() {
  var element = document.getElementById('profile_page');
  var left_container = document.getElementById('left_container');
 
  left_container.style.display = "block";
  element.style.display = "none";
 

 }


//  ---------------------------profile page - your name editable
document.getElementById('name_pencil').addEventListener("click", editYourName, true);
function editYourName() {
var nameEditDiv = document.getElementById('nameEditDiv');
nameEditDiv.setAttribute("contenteditable", true);
nameEditDiv.focus();
}


//  ---------------------------profile page - about editable
document.getElementById('about_pencil').addEventListener("click", editAbout, true);
function editAbout() {
var aboutEditDiv = document.getElementById('aboutEditDiv');
aboutEditDiv.setAttribute("contenteditable", true);
aboutEditDiv.focus();
}


//--------------------------------------- profile page -> dp chnge -> dropdown menu
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

  // document.getElementById("myDropdown").classList.toggle("show") - another method

document
  .getElementById("edit_profile_pic")
  .addEventListener("click", ShowHideDivv, true);
function ShowHideDivv() {
  var myDropdown = document.getElementById("myDropdown");
  myDropdown.style.display = "block";
}


// ----view profile pic
document.getElementById("view_photo").addEventListener("click", viewPhotoDiv, true);
function viewPhotoDiv() {
  var element = document.getElementById('viewprofile');
  var inner_container = document.getElementById('inner_container');
    element.style.display =  "block";
    inner_container.style.display = "none";
  
}

document.getElementById('close_icon').addEventListener("click", slideBackViewPhotoDiv , true);
 function slideBackViewPhotoDiv() {
  var element = document.getElementById('viewprofile');
  var inner_container = document.getElementById('inner_container');
  inner_container.style.display = "flex";
  element.style.display = "none";
  myDropdown.style.display = "none";

  // document.getElementById("edit_profile_pic").classList.toggle("hide");
 }



//  ------------------------------------------outside click dropdown close
 window.onclick = function(event) {
  // console.log("inside")
  if(!event.target.matches('#edit_profile_pic') && !event.target.matches('.edit_profile_pic_c1') && !event.target.matches('.edit_profile_pic_c2')){
    myDropdown.style.display = "none";
  }
  
}






//  ------------------------- upload photo

document.getElementById('upload_photo').addEventListener('click', openDialog);

function openDialog() {
  document.getElementById('fileid').click();
  myDropdown.style.display = "none";
}



// ------------------------ upload an image in html and preview
document.getElementById('fileid').addEventListener('change', readURL, true);

function readURL(event){
  console.log("hello")
  var user_dp = document.getElementById('user_dp');
  user_dp.src = URL.createObjectURL(event.target.files[0]);
  // previous image ko memory se free krne ke liye 
  user_dp.onload = function(){
    URL.revokeObjectURL(user_dp.src);
  }
 
 
  
}


// ----------------------------remove photo
document.getElementById('remove_photo').addEventListener('click', removePhoto, true);

function removePhoto() {
  const img = document.getElementById('user_dp'); 
  var user_icon = document.getElementById('user_icon');
  var edit_profile_pic = document.getElementById('edit_profile_pic');
  img.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
  user_icon.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
  myDropdown.style.display = "none";
  edit_profile_pic.style.display = "none";
}


