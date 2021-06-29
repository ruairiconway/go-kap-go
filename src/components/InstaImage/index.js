import React, { useState } from 'react'
import {
    Wrapper,
    Image,
    Link
} from './styles'

export default function InstaImage({ data, children, ...prevProps}) {

    const [ hovered, isHovered ] = useState(false)

    const handleHovered = () => {
        isHovered(!hovered)
    }

    return (
        <Wrapper
            onMouseEnter={handleHovered}
            onMouseLeave={handleHovered}
            hovered={hovered}
        >
            <Link href="https://www.instagram.com/sweaty.adventures/" target="_blank" rel="noreferrer">
                <Image
                    src={data.media_url}
                    alt={data.caption}
                />
            </Link>
        </Wrapper>
    )
}