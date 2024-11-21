// "use client";

// import { initData } from "@/content/initData";
// import CCheckRadio from "@/utils/CCheckRadio/CCheckRadio";
// import { useState } from "react";

// const Sidebar = () => {

//     const initialData = initData

//     const [info, setInfo] = useState(initialData);
//     console.log(info);
//     console.log(info.mens.hoodie);
//     // console.log(initialData);

//     return (
//         <div className="mx-4 h-screen overflow-scroll">
//             <ul>
//                 <CCheckRadio
//                     onChange={() => {
//                         setInfo({ ...info, newArrival: !info.newArrival });
//                     }}
//                     type="checkbox"
//                     id="New Arrival"
//                     label="New Arrival"
//                 />
//             </ul>
//             <ul>
//                 <CCheckRadio
//                     onChange={() => {
//                         setInfo({ ...info, topSelling: !info.topSelling });
//                     }} type="checkbox" id="Top selling" label="Top selling" />
//             </ul>
//             <ul>
//                 <CCheckRadio
//                     onChange={() => {
//                         setInfo({ ...info, freeDelivary: !info.freeDelivary });
//                     }}
//                     type="checkbox" id="Free Delivary" label="Free Delivary" />
//             </ul>

//             {/* mens  */}
//             <ul>
//                 <CCheckRadio onChange={() => {
//                     setInfo({ ...info, isMen: !info.isMen });
//                 }} type="checkbox" id="Men" label="Men" />

//                 {/* mens second level half shirt  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isMenHalfSleeveTShirt: !info.isMenHalfSleeveTShirt });
//                             }}
//                             type="checkbox"
//                             id="Half-Sleeve T-Shirt"
//                             label="Half-Sleeve T-Shirt"
//                         />
//                         {/* third level  */}
//                         <section className="ml-6">
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 halfSleeveTShirt: {
//                                                     ...prevInfo.mens.halfSleeveTShirt,
//                                                     blank: !prevInfo.mens.halfSleeveTShirt.blank
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Half-Sleeve_T-Shirt_blank"
//                                     label="blank"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio

//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 halfSleeveTShirt: {
//                                                     ...prevInfo.mens.halfSleeveTShirt,
//                                                     printed: !prevInfo.mens.halfSleeveTShirt.printed
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Half-Sleeve_T-Shirt_printed"
//                                     label="printed"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio

//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 halfSleeveTShirt: {
//                                                     ...prevInfo.mens.halfSleeveTShirt,
//                                                     cutAndStitch: !prevInfo.mens.halfSleeveTShirt.cutAndStitch
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Half-Sleeve_T-Shirt_cutAndStitch"
//                                     label="Cut and Stitch"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 halfSleeveTShirt: {
//                                                     ...prevInfo.mens.halfSleeveTShirt,
//                                                     raglan: !prevInfo.mens.halfSleeveTShirt.raglan
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Half-Sleeve_T-Shirt_raglan"
//                                     label="Raglan"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 halfSleeveTShirt: {
//                                                     ...prevInfo.mens.halfSleeveTShirt,
//                                                     raglanDesigner: !prevInfo.mens.halfSleeveTShirt.raglanDesigner
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Half-Sleeve_T-Shirt_raglanDesigner"
//                                     label="Raglan (Designer)"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 halfSleeveTShirt: {
//                                                     ...prevInfo.mens.halfSleeveTShirt,
//                                                     sports: !prevInfo.mens.halfSleeveTShirt.sports
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Half-Sleeve_T-Shirt_sports"
//                                     label="Sports"
//                                 />
//                             </ul>
//                         </section>
//                     </ul>
//                 </section>

//                 {/* full tshirt  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isMenFullfSleeveTShirt: !info.isMenFullfSleeveTShirt });
//                             }}
//                             type="checkbox"
//                             id="Full-Sleeve T-Shirt"
//                             label="Full-Sleeve T-Shirt"
//                         />
//                         {/* third level  */}
//                         <section className="ml-6">
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 fullSleeveTShirt: {
//                                                     ...prevInfo.mens.fullSleeveTShirt,
//                                                     blank: !prevInfo.mens.fullSleeveTShirt.blank
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Full-Sleeve_T-Shirt_blank"
//                                     label="blank"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio

//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 fullSleeveTShirt: {
//                                                     ...prevInfo.mens.fullSleeveTShirt,
//                                                     printed: !prevInfo.mens.fullSleeveTShirt.printed
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Full-Sleeve_T-Shirt_blackprinted"
//                                     label="printed"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio

//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 fullSleeveTShirt: {
//                                                     ...prevInfo.mens.fullSleeveTShirt,
//                                                     raglan: !prevInfo.mens.fullSleeveTShirt.raglan
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Full-Sleeve_T-Shirt_blackraglan"
//                                     label="raglan"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio

//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 fullSleeveTShirt: {
//                                                     ...prevInfo.mens.fullSleeveTShirt,
//                                                     cutAndStitch: !prevInfo.mens.fullSleeveTShirt.cutAndStitch
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Full-Sleeve_T-Shirt_cutandStitch"
//                                     label="Cut and Stitch"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio

//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 fullSleeveTShirt: {
//                                                     ...prevInfo.mens.fullSleeveTShirt,
//                                                     cutAndStitchDesigner: !prevInfo.mens.fullSleeveTShirt.cutAndStitchDesigner
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Full-Sleeve_T-Shirt_cutandStitchDesigner"
//                                     label="Cut and Stitch (Design)"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio

//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 fullSleeveTShirt: {
//                                                     ...prevInfo.mens.fullSleeveTShirt,
//                                                     raglanDesigner: !prevInfo.mens.fullSleeveTShirt.raglanDesigner
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Full-Sleeve_T-Shirt_raglanDesigner"
//                                     label="Raglan (Designer)"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio

//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 fullSleeveTShirt: {
//                                                     ...prevInfo.mens.fullSleeveTShirt,
//                                                     sports: !prevInfo.mens.fullSleeveTShirt.sports
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="Full-Sleeve_T-Shirt_Sports"
//                                     label="Sports"
//                                 />
//                             </ul>
//                         </section>
//                     </ul>
//                 </section>

//                 {/* men shirt  */}

//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isMenShirt: !info.isMenShirt });
//                             }}
//                             type="checkbox"
//                             id="menShirt"
//                             label="Shirt"
//                         />
//                         {/* third level  */}
//                         <section className="ml-6">
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 shirt: {
//                                                     ...prevInfo.mens.shirt,
//                                                     casualShirt: !prevInfo.mens.shirt.casualShirt
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="CasualShirt"
//                                     label="Casual Shirt"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 shirt: {
//                                                     ...prevInfo.mens.shirt,
//                                                     formalShirt: !prevInfo.mens.shirt.formalShirt
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="FormalShirt"
//                                     label="Formal Shirt"
//                                 />
//                             </ul>

//                         </section>
//                     </ul>
//                 </section>

//                 {/* men polo tshirt  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isMenPoloTShirt: !info.isMenPoloTShirt });
//                             }}
//                             type="checkbox"
//                             id="menPolo"
//                             label="Polo"
//                         />
//                         {/* third level  */}
//                         <section className="ml-6">
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 poloTShirt: {
//                                                     ...prevInfo.mens.poloTShirt,
//                                                     classic: !prevInfo.mens.poloTShirt.classic
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="classicPolo"
//                                     label="Classic"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 poloTShirt: {
//                                                     ...prevInfo.mens.poloTShirt,
//                                                     cutAndStitch: !prevInfo.mens.poloTShirt.cutAndStitch
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="cuntandstichPolo"
//                                     label="Cut and Stitch"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 poloTShirt: {
//                                                     ...prevInfo.mens.poloTShirt,
//                                                     printed: !prevInfo.mens.poloTShirt.printed
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="printedPolo"
//                                     label="Printed"
//                                 />
//                             </ul>

//                         </section>
//                     </ul>
//                 </section>

//                 {/* men shorts  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isMenShort: !info.isMenShort });
//                             }}
//                             type="checkbox"
//                             id="menShort"
//                             label="Shorts"
//                         />
//                         {/* third level  */}
//                         <section className="ml-6">
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 shorts: {
//                                                     ...prevInfo.mens.shorts,
//                                                     chinoShorts: !prevInfo.mens.shorts.chinoShorts
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="chinoShorts"
//                                     label="Chino Shorts"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 shorts: {
//                                                     ...prevInfo.mens.shorts,
//                                                     sportsShorts: !prevInfo.mens.shorts.sportsShorts
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="sportShorts"
//                                     label="Sports Shorts"
//                                 />
//                             </ul>

//                         </section>
//                     </ul>
//                 </section>

//                 {/* men underweare  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isMenUderwear: !info.isMenUderwear });
//                             }}
//                             type="checkbox"
//                             id="menUnderwear"
//                             label="Underwear"
//                         />
//                         {/* third level  */}
//                         <section className="ml-6">
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 underwear: {
//                                                     ...prevInfo.mens.underwear,
//                                                     boxerBrief: !prevInfo.mens.underwear.boxerBrief
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="boxerBrief"
//                                     label="Boxer Brief"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 underwear: {
//                                                     ...prevInfo.mens.underwear,
//                                                     boxerShorts: !prevInfo.mens.underwear.boxerShorts
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="boxerShort"
//                                     label="Boxer Short"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 underwear: {
//                                                     ...prevInfo.mens.underwear,
//                                                     trunk: !prevInfo.mens.underwear.trunk
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="boxerTrunk"
//                                     label="Trunk"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 underwear: {
//                                                     ...prevInfo.mens.underwear,
//                                                     wovenShorts: !prevInfo.mens.underwear.wovenShorts
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="wovenshorts"
//                                     label="Woven Shorts"
//                                 />
//                             </ul>

//                         </section>
//                     </ul>
//                 </section>

//                 {/* men shocks  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isMenSocks: !info.isMenSocks });
//                             }}
//                             type="checkbox"
//                             id="menSocks"
//                             label="Socks"
//                         />
//                         {/* third level  */}
//                         <section className="ml-6">
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 socks: {
//                                                     ...prevInfo.mens.socks,
//                                                     classic: !prevInfo.mens.socks.classic
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="classicSocks"
//                                     label="Classic"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 socks: {
//                                                     ...prevInfo.mens.socks,
//                                                     sports: !prevInfo.mens.socks.sports
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="SportsSocks"
//                                     label="Sports"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 socks: {
//                                                     ...prevInfo.mens.socks,
//                                                     urban: !prevInfo.mens.socks.urban
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="UrbanSocks"
//                                     label="Urban"
//                                 />
//                             </ul>

//                         </section>
//                     </ul>
//                 </section>

//                 {/* men accesories  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isMenAccessories: !info.isMenAccessories });
//                             }}
//                             type="checkbox"
//                             id="menAccesories"
//                             label="Accessories"
//                         />
//                         {/* third level  */}
//                         <section className="ml-6">
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 accessories: {
//                                                     ...prevInfo.mens.accessories,
//                                                     belt: !prevInfo.mens.accessories.belt
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="menBelt"
//                                     label="Belt"
//                                 />
//                             </ul>
//                             <ul>
//                                 <CCheckRadio
//                                     onChange={() => {
//                                         setInfo(prevInfo => ({
//                                             ...prevInfo,
//                                             mens: {
//                                                 ...prevInfo.mens,
//                                                 accessories: {
//                                                     ...prevInfo.mens.accessories,
//                                                     wallet: !prevInfo.mens.accessories.wallet
//                                                 }
//                                             }
//                                         }));
//                                     }}
//                                     type="checkbox"
//                                     id="menWallet"
//                                     label="Wallet"
//                                 />
//                             </ul>

//                         </section>
//                     </ul>
//                 </section>
//                 {/* others mens  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     mens: {
//                                         ...prevInfo.mens,
//                                         hoodie: !prevInfo.mens.hoodie
//                                     }
//                                 }));

//                             }}
//                             type="checkbox"
//                             id="Hoodie"
//                             label="Hoodie"
//                         />
//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     mens: {
//                                         ...prevInfo.mens,
//                                         jacket: !prevInfo.mens.jacket
//                                     }
//                                 }));

//                             }}
//                             type="checkbox"
//                             id="Jacket"
//                             label="Jacket"
//                         />
//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     mens: {
//                                         ...prevInfo.mens,
//                                         joggers: !prevInfo.mens.joggers
//                                     }
//                                 }));

//                             }}
//                             type="checkbox"
//                             id="Jogger"
//                             label="Jogger"
//                         />
//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     mens: {
//                                         ...prevInfo.mens,
//                                         jeans: !prevInfo.mens.jeans
//                                     }
//                                 }));

//                             }}
//                             type="checkbox"
//                             id="jeans"
//                             label="jeans"
//                         />
//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     mens: {
//                                         ...prevInfo.mens,
//                                         maggie: !prevInfo.mens.maggie
//                                     }
//                                 }));

//                             }}
//                             type="checkbox"
//                             id="Maggie"
//                             label="Maggie"
//                         />
//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     mens: {
//                                         ...prevInfo.mens,
//                                         panjabi: !prevInfo.mens.panjabi
//                                     }
//                                 }));

//                             }}
//                             type="checkbox"
//                             id="Panjabi"
//                             label="Panjabi"
//                         />
//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     mens: {
//                                         ...prevInfo.mens,
//                                         tupi: !prevInfo.mens.tupi
//                                     }
//                                 }));

//                             }}
//                             type="checkbox"
//                             id="Tupi"
//                             label="Tupi"
//                         />
//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     mens: {
//                                         ...prevInfo.mens,
//                                         sweatshirt: !prevInfo.mens.sweatshirt
//                                     }
//                                 }));

//                             }}
//                             type="checkbox"
//                             id="SweatShirts"
//                             label="Sweat Shirts"
//                         />
//                     </ul>

//                 </section>
//             </ul>

//             {/* women  */}

//             <ul>
//                 <CCheckRadio onChange={() => {
//                     setInfo({ ...info, isWomen: !info.isWomen });
//                 }} type="checkbox" id="Women" label="Women" />

//                 {/* second level  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     womens: {
//                                         ...prevInfo.womens,
//                                         tSirt: !prevInfo.womens.tSirt
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="T-Shirt"
//                             label="T-Shirt"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     womens: {
//                                         ...prevInfo.womens,
//                                         comfyTrouser: !prevInfo.womens.comfyTrouser
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="Comfy trouser"
//                             label="Comfy trouser"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     womens: {
//                                         ...prevInfo.womens,
//                                         kurtiTunicAndTops: !prevInfo.womens.kurtiTunicAndTops
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="Kurti Tunic And Tops"
//                             label="Kurti Tunic And Tops"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     womens: {
//                                         ...prevInfo.womens,
//                                         pajamas: !prevInfo.womens.pajamas
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="Pajamas"
//                             label="Pajamas"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     womens: {
//                                         ...prevInfo.womens,
//                                         pants: !prevInfo.womens.pants
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="Pant"
//                             label="Pant"
//                         />

//                     </ul>
//                 </section>
//             </ul>

//             {/* kids  */}
//             <ul>
//                 <CCheckRadio onChange={() => {
//                     setInfo({ ...info, isKids: !info.isKids });
//                 }} type="checkbox" id="Kids" label="Kids" />

//                 {/* second level  */}
//                 <section className="ml-6">
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo({ ...info, isKidsHalfSleeveTshirt: !info.isKidsHalfSleeveTshirt });
//                             }}
//                             type="checkbox"
//                             id="kidsHalfSleeve"
//                             label="Half Sleeve T-Shirt"
//                         />

//                     </ul>

//                     {/* third level  */}
//                     <section className="ml-6">
//                         <ul>
//                             <CCheckRadio
//                                 onChange={() => {
//                                     setInfo(prevInfo => ({
//                                         ...prevInfo,
//                                         kinds: {
//                                             ...prevInfo.kinds,
//                                             halfSleeveTshirt: {
//                                                 ...prevInfo.kinds.halfSleeveTshirt,
//                                                 blank: !prevInfo.kinds.halfSleeveTshirt.printed
//                                             }
//                                         }
//                                     }));
//                                 }}
//                                 type="checkbox"
//                                 id="Kids_Half-Sleeve_T-Shirt_blank"
//                                 label="blank"
//                             />
//                         </ul>
//                         <ul>
//                             <CCheckRadio
//                                 onChange={() => {
//                                     setInfo(prevInfo => ({
//                                         ...prevInfo,
//                                         kinds: {
//                                             ...prevInfo.kinds,
//                                             halfSleeveTshirt: {
//                                                 ...prevInfo.kinds.halfSleeveTshirt,
//                                                 printed: !prevInfo.kinds.halfSleeveTshirt.printed
//                                             }
//                                         }
//                                     }));
//                                 }}
//                                 type="checkbox"
//                                 id="Kids_Half-Sleeve_T-Shirt_Printed"
//                                 label="Printed"
//                             />
//                         </ul>
//                     </section>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     kinds: {
//                                         ...prevInfo.kinds,
//                                         fullSleeveTShirt: !prevInfo.kinds.fullSleeveTShirt
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="kidsFullSleeveTshirt"
//                             label="Full Sleeve T-Shirt"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     kinds: {
//                                         ...prevInfo.kinds,
//                                         maggie: !prevInfo.kinds.maggie
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="kidsMaggie"
//                             label="Maggie"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     kinds: {
//                                         ...prevInfo.kinds,
//                                         poloTShirt: !prevInfo.kinds.poloTShirt
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="kidsPolo"
//                             label="Polo T-Shirt"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     kinds: {
//                                         ...prevInfo.kinds,
//                                         shorts: !prevInfo.kinds.shorts
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="kidsShorts"
//                             label="Shorts"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     kinds: {
//                                         ...prevInfo.kinds,
//                                         trouser: !prevInfo.kinds.trouser
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="kidsTrousers"
//                             label="Trouser"
//                         />

//                     </ul>

//                 </section>
//             </ul>
//             {/* face mask  */}
//             <ul>
//                 <CCheckRadio onChange={() => {
//                     setInfo({ ...info, isFaceMask: !info.isFaceMask });
//                 }} type="checkbox" id="FaceMask" label="Face Mask" />

//                 {/* second level  */}
//                 <section className="ml-6">

//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     faceMask: {
//                                         ...prevInfo.faceMask,
//                                         kidsMask: !prevInfo.faceMask.kidsMask
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="kidsMask"
//                             label="Kids Maks"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     faceMask: {
//                                         ...prevInfo.faceMask,
//                                         professional7LayerMask: !prevInfo.faceMask.professional7LayerMask
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="professionalMask"
//                             label="Professional 7 Layer Mask"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     faceMask: {
//                                         ...prevInfo.faceMask,
//                                         sportsEdition: !prevInfo.faceMask.sportsEdition
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="sportsEditionMask"
//                             label="Sports Edition"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     faceMask: {
//                                         ...prevInfo.faceMask,
//                                         womensDesigner: !prevInfo.faceMask.womensDesigner
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="womensDesigner"
//                             label="Womens Designer"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     faceMask: {
//                                         ...prevInfo.faceMask,
//                                         womensEmbroidery: !prevInfo.faceMask.womensEmbroidery
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="womensEmbroidery"
//                             label="Womens Embroidery"
//                         />

//                     </ul>

//                 </section>
//             </ul>
//             {/* sports  */}
//             <ul>
//                 <CCheckRadio onChange={() => {
//                     setInfo({ ...info, isSports: !info.isSports });
//                 }} type="checkbox" id="Sports" label="Sports" />

//                 {/* second level  */}
//                 <section className="ml-6">

//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     sports: {
//                                         ...prevInfo.sports,
//                                         footballJersey: !prevInfo.sports.footballJersey
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="footballJersey"
//                             label="Football Jersey"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     sports: {
//                                         ...prevInfo.sports,
//                                         sportsTShirts: !prevInfo.sports.sportsTShirts
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="sportsTShirts"
//                             label="Sports TShirts"
//                         />

//                     </ul>

//                 </section>
//             </ul>

//             {/* merchandise  */}
//             <ul>
//                 <CCheckRadio onChange={() => {
//                     setInfo({ ...info, isMerchandise: !info.isSports });
//                 }} type="checkbox" id="Merchandise" label="Merchandise" />

//                 {/* second level  */}
//                 <section className="ml-6">

//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     merchandise: {
//                                         ...prevInfo.merchandise,
//                                         aurthohin: !prevInfo.merchandise.aurthohin
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="aurthohin"
//                             label="Aurthohin"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     merchandise: {
//                                         ...prevInfo.merchandise,
//                                         grameenphone: !prevInfo.merchandise.grameenphone
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="grameenphone"
//                             label="Grameenphone"
//                         />

//                     </ul>

//                 </section>
//             </ul>
//             <ul>
//                 <CCheckRadio onChange={() => {
//                     setInfo({ ...info, isWinterExclusive: !info.isWinterExclusive });
//                 }} type="checkbox" id="WinterExclisive" label="Winter Exclisive" />

//                 {/* second level  */}
//                 <section className="ml-6">

//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     winterExclusive: {
//                                         ...prevInfo.winterExclusive,
//                                         fullSleeveTShirt: !prevInfo.winterExclusive.fullSleeveTShirt
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="winterfullSleeveTShirt"
//                             label="Full Sleeve T-Shirt"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     winterExclusive: {
//                                         ...prevInfo.winterExclusive,
//                                         hoodie: !prevInfo.winterExclusive.hoodie
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="winterhoodie"
//                             label="Hoodie"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     winterExclusive: {
//                                         ...prevInfo.winterExclusive,
//                                         jacket: !prevInfo.winterExclusive.jacket
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="winterjacket"
//                             label="Jacket"
//                         />

//                     </ul>
//                     <ul>
//                         <CCheckRadio
//                             onChange={() => {
//                                 setInfo(prevInfo => ({
//                                     ...prevInfo,
//                                     winterExclusive: {
//                                         ...prevInfo.winterExclusive,
//                                         joggers: !prevInfo.winterExclusive.joggers
//                                     }
//                                 }));
//                             }}
//                             type="checkbox"
//                             id="winterJoggers"
//                             label="Joggers"
//                         />

//                     </ul>

//                 </section>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;

// // "use client";

// // import CCheckRadio from "@/utils/CCheckRadio/CCheckRadio";
// // import { useState } from "react";

// // const Sidebar = () => {
// //     const initialData = {
// //         newArrival: false,
// //         topSelling: false,
// //         freeDelivary: false,
// //         isMen: false,
// //         isMenHalfSleeveTShirt: false,
// //         isMenFullfSleeveTShirt: false,
// //         isMenShirt: false,
// //         isMenPoloTShirt: false,
// //         isMenShort: false,
// //         isMenUderwear: false,
// //         isMenSocks: false,
// //         isMenAccessories: false,
// //         isWomen: false,
// //         isKids: false,
// //         isKidsHalfSleeveTshirt: false,
// //         isFaceMask: false,
// //         isSports: false,
// //         isMerchandise: false,
// //         isWinterExclusive: false,
// //         mens: {
// //             halfSleeveTShirt: {
// //                 blank: false,
// //                 cutAndStitch: false,
// //                 printed: false,
// //                 raglan: false,
// //                 raglanDesigner: false,
// //                 sports: false,
// //             },
// //             fullSleeveTShirt: {
// //                 blank: false,
// //                 cutAndStitch: false,
// //                 cutAndStitchDesigner: false,
// //                 printed: false,
// //                 raglan: false,
// //                 raglanDesigner: false,
// //                 sports: false,
// //             },
// //             shirt: {
// //                 casualShirt: false,
// //                 formalShirt: false,
// //             },
// //             poloTShirt: {
// //                 classic: false,
// //                 cutAndStitch: false,
// //                 printed: false,
// //             },
// //             shorts: {
// //                 chinoShorts: false,
// //                 sportsShorts: false,
// //             },
// //             underwear: {
// //                 boxerBrief: false,
// //                 boxerShorts: false,
// //                 trunk: false,
// //                 wovenShorts: false,
// //             },
// //             socks: {
// //                 classic: false,
// //                 sports: false,
// //                 urban: false,
// //             },
// //             accessories: {
// //                 belt: false,
// //                 wallet: false,
// //             },
// //             maggie: false,
// //             hoodie: false,
// //             jacket: false,
// //             joggers: false,
// //             sweatshirt: false,
// //             comfyTrouser: false,
// //             sportsTrouser: false,
// //             panjabi: false,
// //             tupi: false,
// //             jeans: false,
// //             chinoPants: false,
// //         },
// //         womens: {
// //             tShirt: false,
// //             comfyTrouser: false,
// //             kurtiTunicAndTops: false,
// //             pajamas: false,
// //             pants: false,
// //         },
// //         kinds: {
// //             halfSleeveTshirt: {
// //                 blank: false,
// //                 printed: false,
// //             },
// //             poloTShirt: false,
// //             maggie: false,
// //             fullSleeveTShirt: false,
// //             shorts: false,
// //             trouser: false,
// //         },
// //         faceMask: {
// //             professional7LayerMask: false,
// //             sportsEdition: false,
// //             womensDesigner: false,
// //             womensEmbroidery: false,
// //             kidsMask: false,
// //         },
// //         sports: {
// //             sportsTShirts: false,
// //             footballJersey: false,
// //         },
// //         merchandise: {
// //             aurthohin: false,
// //             grameenphone: false,
// //         },
// //         winterExclusive: {
// //             fullSleeveTShirt: false,
// //             hoodie: false,
// //             jacket: false,
// //             joggers: false,
// //         },
// //     };

// //     const [info, setInfo] = useState(initialData);

// //     const handleCheckboxChange = (path:any) => {
// //         setInfo(prevInfo => {
// //             const updateState = (obj:any, path:any) => {
// //                 if (path.length === 1) {
// //                     obj[path[0]] = !obj[path[0]];
// //                 } else {
// //                     updateState(obj[path[0]], path.slice(1));
// //                 }
// //             };

// //             const newInfo = { ...prevInfo };
// //             updateState(newInfo, path);
// //             return newInfo;
// //         });
// //     };

// //     const renderCheckboxes = (data:any, parentPath = []) => {
// //         return Object.keys(data).map(key => {
// //             const currentPath = [...parentPath, key];
// //             if (typeof data[key] === 'boolean') {
// //                 return (
// //                     <ul key={key}>
// //                         <CCheckRadio
// //                             onChange={() => handleCheckboxChange(currentPath)}
// //                             type="checkbox"
// //                             id={currentPath.join("_")}
// //                             label={key.replace(/([A-Z])/g, ' $1').trim()}
// //                             checked={data[key]}
// //                         />
// //                     </ul>
// //                 );
// //             } else {
// //                 return (
// //                     <ul key={key}>
// //                         <CCheckRadio
// //                             onChange={() => handleCheckboxChange(currentPath)}
// //                             type="checkbox"
// //                             id={currentPath.join("_")}
// //                             label={key.replace(/([A-Z])/g, ' $1').trim()}
// //                             checked={data[key]}
// //                         />
// //                         <section className="ml-6">
// //                             {renderCheckboxes(data[key], currentPath as any)}
// //                         </section>
// //                     </ul>
// //                 );
// //             }
// //         });
// //     };

// //     return (
// //         <div className="mx-4">
// //             {renderCheckboxes(info)}
// //         </div>
// //     );
// // };

// // export default Sidebar;
