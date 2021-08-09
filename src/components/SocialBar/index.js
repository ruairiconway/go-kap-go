import React from 'react'
import {
    Wrapper,
    Link
} from './styles'
import { Icon } from '@iconify/react'
import stravaIcon from '@iconify/icons-simple-icons/strava'
import gofundmeIcon from '@iconify/icons-simple-icons/gofundme'
import bxlInstagramAlt from '@iconify/icons-bx/bxl-instagram-alt'

export default function SocialBar({ stacked, ...prevProps }) {
    return (
        <Wrapper {...prevProps} stacked={stacked} >
            <Link href="https://www.instagram.com/sweaty.adventures/" target="_blank" order="1">
                <Icon icon={bxlInstagramAlt} style={{fontSize: '24px'}} />
            </Link>
            <Link href="https://www.gofundme.com/f/bpyqf7-running-4-a-reason?utm_source=widget&utm_medium=referral&utm_campaign=p_cp+share-sheet" target="_blank" order="2">
                <Icon icon={gofundmeIcon} style={{fontSize: '24px'}} />
            </Link>
            <Link href="https://www.strava.com/athletes/26728316" target="_blank" order="3">
                <Icon icon={stravaIcon} style={{fontSize: '24px'}} />
            </Link>
        </Wrapper>
    )
}