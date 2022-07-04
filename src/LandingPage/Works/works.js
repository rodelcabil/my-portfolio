import React from 'react'
import { ColumnContainer, WorksContainer, RowContainer } from './works-elements'
import { Button } from '../../globalStyles'
import OtherWorksSection from './Sections/OtherWorks/othersWorks'
import Footer from '../Footer/footer'
const WorksPage = () => {
    return (
        <>
            <OtherWorksSection/>
            <Footer/>
        </>
    )
}

export default WorksPage
