'use client';

import { Dot } from "lucide-react";
import Link from "next/link";

import { MagneticButton, Center } from "@/_components";
import { navItems } from "@/_data/";
import { randomId } from "@/_utils";

interface NavItem {
    href: string;
    title: string;
}

export function NavBarList() {
    const items = navItems.slice(1).map(({href, title}) => {
        const id = randomId();
        return(
            <li key={id} className="group p-4">
                <Link href={href} passHref>
                    <MagneticButton variant="default" size="default">
                        <span className="text-base capitalize">{title}</span>
                        <Center>
                            <Dot className="scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100"/>
                        </Center>
                    </MagneticButton>
                </Link>
            </li>
        )
    })
    return <ul className="flex items-center max-lg:hidden">{items}</ul>
}