// import { useQuery } from '@tanstack/react-query'
import Response from './response.json'

export function useGetProductByCategory() {
    return Response

//     return useQuery({
//     queryKey: ['users'],
//     queryFn: async () => {
//       const res = await fetch('https://api.example.com/users')
//       if (!res.ok) throw new Error('Network error')
//       return res.json()
//     },
//   })
}
