import { useQuery } from "@tanstack/react-query";
export const useGetItems = (link) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(link);
      return await response.json();
    },
  });
  return { pending: isPending, isError: error, data: data };
};
