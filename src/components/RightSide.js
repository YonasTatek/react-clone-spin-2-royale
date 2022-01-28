import React from 'react'
import RightHeader from './RightHeader';
import Selection from './Selection';
import TotalBet from './TotalBet';
import MaxWin from './MaxWin.js';
import RightBottom from './RightBottom';
import RightBody from './RightBody';
export default function RightSide() {
    return (
        <div style={{backgroundColor:"#222234"}}>
          <RightHeader/>
          <Selection/>
          <RightBody/>
          <TotalBet/>
          <MaxWin/>
          <RightBottom/>
        </div>
    )
}
