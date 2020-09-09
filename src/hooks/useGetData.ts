import { useMemo } from "react";
import useSWR, { keyInterface } from "swr";

import { fetcher } from "../utils/fetcher";
import { transform } from "../utils/transform";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useGetData(API: keyInterface): [any, boolean] {
  const { data, error } = useSWR(API, fetcher);

  const newData = useMemo(() => transform(data), [data]);

  return [newData, error];
}
