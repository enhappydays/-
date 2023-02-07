interface IMenu{
  name:string,
  key:string
}
interface IMenuS{
  name:string,
  menus:IMenu[]
}

export function useMenu() {
  const menus:IMenuS[] = [
    {
      name: "第一批",
      menus: [
        {
          name:'date-picker',
          key:'date-picker'
        }
      ],
    },
  ];
  return {menus}
}
