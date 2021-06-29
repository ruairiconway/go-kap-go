import React from 'react'
import {
    Wrapper,
    Image,
    Link
} from './styles'

export default function InstaImage({ data, children, ...prevProps}) {
    return (
        <Wrapper >
            <Link href="https://www.instagram.com/sweaty.adventures/" target="_blank" rel="noreferrer">
                <Image
                    src={data.media_url}
                    alt={data.caption}
                />
            </Link>
        </Wrapper>
    )
}