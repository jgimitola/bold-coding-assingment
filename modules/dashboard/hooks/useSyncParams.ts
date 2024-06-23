import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

const useSyncParams = <T extends {}>() => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const syncParam = (params: URLSearchParams, query: string, term: unknown) => {
    const termType = typeof term;

    if (term && ['boolean', 'nuber', 'string'].includes(termType)) {
      params.set(query, `${term}`);
    } else {
      params.delete(query);
    }
  };

  const syncParams = (filters: T) => {
    const params = new URLSearchParams(searchParams);

    const entries = Object.entries(filters);

    entries.forEach(([query, term]) => {
      syncParam(params, query, term);
    });

    replace(`${pathname}?${params.toString()}`, undefined, { shallow: true });
  };

  return syncParams;
};

export default useSyncParams;
