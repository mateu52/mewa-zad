import Link from "next/link";

export const Header = () => {
    return (
        <div>
            <ul className="pt-2 mb-4 ml-3 flex">
                <li className="pr-2 hover:italic"><Link href={'/'}>komentarze </Link></li>
                <li className="hover:italic"><Link href={'/form'}>formularz</Link></li>
            </ul>
        </div>
    )
}