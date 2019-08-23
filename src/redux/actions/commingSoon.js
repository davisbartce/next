import { SAVE_SUSCRIBER, SAVE_SUSCRIBER_FAILURE, SAVE_SUSCRIBER_SUCCESS } from '../types';
import fetch from 'isomorphic-unfetch';

export const saveSuscriber = (data) => async (dispatch, getState) => {

  // const res = await fetch('http://jaque-backend.teon.ec/api/v1.0/web/suscriber/store', {
  const res = await fetch('https://backend.jaque.com.ec/api/v1.0/web/suscriber/store', {
    method: 'POST',
    body: JSON.stringify({ email: data.email }),
    headers: { 'Content-Type': 'application/json' }
  });
  const result = await res.json();
  console.log(data, result, "data del formulario");
  dispatch({ type: SAVE_SUSCRIBER });
}


// export const uploadCsv = (formData, token, next) => async (dispatch, getState) => {
//   let url = `${XONE_CASH_API}/v1/importCsv/mapFields`;
//   dispatch({ type: LOADER_TRUE });
//   try {
//     let { data } = {}
//     data = await axios.post(url, formData, { headers: { 'Authorization': 'Bearer ' + token } })
//     dispatch({ type: FETCH_CSV_OPTIONS, payload: data })
//     message.success('Archivo subido con éxito')
//     next();
//   } catch (error) {
//     message.error(
//       (error.response && error.response.status && error.response.status === 422 && error.response.data.error)
//         ? <span>{error.response.data.error.map((item) => item.value + '. ')} </span>
//         : 'Ha ocurrido un error al subir el archivo'
//     )
//   }
//   dispatch({ type: LOADER_FALSE });
// }