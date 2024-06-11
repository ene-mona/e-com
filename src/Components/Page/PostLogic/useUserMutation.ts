import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

interface formValues {
  first_name: string
  last_name: string
  phone: string
  email: string
  password: string
}

const newUser = async (values: formValues, routeTo: string) => {
  try {
    const response = await axios.post(`http://localhost:5000/${routeTo}`, values)
    return { success: true, data: response.data }
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error('An error occurred while processing your request.')
    }
  }
}

export const useUserMutation = (routeTo: string) => {
  const queryClient = useQueryClient()

  return useMutation((values: formValues) => newUser(values, routeTo)
}
