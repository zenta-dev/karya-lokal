export const registrationFormControls = [
    {
        id: 'name',
        type: 'text',
        placeholder:'Enter your name',
        label: 'Name',
        componentType: 'input',
    },
    {
        id: 'email',
        type: 'email',
        placeholder:'Enter your email',
        label: 'Email',
        componentType: 'input',
    },
    {
        id: 'password',
        type: 'text',
        placeholder:'Enter your password',
        label: 'Password',
        componentType: 'input',
    },
    {
        id: 'role',
        type: '',
        placeholder:'',
        label: 'Role',
        componentType: 'select',
        options:[
            {
                id: 'admin',
                label: 'Admin',
            },
            {
                id: 'customer',
                label: 'Customer',
            },
        ]
    },
]

export const loginFormcONTROLS = [
    {
        id: 'email',
        type: 'email',
        placeholder:'Enter your email',
        label: 'Email',
        componentType: 'input',
    },
    {
        id: 'password',
        type: 'text',
        placeholder:'Enter your password',
        label: 'Password',
        componentType: 'input',
    },
]