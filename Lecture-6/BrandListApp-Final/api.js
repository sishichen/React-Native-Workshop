
export const fetchBrands = () => fetch('https://core-staging.honestbee.com/api/brands?country_code=TW&serviceType=food&locale=zh-TW')
  .then(result => result.json());

export const asyncBrands = async () => {
  const response = await fetch('https://core-staging.honestbee.com/api/brands?country_code=TW&serviceType=food&locale=zh-TW');
  const json = await response.json();
  return json;
};
