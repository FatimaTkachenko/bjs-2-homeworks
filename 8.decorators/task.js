function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash, value: result});
    
    if (cache.length > 5) { 
      cache.shift();
    }
    
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  
  wrapper.count = 0;
  wrapper.allCount = 0;
  
  function wrapper(...args) {
    wrapper.allCount++;
    
    if (timeoutId === null) {
      wrapper.count++;
      func.apply(this, args);
    } else {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func.apply(this, args);
      timeoutId = null;
    }, delay);
  }
  
  return wrapper;
}