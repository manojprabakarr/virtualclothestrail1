self.addEventListener("install",e=>{
   e.waitUtil(
       caches.open("static").then(cache=>{
           return cache.addAll(["./","./frontend/index.html"])
       })
   )
})
self.addEventListener("fetch",e=>{
    console.log(`intercepting ${e.request.url}`)
})