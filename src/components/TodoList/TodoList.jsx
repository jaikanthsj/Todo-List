import { useState } from "react";
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = (props) => {

    const {list,deleteItem,triggerEdit}= props

    if(list.length<=0)
    {
        return(
            <center>Hurray No pending items</center>
       )
    }
    return(
        <>
            {/* <div onClick = {()=> setUseFilter('all')} className='filter-options'>All</div>
        <div onClick = {()=> setUseFilter('low')} className='filter-options'>Low</div>
        <div onClick = {()=> setUseFilter('medium')} className='filter-options'>Medium</div>
        <div onClick = {()=> setUseFilter('high')} className='filter-options'>High</div> */}
            {list.map((item,index) => (
            <TodoListItem key={index} item={item} index={index} onDelete={deleteItem} onEdit={triggerEdit}/>
            ))}
        </>
    )
}

export default TodoList;