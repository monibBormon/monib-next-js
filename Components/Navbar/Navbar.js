import Link from 'next/link'


const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link href={`/`}>
                        <li>Home</li>
                    </Link>
                    <Link href={`/blog`}>
                        <li>Blog</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;