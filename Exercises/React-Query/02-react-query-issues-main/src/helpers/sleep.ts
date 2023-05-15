


export const aumentarTiempoDeRespuesta = (seconds : number = 1): Promise<boolean> => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
        
    });
}