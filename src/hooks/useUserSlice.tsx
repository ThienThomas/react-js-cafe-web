import userSlice from "../store/user.slice"
import {useSelector} from 'react-redux'
 
const useUserSlice = () => {
  const data = useSelector((state: any) => state)
  return {
    user: data?.user,
    actions: userSlice.actions,
    token: data?.auth?.accessToken
    
  }
}
export default useUserSlice