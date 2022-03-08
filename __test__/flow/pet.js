import postPet from "../modules/postPet.js";
import updatePet from "../modules/updatePet.js";
import deletePet from "../modules/deletePet.js";

export default () => {
//COMMENT you are only using petID in one of your tests, you don't need to declare it in the upper scope
let petID;
let petName;
describe("Post /pet, Get /Pet/id", () => {
  const id = 4445554545;

  test("Should Post new pet", async () => {
    //COMMENT you can just write { id, name: "Dalmata" }, whenever the name of the variable equals the name of the key
    const postPetRes = await postPet(200, { id: id, name: "Dalmata" });

    expect(postPetRes.response?.body?.name).toEqual("Dalmata");
    expect(postPetRes.response?.headers["content-type"]).toEqual(
      "application/json"
    );

    petID = postPetRes.response?.body?.id;
    //COMMENT remove unnecessary logs
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
    //COMMENT remove unnecessary logs
    console.log(petName);
  });
  //El siguiente codigo funciona, lo que no funciona bien es la api. 
  test('Should delete created pet', async () => {
    const deletePetRes = await deletePet(200, { id: id});
    //COMMENT remove unnecessary logs, also make sure to keep your style consistent in some places you are closing with a semicolon and in other you are not (you can configure eslint to take of that for you)
    console.log(deletePetRes)
    expect(deletePetRes.response?.body?.message).toBe(`${id}`);
    expect(deletePetRes.response?.body?.type).toEqual('unknown');
    //COMMENT this is good, but in some scenarios it might be a good idea to try to make the GET to the deleted resource and assert that is doesn't exist anymore, otherwise you are totally depending on the delete request response
  });
});
}