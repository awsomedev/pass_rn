import AppUtils from "../View/components/utils"

const apiCall = async(start)=>{
    let fData = new FormData()
    let userId = await AppUtils.getUserId()
    fData.append("security_token","07074158857cf9694e0774d49fbc8e6a")
    fData.append("members_id",userId)
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
  let userId = await AppUtils.getUserId()

  formData.append("security_token","07074158857cf9694e0774d49fbc8e6a")
  formData.append("members_id",userId)

  const response = await fetch('http://meetpass.app/app_beta/home',{
      method: 'POST',
      body: formData
    })
    let jsonData = await response.json()
    return jsonData
} 

const loginApi = async(number='',country='')=>{
  let formData = new FormData()

  formData.append("security_token","07074158857cf9694e0774d49fbc8e6a")
  formData.append("mobile",number)
  formData.append("country_id",country)
  formData.append("app_token","12")

  const response = await fetch('http://meetpass.app/app_beta/login-submit',{
      method: 'POST',
      body: formData
    })
    let jsonData = await response.json()
    return jsonData
} 

  const API = {
    apiCall:apiCall,
    homeApi:homeApi,
    loginApi:loginApi,
  }

export default API