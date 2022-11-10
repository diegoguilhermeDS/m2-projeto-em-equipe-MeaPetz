import { iconBone } from "./icons.js";

function introduction() {
  const showedIntroduction = localStorage.getItem('showed-introduction')

  if(!showedIntroduction) {
    const section = document.createElement("section");
    section.id = "introduction";
    section.innerHTML = iconBone;
    section.innerHTML += "<h1>MeaPetz</h1>";
  
    const body = document.body;
    body.append(section);
  
    setTimeout(() => {
      section.remove();
    }, 5000);

    localStorage.setItem('showed-introduction', true)
  } 
}

export { introduction };
