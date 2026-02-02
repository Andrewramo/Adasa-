import React from 'react'
import HomeHero from '../HomeHero/HomeHero'
import ChosenArticles from '../ChosenArticles/ChosenArticles'
import ChosenHead from '../ChosenHead/ChosenHead'
import Discover from '../Discover/Discover'
import Recently from '../Recently/Recently'

export default function Home() {
    return (
        <>

            <HomeHero />
            <ChosenHead />
            <Discover />
            <Recently />
        </>
    )
}
