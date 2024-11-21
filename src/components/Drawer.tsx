

// export default Drawer;
import Link from "next/link";
import { useState } from "react";


const Drawer = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    // Define your categories and items dynamically
    const categories = [
        {
            name: "Mens",
            items: [
                { name: "Hoodie", href: "/shop/menHoodie" },
                { name: "Jacket", href: "/shop/menJacket" },
                { name: "Joggers", href: "/shop/menJoggers" },
                { name: "Sweatshirt", href: "/shop/menSweatshirt" },
                { name: "Comfy Trouser", href: "/shop/menComfyTrouser" },
                { name: "Sports Trouser", href: "/shop/menSportsTrouser" },
                { name: "Panjabi", href: "/shop/menPanjabi" },
                { name: "Tupi", href: "/shop/menTupi" },
                { name: "Jeans", href: "/shop/menJeans" },
                // Add more items here
            ],
            subcategories: [

                {
                    name: "Half Sleeve T-shirt",
                    items: [
                        { name: "Show All", href: "/shop/menHalfSleeveTShirt" },
                        { name: "Blank", href: "/shop/menHalfSleeveTShirtBlank" },
                        { name: "Cut & Stitch", href: "/shop/menHalfSleeveTShirtCutAndStitch" },
                        { name: "Printed", href: "/shop/menHalfSleeveTShirtPrinted" },
                        { name: "Raglan", href: "/shop/menHalfSleeveTShirtRaglan" },
                    ]
                },
                {
                    name: "Full  Sleeve T-shirt",
                    items: [
                        { name: "Show All", href: "/shop/menFullSleeveTShirt" },
                        { name: "Blank", href: "/shop/menFullSleeveTShirtBlank" },
                        { name: "Cut & Stitch", href: "/shop/menFullSleeveTShirtCutAndStitch" },
                        { name: "Printed", href: "/shop/menFullSleeveTShirtPrinted" },
                        { name: "Raglan", href: "/shop/menFullSleeveTShirtRaglan" },
                    ]
                },
                {
                    name: "Shirt",
                    items: [
                        { name: "Show All", href: "/shop/menShirt" },
                        { name: "Casual Shirt", href: "/shop/menCasualShirt" },
                        { name: "Formal Shirt", href: "/shop/menFormalShirt" },
                    ]
                },
                {
                    name: "Polo T-Shirt",
                    items: [
                        { name: "Show All", href: "/shop/menPoloTShirt" },
                        { name: "Cut & Stitch ", href: "/shop/menPoloTShirtCutAndStitch" },
                        { name: "Classic", href: "/shop/menPoloTShirtClassic" },
                        { name: "Printed", href: "/shop/menPoloTShirtPrinted" },
                    ]
                },
                {
                    name: "Shorts",
                    items: [
                        { name: "Show All", href: "/shop/menShorts" },
                        { name: "Chino Shorts", href: "/shop/menChinoShorts" },
                        { name: "Sports Shorts", href: "/shop/menSportsShorts" },
                        // Add more items here
                    ],
                },
                {
                    name: "Underwear",
                    items: [
                        { name: "Show All", href: "/shop/menUnderwear" },
                        { name: "Boxer Brief", href: "/shop/menBoxerBrief" },
                        { name: "Boxer Shorts", href: "/shop/menBoxerShorts" },
                        { name: "Trunk", href: "/shop/menTrunk" },
                        { name: "Woven Shorts", href: "/shop/menWovenShorts" },
                        // Add more items here
                    ],
                },
                {
                    name: "Socks",
                    items: [
                        { name: "Classic", href: "/shop/menSocksClassic" },
                        { name: "Sports", href: "/shop/menSocksSports" },
                        { name: "Urban", href: "/shop/menSocksUrban" },
                        // Add more items here
                    ],
                },
            ],
        },
        {
            name: "Womens",
            items: [
                { name: "T-Shirt", href: "/shop/womenTShirt" },
                { name: "Comfy Trouser", href: "/shop/womenComfyTrouser" },
                { name: "Kurti Tunic And Tops", href: "/shop/womenKurtiTunicAndTops" },
                { name: "Pajamas", href: "/shop/womenPajamas" },
                { name: "Pants", href: "/shop/womenPants" },
                // Add more items here
            ],
            subcategories: [], // No subcategories for now
        },
        {
            name: "Kids",
            items: [
                { name: "Polo T-shirt", href: "/shop/kidsPoloTShirt" },
                { name: "Full Sleeve T-shirt", href: "/shop/kidsFullSleeveTShirt" },
                { name: "Maggie", href: "/shop/kidsMaggie" },
                { name: "Shorts", href: "/shop/kidsShorts" },
                { name: "Trouser", href: "/shop/kidsTrouser" },
                // Add more items here
            ],
            subcategories: [
                {
                    name: "Half Sleeve T-shirt",
                    items: [
                        { name: "Show All", href: "/shop/isKindsHalfSleeveTshirt" },
                        { name: "Blank", href: "/shop/kidsHalfSleeveTShirtBlank" },
                        { name: "Printed", href: "/shop/kidsHalfSleeveTShirtPrinted" },
                        
                    ]
                },
            ], // No subcategories for now
        },
        {
            name: "Face Mask",
            items: [
                { name: "Professional 7 Layer Mask", href: "/shop/faceMaskProfessional7LayerMask" },
                { name: "Sports Edition", href: "/shop/faceMaskSportsEdition" },
                { name: "Womens Designer Edition", href: "/shop/faceMaskWomensDesigner" },
                { name: "Womens Embroidery Edition", href: "/shop/faceMaskWomensEmbroidery" },
                { name: "Kids Mask", href: "/shop/faceMaskKidsMask" },
                
                // Add more items here
            ],
            subcategories: [], // No subcategories for now
        },
        {
            name: "Winter Exclusive",
            items: [
                { name: "Full Sleeve T-shirt", href: "/shop/winterExclusiveFullSleeveTShirt" },
                { name: "Hoodie", href: "/shop/winterExclusiveHoodie" },
                { name: "Jacket", href: "/shop/winterExclusiveJacket" },
                { name: "Joggers", href: "/shop/winterExclusiveJoggers" },
                // Add more items here
            ],
            subcategories: [], // No subcategories for now
        },
        {
            name: "Sports",
            items: [
                { name: "Sports T-shirt", href: "/shop/sportsTShirts" },
                { name: "Football Jersey", href: "/shop/sportsFootballJersey" },
                // Add more items here
            ],
            subcategories: [], // No subcategories for now
        },
    ];

    // Function to render subcategories recursively
    const renderSubcategories = (subcategories: any) => {
        return (

            <ul className="ml-4 ">
                {subcategories.map((subcategory: any, index: any) => (
                    <li key={index}>
                        <details className="cursor-pointer ">
                            <summary className="font-semibold">{subcategory.name}</summary>
                            <ul>
                                {subcategory.items.map((item: any, i: any) => (
                                    <li key={i}>
                                        <Link href={item.href}>
                                            <span className="ml-4 transform duration-200 hover:text-secondary hover:font-semibold  cursor-pointer ">{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <div className="relative">
                <button onClick={handleClick} className="text-2xl flex items-center gap-1 cursor-pointer peer">
                    {click ? "✕" : "☰"}
                </button>

                <div className={` absolute bg-white w-full left-0 lg:w-auto lg:py-0  lg:pl-0 transition-all ease-in duration-800 ${click ? 'top-[5px] -left-1 opacity-100 z-30 w-4/6 md:1/3' : ' left-[-400px] opacity-0 '
                    } `}>


                    <div className={click ? 'overflow-y-scroll  space-y-4  text-black w-80 bg-white absolute top-11 -left-5 lg:-left-7 z-20 p-4' : 'hidden'}>
                        <h1 className="text-black text-xl font-bold">Categories</h1>

                        {categories.map((category, index) => (
                            <details key={index} className="cursor-pointer">
                                <summary className="font-bold ">{category.name}</summary>
                                <Link className="py-4" href={`/shop/`}>
                                    <span className="my-4 ml-4 ">Show All</span>
                                </Link>
                                {category.subcategories.length > 0 && renderSubcategories(category.subcategories)}
                                <ul className="ml-4  ">
                                    {category.items.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.href}>
                                                <span className=" transform duration-200 hover:text-secondary hover:font-semibold cursor-pointer ">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ))}

                        <ul className="space-y-4">
                            <li>
                                <Link className="font-bold mt" href={'/shop/'}>New Arrival</Link>
                            </li>
                            <li>
                                <Link className="font-bold mt" href={'/shop/'}>Top Selling</Link>
                            </li>
                            <li>
                                <Link className="font-bold mt" href={'/shop/'}>Free Delivery</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;