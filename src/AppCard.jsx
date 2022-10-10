// import { IconBrandFacebook, IconBrandGithubCopilot, IconLogin } from '@tabler/icons';
// import Button from './components/Button';
import ButtonClsx from './components/ButtonClsx';
import Card from './components/Card';

//sama kayak function dibawah
const Title = () => (
    <>
        <h1>Hello World</h1>
        <h4>Hello World</h4>
    </>
);
//parent func=App
const AppDefault = () => {
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'>
            <div className='max-w-2xl w-full flex items-center gap-4'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure rem doloremque optio nemo assumenda voluptate quas
                        fugit blanditiis praesentium rerum suscipit distinctio deleniti ab ratione ipsum culpa, a soluta!
                    </Card.Body>
                    <Card.Footer>
                        <ButtonClsx>Register</ButtonClsx>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure rem doloremque optio nemo assumenda voluptate quas
                        fugit blanditiis praesentium rerum suscipit distinctio deleniti ab ratione ipsum culpa, a soluta!
                    </Card.Body>
                    <Card.Footer>
                        <ButtonClsx>Register</ButtonClsx>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};
export default AppCard;
