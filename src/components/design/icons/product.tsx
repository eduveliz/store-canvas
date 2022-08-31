function PickProductIcon({size}: { size: number }) {
    return (
        <svg fill='none' stroke='#3d4853' stroke-width="2px" width="24px" height={size} viewBox="0 0 24 24">
            <path d="M16.8 4.5l-1.4-.3M15.4 4.2l-3.6-.8L2 13.2l3.9 3.9 4 4 9.8-9.8-.8-3.7"></path>
            <path d="M18.4 2c.8-.1 1.5.1 2 .6 1 1 .8 2.9-.5 4.2l-.2.2c-1.2 1.1-3 1.2-4 .3"></path>
        </svg>
    )
}

export default PickProductIcon
