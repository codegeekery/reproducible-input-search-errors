import { useQuery } from '@tanstack/react-query'; // Importa el hook useQuery
import { client } from '@/sanity/lib/client'; // Asegúrate de que esta ruta sea correcta
import { SEARCH_POSTS } from "@/app/components/queries"; // Importa las consultas

/////////////////////////////////////////////////////////////////////////
// Define los hooks para usar las consultas
/////////////////////////////////////////////////////////////////////////



// Hook para buscar posts por término de búsqueda
export function useSearchPosts(SEARCH) {
    const { isFetching: isLoading, data: postData } = useQuery({
        queryKey: ['search', SEARCH],
        queryFn: async () => {
            const data = await client.fetch(SEARCH_POSTS, { SEARCH: `${SEARCH}*` });
            return data;
        },
        enabled: !!SEARCH,
    });

    return { isLoading, postData };
}

