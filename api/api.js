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

  const API = {
    apiCall:apiCall
  }

export default API