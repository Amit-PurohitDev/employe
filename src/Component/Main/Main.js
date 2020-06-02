import React, { Component } from 'react';
import Card from '../SubComponent/Card';
import UserList from '../../Api/UserList';
import {MainWrapper} from '../../GlobalComponent/MainStyle';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            UserList: []
        }
    }

componentDidMount(){
    let UList = [];
    UserList.get('/')
    .then((res)=>{
        console.log(res);
    });
}

    render(){
        return(
            <MainWrapper>
                <Card />
            </MainWrapper>
        );
    }
}

export default Main;