// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = (url: RequestInfo): any =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/${url}`).then((r) => r.json());
