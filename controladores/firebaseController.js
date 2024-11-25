const {db}= require('../firebase/firebase');
exports.index = async(request, response)=>
{
    let querySnatshot=await db.collection('cotizaciones').get();
    

    /*let datos=querySnatshot.docs.map(doc=>({
        id: doc.id,
       ...doc.data()
    }));*/
    let datos=querySnatshot.docs.map(doc=>({
        id: doc.id,
        nombre: doc.data().nombre,
        correo: doc.data().correo,
        telefono: doc.data().telefono,
        ciudad: doc.data().ciudad,
        direccion: doc.data().direccion,
        detalle: doc.data().detalle,
        fecha: doc.data().fecha,
    }));
    return response.json(datos);
}
exports.show = async(request, response)=>
{
    const {id} = request.params;
    let dato =  await db.collection('cotizaciones').doc(id).get();
    if(dato.data()==undefined)
    {
        return response.status(404).json({ estado:"error", mensaje: "Recurso no disponible"});
    }
    return response.json(dato.data());
     
}
exports.create = async(request, response)=>
{
    const {nombre, correo, telefono, ciudad, direccion, detalle} = request.body;
    await db.collection('cotizaciones').add({
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        ciudad: ciudad,
        direccion: direccion,
        detalle: detalle,
        fecha: Date.now()
    });
    return response.status(201).json({ estado:"ok", mensaje: "Se creó el registro exitosamente"});
}
exports.update = async(request, response)=>
{
    const {id} = request.params;
    let dato =  await db.collection('cotizaciones').doc(id).get();
    if(dato.data()==undefined)
    {
        return response.status(404).json({ estado:"error", mensaje: "Recurso no disponible"});
    }
    const {nombre, correo, telefono, ciudad, direccion, detalle} = request.body;
    await db.collection('cotizaciones').doc(id).update({
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        ciudad: ciudad,
        direccion: direccion,
        detalle: detalle,
    }); 
    return response.status(200).json({ estado:"ok", mensaje: "Se modificó el registro exitosamente"});
}
exports.destroy = async(request, response)=>
{
    const {id} = request.params;
    let dato =  await db.collection('cotizaciones').doc(id).get();
    if(dato.data()==undefined)
    {
        return response.status(404).json({ estado:"error", mensaje: "Recurso no disponible"});
    }
    await db.collection('cotizaciones').doc(id).delete();
    return response.status(200).json({ estado:"ok", mensaje: "Se eliminó el registro exitosamente"});
}