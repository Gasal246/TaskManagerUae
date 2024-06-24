import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEYS } from "./queryKeys"

// export const useGetUserByUserid = (userid: string) => {
//     return useQuery({
//         queryKey: [QUERY_KEYS.GET_USER_BY_ID, userid],
//         queryFn: async () => getUserById(userid),
//         enabled: !!userid
//     })
// }
