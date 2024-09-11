export const validateTodoInput = {
    name: 'todoText',
    validationParams: {
        required: {
            value: true,
            message: 'Todo is empty'
        },
        maxLength: {
            value: 50,
            message: 'max length is 50 symbols'
        }
    }
}