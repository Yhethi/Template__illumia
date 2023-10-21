let band = false;
export const showTemplates = () => {
  const templateShowHover = document.querySelector(".templateShowHover");
  const arrowRotate: any = document.querySelector(".arrowRotate");
  templateShowHover?.addEventListener("mouseenter", () => {
    arrowRotate.style.transform = "rotate(180deg) translateY(4px)";
  });
  templateShowHover?.addEventListener("mouseleave", () => {
    arrowRotate.style.transform = "rotate(0deg) translateY(0px)";
  });

  const menuMobile: any = document.querySelector(".menuMobile");
  const menuTemplate: any = document.querySelector(".menuTemplate");
  const menu: any = document.querySelector(".menu");
  const linea1: any = document.getElementById("linea1");
  const linea2: any = document.getElementById("linea2");
  menuMobile?.addEventListener("click", () => {
    if (!band) {
      linea1.style.transform = "rotate(135deg) translateY(0px)";
      linea2.style.transform = "rotate(45deg) translateY(0px)";
      menuTemplate.style.transform = "rotateX(0deg)";
      menuTemplate.style.opacity = "1";
      band = true;
    } else {
      linea1.style.transform = "rotate(0deg) translateY(-7px)";
      linea2.style.transform = "rotate(0deg) translateY(7px)";
      menuTemplate.style.opacity = "0";
      band = false;
    }
  });
  menu?.addEventListener("mouseleave", () => {
    linea1.style.transform = "rotate(0deg) translateY(-7px)";
    linea2.style.transform = "rotate(0deg) translateY(7px)";
    menuTemplate.style.opacity = "0";
    band = false;
  });
};
