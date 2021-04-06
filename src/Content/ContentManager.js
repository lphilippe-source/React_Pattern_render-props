import React from 'react'
import {ContentLogic} from './ContentLogic'
import Sider from './ContentComponent/Sider'
import {PutADiv} from './ContentComponent/PutADiv'

//props.render(children here) return Sider, + some props u pass to him (truc) (see ContentLogic)
export const ContentManager = () => {

    return (
        <ContentLogic>
            {(truc)=><Sider someEventOnClick={truc}></Sider>}
            {(givenProps)=><PutADiv givenProps={givenProps} ></PutADiv>}
        </ContentLogic>
    )
}



