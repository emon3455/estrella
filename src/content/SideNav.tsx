import { FaHome, FaUsers, FaUserPlus, FaUserTie, FaShoppingBag } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineShoppingCart } from "react-icons/md";

interface SideNavLink {
  path?: string;
  title: any;
  nestedRoutes?: SideNavLink[];
}

export const adminsideNavLink: SideNavLink[] = [
  {
    path: "/admin",
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FaHome className="text-lg mr-2" /> Dashbaord{" "}
      </span>
    ),
  },
  {
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FaShoppingBag className="text-lg mr-2" /> Products{" "}
      </span>
    ),
    nestedRoutes: [
      {
        path: "/admin/products",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <MdOutlineShoppingCart className="text-lg mr-2" /> Product List{" "}
          </span>
        ),
      },
      {
        path: "/admin/addProduct",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <MdAddShoppingCart className="text-lg mr-2" /> Add Product{" "}
          </span>
        ),
      },
    ],
  },
  {
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FaUserTie className="text-lg mr-2" />Manage Users{" "}
      </span>
    ),
    nestedRoutes: [
      {
        path: "/admin/users",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <FaUsers className="text-lg mr-2" /> Users List{" "}
          </span>
        ),
      },
    ],
  },
];

export const customersideNavLink: SideNavLink[] = [
  {
    path: "/customer",
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FaHome className="text-lg" /> Dashbaord{" "}
      </span>
    ),
  },
  // this is here for you to get the idea how you can use the nested nav
  {
    title: (
      <span className="flex gap-x-2 items-center">
        {" "}
        <FaUserTie className="text-lg" /> Products{" "}
      </span>
    ),
    nestedRoutes: [
      {
        path: "/customer/product",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <FaUsers className="text-lg" /> Customer Product{" "}
          </span>
        ),
      },
      {
        path: "/customer/addProduct",
        title: (
          <span className="flex gap-x-2 items-center">
            {" "}
            <FaUserPlus className="text-lg" /> Add Product{" "}
          </span>
        ),
      },
    ],
  },
];
