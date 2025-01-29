export const formatId = (id: number) =>
  id > 99 ? `#${id}` : id > 9 ? `#0${id}` : `#00${id}`
