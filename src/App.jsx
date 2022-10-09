import { IconBrandFacebook, IconBrandGithubCopilot, IconLogin } from '@tabler/icons';

export default function App() {
    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button onClick={() => console.log('Register')} type='submit'>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button onClick={() => console.log('Register')} type='submit'>
                    <IconBrandGithubCopilot />
                    Login
                </Button>
                <Button
                    className='bg-pink-600'
                    onClick={() => console.log('Login')}
                    type='button'
                >
                    <IconLogin />
                    Log In
                </Button>
            </div>
        </div>
    );
}

//Component
function Button(props) {
    const { className='bg-blue-600', children, text } = props;
    return (
        <button
            {...props}
            className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-2 text-white px-4 py-2 rounded`}
        >
            {text || children}
        </button>
    );
}
