export const saveConfig = (config: Record<string, any>) => {
  window.localStorage.setItem('userConfig', JSON.stringify(config))
}

export const loadConfig = (): Record<string, any> => {
  const config = window.localStorage.getItem('userConfig')
  return JSON.parse(config)
}

export const save = (id: string, saveData: Record<string, any>) => {
  window.localStorage.setItem(id, JSON.stringify(saveData))
}

export const load = (id: string): Record<string, any> => {
  const userSave = window.localStorage.getItem(id)
  return JSON.parse(userSave || '{}')
}

export const saveExist = (id: string): boolean => {
  const userSave = window.localStorage.getItem(id)
  return userSave ? true : false
}

export const clearSave = (id: string) => {
  window.localStorage.removeItem(id)
}
