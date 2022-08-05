import Form from '../components/Form';
import { useFetchUser } from '../lib/user'

export default function CreateTutorials({ user }) {
  return (

    <div>
      <Form user={user}/>
    </div>
  );
}
