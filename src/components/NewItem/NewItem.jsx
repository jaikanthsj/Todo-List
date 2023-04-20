import { useEffect, useState } from 'react';
import './NewItem.css'

const NewItem = (props) => {
    const {addItem,editState,editItem} = props
    const [title,setTitle] = useState('');
    const [priority,setPriority] = useState('low');
    const isEdit = Boolean(editState._id)
    // const[showContents,setShowContents] = useState(false);

    useEffect(()=>{
        if(editState._id){
            setTitle(editState.title)
            setPriority(editState.priority)
        }
    },[editState])

    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const handleClear = () => {
        setTitle('');
        setPriority('low');
    }
    const handleSave = () => {
        
        if(!title){
            return;
        }
        const obj={
            title,
            priority
        }
        if(isEdit){
            obj._id=editState._id;
            editItem(obj)
        }
        else{
        addItem(obj)
        }
        setTitle('')
        setPriority('low')
        
    }
    const PRIORITY=['low','medium','high'];
    return(
        <div className="new-item-card">
            <div className="checkbox"></div>
            <div className='form-container' >
                <input placeholder='Enter here...'  value={title} onChange={handleInputChange} />
                {
                    title&&(<div>
                        <div className="badge-container">
                            {PRIORITY.map((p) => <div key={p} className={`p-badge ${p} ${p==priority && 'selected'}`} onClick={()=>setPriority(p)}>{p}</div>)}
                        </div>
                        <div className='btn-container'>
                    <button className='primary' onClick={handleSave}>Save</button>
                    <button className='secondary' onClick={handleClear}>Clear</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default NewItem;