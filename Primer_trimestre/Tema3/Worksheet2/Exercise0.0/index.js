// Crea un array de coches con 4 valores
coches = [
    {brand:"BMW", model:"1", gearbox:"manual", fuel:"gasoline"},
    {brand:"BMW", model:"7", gearbox:"authomatic", fuel:"diesel"},
    {brand:"Mercedes-Benz", model:"G", gearbox:"manual", fuel:"gasoline"},
    {brand:"Mercedes-Benz", model:"S", gearbox:"authomatic", fuel:"hybrid"},
    {brand:"BMW", model:"X4", gearbox:"authomatic", fuel:"diesel"},
    {brand:"BMW", model:"7", gearbox:"authomatic", fuel:"diesel"},
    {brand:"BMW", model:"M5", gearbox:"manual", fuel:"gasoline"},
    {brand:"Mercedes-Benz", model:"EQA", gearbox:"authomatic", fuel:"electric"},
    {brand:"Mercedes-Benz", model:"AMG GT", gearbox:"manual", fuel:"gasoline"}
]

coches.sort((a, b)=>{
    if (a.brand > b.brand)
        return 1000;
    else if (a.brand < b.brand)
        return -5000;
    else{
        if (a.model > b.model)
            return 1;
        else if (b.model > a.model)
            return -1;
        else{
            if (a.gearbox > b.gearbox)
                return 1;
            else if (b.gearbox > a.gearbox)
                return -1;
            else{
                if (a.fuel > b.fuel)
                    return 1;
                else if (b.fuel > a.fuel)
                    return -1;
                else
                    return 0
            }
        }
    }
        
})

/*
coches.sort((a, b)=>{
    if (a.brand > b.rand)
        return 1;
    else if (a.brand < b.brand)
        return -1;
    else
        return a.model - b.model
})
*/