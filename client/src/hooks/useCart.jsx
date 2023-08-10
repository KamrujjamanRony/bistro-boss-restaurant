import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            // check jwt verification
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            console.log(res.data)
            return res.data;
        }
    })
    return [cart, refetch];
};

export default useCart;