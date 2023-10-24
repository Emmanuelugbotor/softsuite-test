// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router-dom";
import { Sidebar, Header, Footer } from "../components";

const sidebarItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: "/icons/dashboard.svg",
    link: "/dashboard",
  },
  {
    id: 2,
    label: "Payment Activities",
    icon: "/icons/payroll.svg",
    link: "/payment-activities",
    children: [
      {
        id: `child-${1}`,
        label: "Payroll Run",
        link: "/payment-activities/run",
      },
      {
        id: `child-${2}`,
        label: "Payroll Reversal",
        link: "/payment-activities/reversal",
      },
      {
        id: `child-${3}`,
        label: "Payroll History",
        link: "/payment-activities/history",
      },
      {
        id: `child-${4}`,
        label: "Payroll Lock",
        link: "/payment-activities/lock",
      },
      {
        id: `child-${5}`,
        label: "Enable Payslip",
        link: "/payment-activities/payslip",
      },
      {
        id: `child-${6}`,
        label: "Payroll Log",
        link: "/payment-activities/log",
      },
      {
        id: `child-${7}`,
        label: "Payroll Approval",
        link: "/payment-activities/approval",
      },
    ],
  },
  {
    id: 3,
    label: "Salary Structure",
    icon: "/icons/salary.svg",
    link: "/salary-structure",
  },
  {
    id: 4,
    label: "Element Setup",
    icon: "/icons/setting.svg",
    link: "/element/setup",
    children: [
      { id: `child-${1}`, label: "Elements", link: "/element/setup" },
      { id: `child-${2}`, label: "Balances", link: "/balances" },
    ],
  },
  { id: 5, label: "Employees", icon: "/icons/users.svg", link: "/employees" },
  {
    id: 6,
    label: "Payroll Management",
    icon: "/icons/setting.svg",
    link: "/payroll-management",
    children: [
      {
        id: `child-${1}`,
        label: "Payroll Options",
        link: "/payment-management/options",
      },
      {
        id: `child-${2}`,
        label: "Deduction Account Setup",
        link: "/payment-management/deduction-account-setup",
      },
      {
        id: `child-${3}`,
        label: "Variation Portal Period",
        link: "/payment-management/variation-portal-period",
      },
      {
        id: `child-${4}`,
        label: "Paygroup Setup",
        link: "/payment-management/paygroup-setup",
      },
      {
        id: `child-${5}`,
        label: "Tax Setup",
        link: "/payment-management/tax-setup",
      },
    ],
  },
  {
    id: 7,
    label: "My Account",
    icon: "/icons/profile.svg",
    link: "/my-account",
  },
  { id: 8, label: "Logout", icon: "/icons/logout.svg", link: "/none" },
];

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main_page">
        <Sidebar items={sidebarItems} />
        <div className="container-fluids px-5 py-4 main_content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
