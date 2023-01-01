import Link from "next/link";

const Logo = ({image, brand, onClick}) => {
    return (
        <>
            <Link href="/">
                <a className='flex items-center' onClick={onClick}>
                    <img src={`${image}`} className='mr-3 h-6 sm:h-9' />
                    <span className='self-center text-xl font-semibold whitespace-nowrap'>{brand}</span>
                </a>
            </Link>
        </>
    );
};

export default Logo