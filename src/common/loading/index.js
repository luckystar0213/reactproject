// import React, { Component } from 'react'
// import { Main } from "./styled"
// export default class Loading extends Component {
//     render() {
//         return (
//             // <div>loading......</div>

//             <Main className='loader'></Main>

//         )
//     }
// }


import React, { Component } from 'react'
import { LoadingContainer } from "./styled"
export default class Loading extends Component {
    render() {
        return (
            <LoadingContainer>
                <div className="dot white"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </LoadingContainer>
        )
    }
}

