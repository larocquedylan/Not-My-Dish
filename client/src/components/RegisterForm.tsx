import React, { FormEvent, ChangeEvent, FunctionComponent } from 'react';

interface RegisterFormProps {
  onSubmitRegister: (username: string, password: string, email: string) => void;
}

const RegisterForm: FunctionComponent<RegisterFormProps> = ({ onSubmitRegister }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSubmitRegister(username, password, email);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>): void {
    setter(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="regUsername">Username:</label>
        <input
          id="regUsername"
          type="text"
          onChange={(e) => handleChange(e, setUsername)}
          value={username}
        />
      </div>
      <div>
        <label htmlFor="regPassword">Password:</label>
        <input
          id="regPassword"
          type="password"
          onChange={(e) => handleChange(e, setPassword)}
          value={password}
        />
      </div>
      <div>
        <label htmlFor="regEmail">Email:</label>
        <input
          id="regEmail"
          type="email"
          onChange={(e) => handleChange(e, setEmail)}
          value={email}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
