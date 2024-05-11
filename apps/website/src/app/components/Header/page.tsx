import Link from "next/link";

export const Header = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>komentarze 1</Link></li>
                <li><Link href={'/form'}>formularz</Link></li>
                <li><Link href={'/list'}>komentarze 2</Link></li>
            </ul>
        </div>
    )
}