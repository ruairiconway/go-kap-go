import React, { useEffect, useState } from 'react'
import InstaImage from '../InstaImage'
import {
    Wrapper,
    Title,
    Link,
    Feed
} from './styles'

export default function InstaFeed({ children, ...prevProps }) {

    const [ instaData, setInstaData ] = useState([])

    useEffect(() => {
        fetch(`https://calm-wildwood-53519.herokuapp.com/api/v1/insta`)
            .then( res => res.json())
            .then( resJson => {
                setInstaData(resJson.data.slice(0,6))
            })
            .catch( err => console.error(err))
    }, [])

    const InstaFeed = instaData.map(item => {
        return <InstaImage
            key={item.id}
            data={item}
        />
    })

    return(
        <Wrapper>
            <Title>Follow the journey <Link href="https://www.instagram.com/sweaty.adventures/" target="_blank">@sweatyadventures #GOKAPGO</Link></Title>
            <Feed>
                {InstaFeed}
            </Feed>
        </Wrapper>
    )
}