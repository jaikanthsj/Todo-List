import { useState } from "react";
import "./TodoListItem.css";

const TodoListItem = (props) => {
    const {item,onDelete,onEdit,index} = props
    const {title,priority,_id}=item;
    const [isChecked, setChecked] = useState(false);

    return(
        <div className={`item-card ${priority}`}>
            {isChecked?(
                    <span className="material-symbols-outlined pointer" onClick={() => setChecked(false)}>
                        priority
                    </span>
                    ) : (
                    <span className="checkbox pointer" onClick={() => setChecked(true)}/> 
                    )
                }
                
            <div className={`card-title ${isChecked?'strike':''}`}>{title}</div>
            <div className="badge">{priority}</div>
            <span className="material-symbols-outlined pointer edit" onClick={()=>onEdit(item)}>
                edit
            </span>
            <span className="material-symbols-outlined pointer delete" onClick={()=> onDelete(_id)}>
                delete
            </span>
            
        </div>
    )
}

export default TodoListItem;