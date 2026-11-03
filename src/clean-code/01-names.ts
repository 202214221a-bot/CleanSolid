(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagges: false },
        { id: 2, flagges: false },
        { id: 3, flagges: true },
        { id: 4, flagges: false },
        { id: 5, flagges: false },
        { id: 7, flagges: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( (file) => file.flagges );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const ddmmyyyy = new Date();
    
    // días transcurridos - elapsed time in days
    const d: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const dir = 33;
    
    // primer nombre - first name
    const nombre = 'Fernando';
    
    // primer apellido - last name
    const apellido = 'Herrera';

    // días desde la última modificación - days since modification
    const dsm = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;


})();