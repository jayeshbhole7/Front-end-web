const menuItems = document.querySelectorAll(".menu-item");
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
var root = document.querySelector(":root");
const colorPalatte = document.querySelectorAll(".choose-color span")
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};


menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      changeActiveItem();
      item.classList.add("active");
      if (item.id != "notifications") {
        document.querySelector(".notifications-popup").style.display = "none";
      } else {
        document.querySelector(".notifications-popup").style.display = "block";
        document.querySelector(
          "#notifications .notification-count"
        ).style.display = "none";
      }
    });
});


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((chat) => {
      console.log(chat);
      let name = chat.querySelector("h5").textContent.toLowerCase();
      if (name.indexOf(val) != -1) {
        chat.style.display = "flex";
      } else {
        chat.style.display = "none";
      }
    });
};
 
messageSearch.addEventListener("keyup", searchMessage);

// messagesNotification.addEventListener("click", () => {
//   messages.style.boxShadow = "0 0 1rem var(--color-primary)";
//   setTimeout(() => {
//     messages.style.boxShadow = "none";
//   }, 2000);
// });

if (messagesNotification) {
  messagesNotification.addEventListener("click", () => {
    const messages = document.getElementById("messages");
    if (messages) {
      messages.style.boxShadow = "0 0 1rem var(--color-primary)";
      setTimeout(() => {
        messages.style.boxShadow = "none";
      }, 2000);
    }
  });
}


const openThemeModal = () => {
    themeModal.style.display = "grid";
};


const closeThemeModal = (e) =>{
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display = "none";
    }
};

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

const removeActiveColorClass =() => {
    colorPalatte.forEach((colorPicker) => {
        colorPicker.classList.remove("active");
    });
};


colorPalatte.forEach((color) => {
    color.addEventListener("click", () =>{
        let primaryHue;
        removeActiveColorClass();

        if(color.classList.contains("color-1")){
            primaryHue = 352;
        } else if(color.classList.contains("color-2")){
            primaryHue = 152;
        } else if(color.classList.contains("color-3")){
            primaryHue = 196;
        } else if(color.classList.contains("color-4")){
            primaryHue = 8;
        }
        document.documentElement.style.setProperty("--color-primary",`hsl(${primaryHue}, 80%, 50%)`);
        color.classList.add("active");
        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});



let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);

};

Bg1.addEventListener("click", () => {
    Bg1.classList.add("active");
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");

    window.location.reload();
});

Bg2.addEventListener("click", () => {
    console.log("object");
    darkColorLightness = "95";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    Bg2.classList.add("active");
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
});

Bg3.addEventListener("click", () => {
    darkColorLightness = "95";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    Bg3.classList.add("active");
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
});