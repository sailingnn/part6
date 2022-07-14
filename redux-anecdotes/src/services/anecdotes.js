import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (id, object) => {
    const putUrl = `${baseUrl}/${id}`
    const response = await axios.put(putUrl, object)
    return response.data
}

const voteOf = async (id) => {
    const putUrl = `${baseUrl}/${id}`
    const noteToChange = await axios.get(putUrl)
    const object = { 
        ...noteToChange.data, 
        votes: noteToChange.data.votes + 1 
    }
    const response = await axios.put(putUrl, object)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, update, voteOf }