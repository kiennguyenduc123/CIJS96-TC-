import {useParams} from 'react-router-dom'
import { users } from './data';

const UserDetail = ()=> {
    
    const params = useParams();
    console.log(params)
    //lấy thông tin người dùng
    const crrUser = users.find((item) => String(item.id) === String(params.id));
    return (
       <div>
        {crrUser ? (
        <p>Chi tiết người dùng, {crrUser.userName}</p>
    ): (
        <p>Không tồn tại thông tin người dùng</p>
    )}
       </div>
    )
}

export default UserDetail;