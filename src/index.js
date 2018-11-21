import Dexie from 'dexie'

export const db = (() => {
  const db = new Dexie("storage_database")
  db.version(1).stores({
    storage: 'key, value'
  })
  return db
})()

const removeByKey = async key => {
  if (!key) throw new Error("Key is not provided")
  return db.storage.delete(key)
}

const clearAll = async () => db.storage.clear()

const storeByKey = async (key, value) => db.storage.put({key, value})

const getAll = async () => {
  const storage = await db.storage.toArray()
  return storage.reduce((acc, elem) => Object.assign(acc, {[elem.key]: elem.value}), {})
}

const getByKey = async key => {
  const data = await db.storage.get(key)
  return data ? data.value : undefined
}

const storeFromObject = async (obj) => {
  const data = Object.entries(obj).map(([key, value]) => ({key, value}))
  return db.storage.bulkPut(data)
}

const hasKey = async key => {
  const data = await getByKey(key)
  return !!data
}

const size = async () => db.storage.toCollection().count()

const add = async (key, value) => {
  const data = await getByKey(key)
  if (Array.isArray(value) && Array.isArray(data)) {
    return storeByKey(key, value.concat(data))
  }
  if (typeof value === "object" && typeof data === "object") {
    return storeByKey(key, Object.assign(data, value))
  }
  return storeByKey(key, value)
}

export const store = async (key, value) => {
  if (typeof key === "object") {
    return storeFromObject(key)
  }
  if (typeof key === "boolean" && key === false && !value) {
    return clearAll()
  }
  if (!key && !value) {
    return getAll()
  }
  if (key && typeof key !== "boolean" && !value) {
    return getByKey(key)
  }
  if (key && value) {
    return storeByKey(key, value)
  }
}

store.set = storeByKey
store.setAll = storeFromObject
store.get = getByKey
store.getAll = getAll
store.clear = clearAll
store.remove = removeByKey
store.has = hasKey
store.size = size

export default store