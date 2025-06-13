import { herbsData } from "./herbsData.js";

//console.log(herbsData.name);

//function getBenefitsArrayOld(herbs){
//    const benefitsArray = [];
//    for (let herb of herbs) {
//        for (let benefit of herb.benefits) {
//            if (!benefitsArray.includes(benefit)) {
//                benefitsArray.push(benefit);
//            }
//        }
//    }
//    return benefitsArray;
//
//}

function getBenefitsArray(herbs){
    return [...new Set (herbs.flatMap(i => i.benefits))]; 
}

console.log(getBenefitsArray(herbsData));