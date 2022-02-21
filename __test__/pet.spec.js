import postPet from "../modules/postPet.js";
import updatePet from "../modules/updatePet.js";
import deletePet from "../modules/deletePet.js";

let petID;
let petName;
describe("Post /pet, Get /Pet/id", () => {
  const id = 4445554545;

  test("Should Post new pet", async () => {
    
    const postPetRes = await postPet(200, { id: id, name: "Dalmata" });

    expect(postPetRes.response?.body?.name).toEqual("Dalmata");
    expect(postPetRes.response?.headers["content-type"]).toEqual(
      "application/json"
    );

    petID = postPetRes.response?.body?.id;
    console.log(petID);
    petName = postPetRes.response?.body?.name;
  });
  test('Should Check existing pet', async () => {
    const updatePetRes = await updatePet(200, { id: id, name: "Pichichu" });

    expect(updatePetRes.response?.body?.name).toEqual("Pichichu");
    expect(updatePetRes.response?.headers["content-type"]).toEqual(
      "application/json"
    );

    
    petName = updatePetRes.response?.body?.name;
    console.log(petName);
  });
  //El siguiente codigo funciona, lo que no funciona bien es la api. 
  test('Should delete created pet', async () => {
    const deletePetRes = await deletePet(200, { id: id});
    console.log(deletePetRes)
    expect(deletePetRes.response?.body?.message).toBe(`${id}`);
    expect(deletePetRes.response?.body?.type).toEqual('unknown');
  });
});
