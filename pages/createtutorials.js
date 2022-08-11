import Form from '../components/Form';
import { useFetchUser } from '../lib/user'

export default function CreateTutorials({ user }) {
  return (

    <div className="h-screen ">
      <Form user={user}/>
    </div>
  );
}
