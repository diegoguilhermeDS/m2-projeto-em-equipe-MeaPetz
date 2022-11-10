import { iconBone } from "./icons.js";

function introduction() {
  const section = document.createElement("section");
  section.id = "introduction";
  section.innerHTML = iconBone;
  section.innerHTML += "<h1>MeaPetz</h1>";

  const body = document.body;
  body.append(section);

  setTimeout(() => {
    section.remove();
  }, 5000);
}

export { introduction };
