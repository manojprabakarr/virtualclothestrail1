if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration=>{
        console.log("sw registerded")
        console.log(registration)
    })
    .catch(error=>{
        console.log("sw registeration failed");
        console.log(error)
    })

}