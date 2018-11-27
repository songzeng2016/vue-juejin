const requestParameters = {
  url_getListByLastTime: '/books/v1/getListByLastTime', // 获取小册列表
  url_get_entry_by_rank: '/search/v1/get_entry_by_rank', // 获取发现列表

  arg_getListByLastTime: {
    uid: '',
    client_id: '',
    token: '',
    src: 'web',
    alias: '',
    pageNum: 1,
  },
  arg_get_entry_by_rank: {
    src: 'web',
    limit: 20,
    category: 'all',
  },
};

export {
  requestParameters
};
