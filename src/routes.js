/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

//icons from assets
import GridIcon from "assets/img/grid.svg";
import ListingIcon from "assets/img/tag.svg";
import UserIcon from "assets/img/users.svg";
import FaqIcon from "assets/img/help-circle.svg"
import CustomDashboard from "views/CustomDashboard/CustomDashboard";
import Listings from "views/Listings/Listings";
import Faq from "views/FAQ/Faq";

const dashboardRoutes = [
  {
    path: "/customdashboard",
    name: "Dashboard",
    rtlName: "1لوحة القيادة",
    icon: GridIcon,
    component: CustomDashboard,
    layout: "/admin",
  },

  {
    path: "/listings",
    name: "Listings",
    rtlName: "1لوحة القيادة",
    icon: ListingIcon,
    component: Listings,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User",
    rtlName: "ملف تعريفي للمستخدم",
    icon: UserIcon,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/faq",
    name: "FAQ",
    rtlName: "قائمة الجدول",
    icon: FaqIcon,
    component: Faq,
    layout: "/admin",
  },
];

export default dashboardRoutes;
