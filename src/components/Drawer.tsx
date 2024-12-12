

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
                { name: "Short sleeve t-shirt", href: "#" },
                { name: "Long sleeve t-shirt", href: "#" },
                { name: "Polo shirt", href: "#" },
                { name: "Sports jersey", href: "#" },
                { name: "Dress shirt", href: "#" },
                { name: "Casual shirt", href: "#" },
                { name: "Katua", href: "#" },
                { name: "Panjabi", href: "#" },
                { name: "Trouser", href: "#" },
                { name: "Cargo pant", href: "#" },
                { name: "Under wear", href: "#" },
                { name: "Tank top", href: "#" },
                { name: "Sweat shirt", href: "#" },
                { name: "Hoodie", href: "#" },
                // Add more items here
            ],
        },
        {
            name: "Womens",
            items: [
                { name: "Comfy top bottom set", href: "#" },
                { name: "Kurti, Tunic, & Tops", href: "#" },
                // Add more items here
            ],

        },
        {
            name: "Kids",
            items: [
                { name: "Top bottom set", href: "#" },
                { name: "T-shirt", href: "#" },
                { name: "Polo shirt", href: "#" },
                { name: "Sleeve less t-shirt", href: "#" },
                { name: "3 Quarter shorts", href: "#" },
                { name: "Trouser", href: "#" },
                // Add more items here
            ],
       // No subcategories for now
        },
        // {
        //     name: "Bulk Order",
        //     items: [
        //         { name: "Bulk Order", href: "#" },                
        //         // Add more items here
        //     ],
        // },
       
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