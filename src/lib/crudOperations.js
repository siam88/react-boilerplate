import axios from './customAxios';


const headerConfig = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
}

/* --------------- GET METHOD USING AXIOS --------------- */
export const getApi = async (url, params = {}) => {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')

    return await axios.get(`${url}?${queryString}`).then(res => res.data).catch(err => console.log(err))

}


/* --------------- POST METHOD USING AXIOS --------------- */
export const postApi = async (url, params = {}, value, valueType) => {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    return valueType = "formData" ?
        await axios.post(`${url}?${queryString}`, value, headerConfig).then(res => res.data).catch(err => console.log(err)) 
        :  await axios.post(`${url}?${queryString}`, value, headerConfig).then(res => res.data).catch(err => console.log(err))
  
}
/* --------------- POST METHOD USING AXIOS --------------- */
export const putApi = async (url, params = {}, value, valueType) => {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')

    return valueType = "formData" ?
    await axios.put(`${url}?${queryString}`, value, headerConfig).then(res => res.data).catch(err => console.log(err)) 
    :  await axios.put(`${url}?${queryString}`, value, headerConfig).then(res => res.data).catch(err => console.log(err))
}
/* --------------- DELETE METHOD USING AXIOS --------------- */
export const deleteApi = async (url, id) => {
    return await axios.delete(`${url}/${id}`).then(res => res.data).catch(err => console.log(err))
}

