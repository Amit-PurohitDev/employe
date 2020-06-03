import React, { Component } from 'react';
import Card from '../SubComponent/Card';
import {MainWrapper} from '../../GlobalComponent/MainStyle';
import Pagination from "react-js-pagination";
import UserList from '../../Api/UserList';




class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            UserList: [],
            activePage: 15
        }
    }
    componentDidMount(){
        let userData = [];
        UserList.get("/user.json").then(
            (res) => {
                userData=res.data;
                this.setState({UserList:userData});
            });
            console.log(userData)
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }

    render(){
        return(
            <MainWrapper
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
            
            >
                {
                    this.state.UserList.map((res, idx)=>{
                        return <Card key={idx} listData={res}/>
                    })
                }
            </MainWrapper>
        );
    }
}

export default Main;