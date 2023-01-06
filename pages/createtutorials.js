import Form from '../components/Form';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function CreateTutorials({ user }) {
  return (
    <div className='h-full'>
      <Form user={user} />
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
