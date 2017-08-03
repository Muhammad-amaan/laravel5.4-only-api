import React from 'react';
export default class Users extends React.Component{

    // loadData(){
    //     fetch('http://localhost:8000/api/get/users')
    //         .then(response => response.json())
    // .then((users) => {
    //
    //         this.setState({ users });
    //     console.log(users);
    //     });
    // }


    render(){

        // if (!this.state.users) {
        //     return (<div>Loading</div>);
        // }

        return(
                <div>
                <h1>Users</h1>
                </div>
              );
    }
}