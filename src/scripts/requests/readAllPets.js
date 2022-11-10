import { toast } from "../toast.js"


const baseUrl = "https://m2-api-adot-pet.herokuapp.com/";

async function readAllPets() {
  try {
    const request = await fetch(`${baseUrl}pets`);

    const response = await request.json();

    return response;
  } catch (error) {
    toast("Error!", error);
  }
}

export { readAllPets };
