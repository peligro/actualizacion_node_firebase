exports.index = (request, response)=>
    {
        return response.json(
            {
                mensaje : "Ejemplo Firebase"
            });
    }