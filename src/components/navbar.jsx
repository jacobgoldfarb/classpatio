import Link from 'next/link'

export default function Navbar({selected, defaultQuery, onSearch, authenticated}) {

    return (
        <div className="max-w-full flex justify-between container fixed shadow-bottom bg-white h-20 z-20">
            <div className="ml-10">
                <Logo/>
            </div>
            <div className="flex items-center">
                {<NavItem selected={selected==0} value={'Browse Experiences'} path={'/browse-experiences'}/>}
                {<NavItem selected={selected==1} value={'Learn More'} path={'/learn-more'}/>}
            </div>
        </div>
    )

}

function NavItem({value, path, selected}) {
    var styles = "font-header text-lg mx-8 cursor-pointer"

    return <Link href={path}>
        <div className={styles}>{value}</div>
        </Link>
}

function Logo() {
    return <Link href={'/'}>
        <div className="p-5 text-3xl font-body font-semibold cursor-pointer"> {'classpatio'}</div>
    </Link>
}