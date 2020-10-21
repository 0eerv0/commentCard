import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard  from './ApprovalCard'

const App=() =>{
    return (
        <div className='ui container comments'>
        <ApprovalCard>
            <div>
            <h4 style={{color:'orange', textAlign:"center",backgroundColor: "black"}} >WARNING!</h4>
            </div>
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail 
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}  
            timeAgo='Today at 4:45 PM' 
            />
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail 
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}  
            timeAgo='Today at 6:15 PM'/>
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail 
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}   
            timeAgo='Today at 1:00 AM'/>
        </ApprovalCard>
         </div>


    );

}

ReactDOM.render(<App/> ,document.querySelector('#root'))