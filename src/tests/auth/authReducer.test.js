import { authReducer } from "../../auth/authReducer";



describe('Pruebas authReducer', () => {
    
    test('debe retornar el estado por defecto', () => {

        const state = authReducer({logged: false},{})
        expect(state).toEqual({logged: false})
    });

    test('debe auteticar y poner el nombre del usuario', () => {
        
    });

    test('debe borrar el name del usuario y logged en false', () => {
        
    });

});