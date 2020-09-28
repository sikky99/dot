import React from 'react'
import DashboardNav from '../pages-sections/Components-Sections/DashboardNav'
import PieChart from '../charts/PieChart'
import SimpleArea from '../charts/SimpleArea'
import SplineArea from '../charts/SplineArea'
import StepArea from '../charts/StepArea'
import SidebySide from '../charts/SidebySide'
import SidebySideStack from '../charts/SidebySideStack'
import FullStackedBar from '../charts/FullStackedBar'
import SeriesInteraction from '../charts/SeriesInteraction'
import SimpleBar from '../charts/SimpleBar'
import StackedArea from '../charts/StackedArea'
import StackedBar from '../charts/StackedBar'
import Axes from '../charts/Axes'
import Scatter from '../charts/Scatter'
import Donought from '../charts/Donought'
import MultipleAxes from '../charts/MultipleAxes'
import Exportl from '../charts/Exportl'
import Zoom from '../charts/Zoom'
import BalanceSheet from '../sheet/BalanceSheet'

const Dashboard = () => {
    return (
        <div>
            <DashboardNav />
            <Exportl />
            <Zoom />
            <SimpleArea />
            <SimpleBar />
            <PieChart/>
            <SplineArea/>
            <StepArea/>
            <SidebySide/>
            <SidebySideStack/>
            <FullStackedBar/>
            <StackedArea/>
            <StackedBar/>
            <Axes/>
            <Scatter />
            <Donought />
            <BalanceSheet />
            {/* <MultipleAxes /> */}
            
            
        </div>
    )
}

export default Dashboard
