export async function sendToApi(responseBody) {
    let data_json = {"data": responseBody};
    console.log(data_json);
    return await fetch("https://lordlucha-diffuser-api.hf.space/run/txt2img", {
        method: "POST",
        headers: { 
            "Authorization": "Bearer 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",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data_json)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data["data"][0];
    })
    .catch(error => {
        console.log(error);
        return "retry.";
    });
  }
  
  
  export async function handleData(data){
    const default_neg_promt = "disfigured, kitsch, ugly, oversaturated, grain, low-res, Deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur";
    let responseBody = [        
        data['promt'] + ", octane render, unreal engine 5, 8K, atmospheric lighting, intricate, detailed",
        data['neg_promt']? data['neg_promt']: default_neg_promt,
        parseFloat(data['guidanceScale']),
        parseFloat(data['steps']),
        parseFloat(data['width']),
        parseFloat(data['height']),
        parseFloat(data['seed']),
        data["checkbox"]? true:false
    ];
    return responseBody;
}

let apiUrl

if (process.env.NODE_ENV === 'development') {
    apiUrl = `http://localhost:4000`
}
else {
    apiUrl = `https://aipperal-backend-production-4b16.up.railway.app`
}

export default apiUrl
