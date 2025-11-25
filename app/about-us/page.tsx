import React from 'react'
import Hero from './components/Hero'
import MissionVission from './components/MissionVission'
import Journey from './components/Journey'
import StatisticsBar from './components/Statistics'
// import TraditionalItems from './components/TraditionalItems'
// import Features from './components/Features'
// import OurCommitment from './components/OurCommitment'
// import Newsletter from './components/Newsletter'
import { Values } from './components/OurCoreValues'
import MeetTheTeam from './components/MeetTheTeam'
import Cta from './components/Cta'

const page = () => {
    return (
        <div>
            <Hero />
            <MissionVission />
            <Journey />
            <StatisticsBar />
            <Values />
            <MeetTheTeam />
            <Cta />
        </div>
    )
}

export default page