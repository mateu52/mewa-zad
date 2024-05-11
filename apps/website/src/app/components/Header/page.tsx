import Link from "next/link";

export const Header = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>komentarze</Link></li>
                <li><Link href={'/form'}>formularz</Link></li>
            </ul>
        </div>
    )
}