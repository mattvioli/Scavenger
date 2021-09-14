import * as SecureStore from 'expo-secure-store';

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
  let result = await SecureStore.getItemAsync(key);
  console.log("saved " + result)
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  console.log(result)
  if(result) {
    return result
  } else {
    alert('Invalid key!')
  }
}

