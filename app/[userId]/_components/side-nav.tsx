import Image from "next/image";
import Link from "next/link";
import { TAB_LIST } from "@/constants/user/nav-tab";
import { SideNavProps } from "./type";

const SideNavigation = ({ activeTab, userId }: SideNavProps) => {
    return (
        <nav className="w-[280px] h-screen border-r-[1px] border-GREY-20">
            <ul className="pt-[92px] flex-center flex-col">
                {TAB_LIST.map((tab) => {
                    const tabTitle =
                        tab.title === "레포지토리 목록"
                            ? "repo-list"
                            : "custom-message";
                    const isActive = activeTab === tabTitle;
                    return (
                        <li key={tab.title} className="w-[200px] h-12">
                            <Link
                                href={`/${userId}/${tabTitle}`}
                                className={`flex items-center p-2 cursor-pointer ${
                                    activeTab === tabTitle
                                        ? "text-BRAND-50"
                                        : "text-SYSTEM-black"
                                } hover:text-BRAND-50 text-base font-semibold w-full h-12 mr-2.5`}
                            >
                                <Image
                                    width={18}
                                    height={18}
                                    src={isActive ? tab.hoverIcon : tab.icon}
                                    alt={tab.title}
                                    className="mr-[15px]"
                                />
                                <p>{tab.title}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SideNavigation;
