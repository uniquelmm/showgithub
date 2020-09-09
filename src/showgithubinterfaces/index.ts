export interface RootObject {
  // eslint-disable-next-line no-use-before-define
  data: {
    // eslint-disable-next-line no-use-before-define
    items: Item[]; // 所有变种
  };
}

export interface Item {
  data: {
    name?: string;
    fullName: string;
    stargazersCount: number; // stars
    forksCount?: number; // fork
    openIssuesCount?: number; // open issues
  };
}

export interface Owner {
  data: {
    login?: string; // 名称
    avatarUrl?: string; // 图片
    htmlUrl: string; // 链接
  };
}
