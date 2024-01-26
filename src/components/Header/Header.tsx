import Link from "next/link";

export const Header = () => {
    // nextjs infiere que este componente es de tipo client porque su padre es de tipo "use client"
    console.log("Hello World Header")
    return (
        <header>
            <nav>
                <ul>
                    <Link href="/">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link href="/store">
                        <li>
                            Store
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}