/**
 * 菜单
 * Created by MFChen on 22/12/2016.
 */
module.exports = [
  {
    key: 'main/error',
    name: '仪表盘',
    icon: 'laptop'
  },
  {
    key: 'main/actives',
    name: '活动管理',
    icon: 'rocket',
  },
  {
    key: 'main/navigation',
    name: '测试导航',
    icon: 'setting',
    child: [
      {
        key: 'navigation1',
        name: '二级导航1',
      },
      {
        key: 'navigation2',
        name: '二级导航2',
      },
      {
        key: 'navigation3',
        name: '二级导航3',
      },
    ],
  },
];
