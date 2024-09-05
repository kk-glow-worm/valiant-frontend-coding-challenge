/*************************************
 * helpers
 * ***********************************/
interface Error {
  status: number
  text: string
  url: string
}

const getError = ({ status, statusText: text, url }) => ({
  status,
  text,
  url,
})
/*************************************
 * composable
 * ***********************************/
export const useFetch = async (url: string) => {
  let data = null
  let error: Error = null
  // fetch data
  const res = await fetch(url)
  // save data
  if (res.ok === true) {
    data = await res.json()
  } else {
    error = getError(res)
  }

  return { data, error }
}
