import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins'
import { toast } from 'react-hot-toast'

export default function useDeleteCabin() {
  const queryclient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('cabin successfully deleted!')

      queryclient.invalidateQueries({
        queryKey: ['cabins'],
      })
    },

    onError: err => toast.error(err.message),
  })

  return {
    isDeleting,
    deleteCabin,
  }
}
