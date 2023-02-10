"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
    href,
    children,
    onClick,
    className = "",
}: {
    href: string;
    children: React.ReactNode;
    onClick?: any;
    className?: string;
}): JSX.Element {
    let segment = useSelectedLayoutSegment();
    let active = href === `/${segment || ""}`;
    return (
        <Link
            href={href}
            className={`${
                active ? "bg-teal-900 text-white" : "hover:bg-teal-900/50 hover:text-white text-gray-300"
            } px-3 py-2 rounded-md text-sm font-medium ${className}`}
            {...(onClick && { onClick: onClick })}
        >
            {children}
        </Link>
    );
}
