const apiCall = async(start)=>{
    let fData = new FormData()
    fData.append("security_token","07074158857cf9694e0774d49fbc8e6a")
    fData.append("members_id","1")
    fData.append("start",`${start}`)
    fData.append("meeting_status","0")
    const response = await fetch('http://meetpass.app/app_beta/my-meetings',{
      method: 'POST',
      body: fData
    })
    let jsonData = await response.json()
    return jsonData
  }

const homeApi = async()=>{
  let formData = new FormData()
  formData.append("security_token","07074158857cf9694e0774d49fbc8e6a")
  formData.append("members_id","2")

  const response = await fetch('http://meetpass.app/app_beta/home',{
      method: 'POST',
      body: formData
    })
    let jsonData = await response.json()
    return jsonData
} 

  const API = {
    apiCall:apiCall,
    homeApi:homeApi,
  }

export default API