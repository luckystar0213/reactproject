import React from "react";
import Header from "components/header"
import { ProList } from "./styled"
import ProListCon from "components/prolistcon"
export default class ProjectList extends React.Component {
    render() {
        return (
            <ProList>
                <Header />
                <ProListCon/>
            </ProList>
        )
    }
}

 