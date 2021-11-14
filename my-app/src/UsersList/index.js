
import './index.css'

const UsersList = (props) => {
    const {eachUserData,onDeleteUserDetails,onChangeCheckbox} = props
    const {id,name,email,role,isChecked} = eachUserData

    const onDeleteUser = () => {
        onDeleteUserDetails(id)
    }

    const onChangeUserCheckbox = () => {

        onChangeCheckbox(id)
        
    }

    //if li container is selected change background-color 
    const liBackgroundColor = isChecked ? 'selected-checkbox' :''

    return (
        <li className={`user-li-container ${liBackgroundColor}`}>
            <input type='checkbox' onChange={onChangeUserCheckbox} checked={isChecked} className='input-container' />
            <div className='user-row-container'>
            <div>
                <h1>Name: {name}</h1>
                <p>Email: {email}</p>
                <p>Role: {role}</p>
            </div>
            <button onClick={onDeleteUser} className='delete-btn' type='button'>
           <img 
           className='delete-img' src='https://assets.ccbp.in/frontend/react-js/money-manager/delete.png' alt='delete' />
            </button>
            </div>
        </li>
    )
}

export default UsersList