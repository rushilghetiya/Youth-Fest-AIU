import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Drawer, Menu } from "@mantine/core";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  handleContactClick?: () => void;
  handleEventsClick?: () => void;
  menuItemColor?: string; // New prop to customize menu item colors
}

export const NavBar = ({
  handleContactClick,
  handleEventsClick,
  menuItemColor = "text-white", // Default to white if no color is passed
}: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Define your logo URLs
  const homeLogo = "/srm_logo_white.png";
  const otherPageLogo = "/srm_logo_blue.png";
  // Determine if the current page is the home page
  const isHomePage = pathname === "/";

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/?tab=events", customHandler: handleEventsClick },
    { label: "Registrations", href: "/?tab=registrations" },
    { label: "Invitation", href: "/?tab=invitation" },
    { label: "Sponsors", href: "/?tab=sponsors" },
    { label: "Schedule", href: "/?tab=schedule" },
    { label: "Messages", href: "/?tab=messages" },
    { label: "Judgemental Appeal", href: "/?tab=judgemental" },
    { label: "Contact", href: "/#footer", customHandler: handleContactClick }, // Added anchor for contact
  ];

  const downloadLinks = [
    { label: "Curriculum Vitae", href: "/Curriculam-Vitae.pdf" },
    { label: "Eligibility Certificate", href: "/Eligibility-Certificate.pdf" },
    {
      label: "Event Rules and Regulations",
      href: "/Kritiutsav-Event-Rules-and-Regulations-Website.pdf",
    },
    { label: "CheckList", href: "/CheckList-KritiUtsav.pdf" },
  ];

  const handleLinkClick = (link: string, customHandler?: () => void) => {
    if (customHandler) customHandler();
    else router.push(link);
  };

  return (
    <div className="bg-custom-purple flex w-full items-center justify-between py-8 px-4">
      {/* Conditionally render the logo based on the current route */}
      <div className="relative h-[85px] w-[150px] cursor-pointer">
        <Image
          src={isHomePage ? homeLogo : otherPageLogo}
          alt="Logo"
          fill
          className="absolute"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="z-[100] hidden md:block">
        {links.map(({ label, href, customHandler }) => (
          <span
            key={label}
            className={`mr-7 cursor-pointer text-lg font-bold ${menuItemColor}`}
            onClick={() => handleLinkClick(href, customHandler)}
          >
            {label}
          </span>
        ))}
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <div
              className={`inline-flex cursor-pointer items-center text-lg font-bold ${menuItemColor}`}
            >
              <span>Downloads</span>
              <MdArrowDropDown className="ml-0.5 mr-7" />
            </div>
          </Menu.Target>
          <Menu.Dropdown>
            {downloadLinks.map(({ label, href }) => (
              <Menu.Item
                className="text-custom-dropdown_blue hover:bg-custom-dropdown_hover"
                key={label}
                onClick={() => window.open(href)}
              >
                {label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </div>
      <GiHamburgerMenu
        size={30}
        className="z-[100] cursor-pointer md:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      />
      <Drawer
        opened={openMenu}
        onClose={() => setOpenMenu(false)}
        position="left"
        size="75%"
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <div className="flex h-full flex-col items-center justify-center gap-16">
          {links.slice(1).map(({ label, href, customHandler }) => (
            <span
              key={label}
              className={`text-custom-purple mr-5 cursor-pointer text-lg font-bold ${menuItemColor}`}
              onClick={() => handleLinkClick(href, customHandler)}
            >
              {label}
            </span>
          ))}
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <span className="text-custom-purple mr-5 cursor-pointer text-lg font-bold">
                Download
              </span>
            </Menu.Target>
            <Menu.Dropdown>
              {downloadLinks.map(({ label, href }) => (
                <Menu.Item key={label} onClick={() => window.open(href)}>
                  {label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </div>
      </Drawer>
    </div>
  );
};
