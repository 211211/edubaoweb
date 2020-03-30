import axios from 'axios'
export const API_ROOT_URL = 'https://cloud.squidex.io/api'
const CLIENT_ID = process.env.SQUIDEX_CLIENT_ID
const CLIENT_SECRET = process.env.SQUIDEX_CLIENT_SECRET
const DEBUG_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlYzV0d4cU5rcWlpNl9OM2l4Wk9xY3ciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE1ODUxMTQzNjQsImV4cCI6MTU4NzcwNjM2NCwiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImF1ZCI6InNxdWlkZXgtYXBpIiwiY2xpZW50X2lkIjoiNWRlZGYyYjU5OTk3NTAwMDAxNDYyYTVhIiwic3ViIjoiNWRlZGYyYjU5OTk3NTAwMDAxNDYyYTVhIiwic2NvcGUiOlsic3F1aWRleC1hcGkiXX0.e6EUt27XzM2rQqcC6y07IwjtPfjTcVHNZUUphw8ERjZQhjKrc6cJlaH3ngNYgyx-Y0zLQpetoSsRyaA5WXe0tSgB3ee_MQLvg6tC3wrNuy9reKxInlypKFTZhqHIUxGG6zKSQJBGVnI6Krt_08bHcLib2JCqc2_ANMdK_BRjfHue3hpsVAb1uDTUV0r96m4Uj4N-ZfxK1yq0pX4X4WzcWthBvG51_gTQ_stn6VB8269eavbH02thfJ4dubzmGJKSw8vJGxxiQpR0zgMPjXqQVEsg85y3hvd_NA-RaSkhbCnVGmuzZtLtEQJ8ulRZE919DieqpSefLrzFZmJRNWhj0Q'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let ACCESS_TOKEN = ''
if (typeof window !== `undefined`) {
  ACCESS_TOKEN = window.localStorage.getItem('token') || DEBUG_TOKEN
} else {
  ACCESS_TOKEN = DEBUG_TOKEN
}

const URL = 'https://cloud.squidex.io/identity-server/connect/token'
const BODY = {
  grant_type: 'client_credentials',
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  scope: 'squidex-api'
}

export const getToken = async () => {
  const { data, status } = await axios.post(
    URL,
    { ...BODY },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )

  if (status !== 200) {
    return
  }

  return data
}

export const post = async (path: string) => { }

export const get = async (path: string, headers?: any) => {
  const token = window.localStorage.getItem('token') || ACCESS_TOKEN
  const { data, status } = await axios.get(
    API_ROOT_URL + path + '?timestamp=' + Math.floor(Date.now()),
    {
      headers: { Authorization: `Bearer ${token}`, ...(headers || {}) }
    }
  )

  if (status !== 200) {
    return
  }

  return data.items
}
