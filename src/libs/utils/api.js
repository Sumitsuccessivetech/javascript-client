/* eslint-disable */
import axios from 'axios';

export default async function callApi(data, method, url) {
  const mainUrl = 'http://localhost:9000/api' + url;
  console.log('main url is', mainUrl);
  try {
    const resp = await axios({
      method,
      url: mainUrl,
      data,
      headers: { authorization: localStorage.getItem('token') },
    });
    return resp;
  } catch (err) {
    return { status: 'error', message: 'This is a error message' };

  }
}