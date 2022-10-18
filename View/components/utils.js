import storage from "./storage"

const getUserId = async()=>{
    var data = await storage.load({
        key:"userId"
    })
    if(data)
    {
        return data
    }
    return ''
    
}

const setUserId = async (id)=>{
    var data = await storage.save({
        key:"userId",
        data:id,
    })
}

const AppUtils = {
    getUserId:getUserId,
    setUserId:setUserId,
}

export default AppUtils